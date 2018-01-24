<?php
/**
 * Title:   Fulcrum Webhook for syncing data shares to MySQL database
 * Notes:   Requires PHP with PDO & allow_url_fopen enabled
 * Author:  Bryan R. McBride
 * Note CUSP Fulcrum User Dave Brown  This is edited to work for 
 * CUSP API Test DB per instruction from Fulcrum Data MySQL DataShares 
 * Source:  https://gist.github.com/bmcbride/44afdc10ee943b4e7b92
 */
# Fulcrum app information
$formID = '3ffce3bc-7804-4fb5-83c4-60e4e8b23a64';
$shareToken = 'bab0ca54f7bc1d13.csv';
# MySQL database connection info
$host = '66.112.23.251:444';
$dbname = 'fulcrum_test';
$user = 'dave';
$password = 'LuCydoG54!';
$table = 'api_test_table';
$db = new PDO('mysql:host=' . $host . ';dbname=' . $dbname, $user, $password);
# Webhook JSON payload
//$input = file_get_contents('mysql_webhook_payload.json'); # Local file for debugging
$input = file_get_contents('php://input'); # POST data from webhook
$payload = json_decode($input, true);
# Make sure it's the form we want
if ($payload['data']['form_id'] == $formID) {
  # Fetch record info from data share
  $geojson = file_get_contents('https://web.fulcrumapp.com/shares/' . $shareToken . '.geojson?fulcrum_id=' . $payload['data']['id']);
  $features = json_decode($geojson)->features;
  $properties = $features[0]->properties;
  $fields = [];
  $values = [];
  # Push feature properties to fields and values arrays
  foreach($properties as $property => $value) {
    if ($property != 'marker-color') {
      array_push($fields, $property);
      array_push($values, $value);
    }
  }
  # Build SQL statement based on record event type
  if ($payload['type'] === 'record.create') {
    $sql = 'INSERT INTO ' . $table . ' (' . implode(', ', $fields) . ') VALUES (' . ':' . implode(', :', $fields) . ')';
    $properties = (array) $properties;
    unset($properties['marker-color']);
  } elseif ($payload['type'] === 'record.update') {
    $updates = [];
    foreach($properties as $property => $value) {
      if ($property != 'fulcrum_id' && $property != 'marker-color') {
        array_push($updates, $property . " =:" . $property);
      }
    }
    $sql = 'UPDATE ' . $table . ' SET ' . join(', ', $updates) . ' WHERE fulcrum_id = :fulcrum_id';
    $properties = (array) $properties;
    unset($properties['marker-color']);
  } elseif ($payload['type'] === 'record.delete') {
    $sql = 'DELETE FROM ' . $table . ' WHERE fulcrum_id = :fulcrum_id';
    $properties = ['fulcrum_id'=>$payload['data']['id']];
  }
  try {
    array_walk($properties, function (&$item) {
    	$item = strval($item);
    }); # Replace nulls with empty strings
    $stmt = $db->prepare($sql);
    $stmt->execute($properties);
    $db = null;
    echo '{"success":{"text":"Success!"}}';
  } catch(PDOException $e) {
    echo '{"error":{"text":' . $e->getMessage() . '}}';
  }
}
?>