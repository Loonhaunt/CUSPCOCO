// 20180104144321
// https://api.fulcrumapp.com/api/v2/forms/609af0bb-58cf-4ceb-9f61-6d27ad0dc2ac.json?token=c822d285323318f4bc9aa8ec35c6cc6845158adf661e43ca5c8cb6e031a551a02df8d3cbef515f40

{
  "form": {
    "name": "GrantsTracking",
    "description": "Data Entry and Monitoring of Grants, ",
    "version": 8,
    "bounding_box": [
      0,
      0,
      0,
      0
    ],
    "record_title_key": "4a8c",
    "title_field_keys": [
      "4a8c"
    ],
    "status_field": {
      "type": "StatusField",
      "label": "Status",
      "key": "@status",
      "data_name": "status",
      "default_value": "",
      "enabled": false,
      "read_only": false,
      "hidden": false,
      "description": "",
      "choices": [
        
      ],
      "required": false,
      "disabled": false,
      "default_previous_value": false
    },
    "auto_assign": false,
    "hidden_on_dashboard": false,
    "record_count": 4,
    "geometry_types": [
      "Point"
    ],
    "geometry_required": false,
    "script": null,
    "projects_enabled": false,
    "assignment_enabled": false,
    "id": "609af0bb-58cf-4ceb-9f61-6d27ad0dc2ac",
    "created_at": "2018-01-03T19:21:01Z",
    "updated_at": "2018-01-04T20:58:56Z",
    "image": null,
    "image_thumbnail": null,
    "image_small": null,
    "image_large": null,
    "elements": [
      {
        "type": "TextField",
        "key": "c998",
        "label": "Column No.",
        "description": "Not sure what this is about??",
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "column_no",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": true,
        "format": "decimal",
        "min": null,
        "max": null,
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "ChoiceField",
        "key": "9b91",
        "label": "Client",
        "description": null,
        "required": true,
        "disabled": false,
        "hidden": false,
        "data_name": "client",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "multiple": false,
        "allow_other": true,
        "choices": [
          {
            "label": "CUSP",
            "value": "CUSP"
          },
          {
            "label": "CoCo",
            "value": "CoCo"
          },
          {
            "label": "ARWC",
            "value": "ARWC"
          },
          {
            "label": "FAC",
            "value": "FAC"
          },
          {
            "label": "CoCoMaster",
            "value": "CoCoMaster"
          },
          {
            "label": "GreenWay",
            "value": "GreenWay"
          }
        ],
        "default_previous_value": false
      },
      {
        "type": "TextField",
        "key": "72a7",
        "label": "Funder",
        "description": "Direct Entry for Funding Entity",
        "required": true,
        "disabled": false,
        "hidden": false,
        "data_name": "funder",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": false,
        "pattern": null,
        "pattern_description": null,
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "ChoiceField",
        "key": "67c0",
        "label": "Status",
        "description": "Awarded or Not",
        "required": true,
        "disabled": false,
        "hidden": false,
        "data_name": "status",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "multiple": false,
        "allow_other": true,
        "choices": [
          {
            "label": "Awarded",
            "value": "Awarded"
          },
          {
            "label": "Pending",
            "value": "Pending"
          }
        ],
        "default_previous_value": false
      },
      {
        "type": "TextField",
        "key": "4a8c",
        "label": "Grant Name",
        "description": "This is a Title field for the Grant and Sorting",
        "required": true,
        "disabled": false,
        "hidden": false,
        "data_name": "grant_name",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": false,
        "pattern": null,
        "pattern_description": null,
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "TextField",
        "key": "1637",
        "label": "Amt Requested",
        "description": "Dollar Amount Requested",
        "required": true,
        "disabled": false,
        "hidden": false,
        "data_name": "amt_requested",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": true,
        "format": "decimal",
        "min": null,
        "max": null,
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "YesNoField",
        "key": "cb85",
        "label": "Still Funded Y/N",
        "description": "Funding available or not",
        "required": true,
        "disabled": false,
        "hidden": false,
        "data_name": "still_funded_yn",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "positive": {
          "label": "Yes",
          "value": "yes"
        },
        "negative": {
          "label": "No",
          "value": "no"
        },
        "neutral": {
          "label": "N/A",
          "value": "n/a"
        },
        "neutral_enabled": true,
        "default_previous_value": false
      },
      {
        "type": "TextField",
        "key": "798a",
        "label": "Minimum Match",
        "description": "Describes amount of minimum funds match to each Grant",
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "minimum_match",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": true,
        "format": "decimal",
        "min": 0.0,
        "max": null,
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "TextField",
        "key": "a99b",
        "label": "Award",
        "description": "Amount of $ Awarded This Grant",
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "award",
        "default_value": "0",
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": true,
        "format": "decimal",
        "min": 0.0,
        "max": null,
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "TextField",
        "key": "dc85",
        "label": "Amount In Current Grants",
        "description": "Pull From QuickBooks This may be a pull from another table",
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "amount_in_current_grants",
        "default_value": "0",
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": true,
        "format": "decimal",
        "min": null,
        "max": null,
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "TextField",
        "key": "d950",
        "label": "Grant Or Agreement No",
        "description": "Grant Record Number ",
        "required": true,
        "disabled": false,
        "hidden": false,
        "data_name": "grant_or_agreement_no",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": false,
        "pattern": null,
        "pattern_description": null,
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "ChoiceField",
        "key": "7ae6",
        "label": "Grant - Funder Type",
        "description": "This is multiple choice to determine  fund source",
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "grant_funder_type",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "multiple": true,
        "allow_other": true,
        "choices": [
          {
            "label": "Federal",
            "value": "Federal"
          },
          {
            "label": "Grant",
            "value": "Grant"
          },
          {
            "label": "Agreement",
            "value": "Agreement"
          },
          {
            "label": "Donation",
            "value": "Donation"
          }
        ],
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "TextField",
        "key": "9700",
        "label": "Year Appvoved",
        "description": null,
        "required": true,
        "disabled": false,
        "hidden": false,
        "data_name": "year_appvoved",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": false,
        "pattern": "(19|20)[\\d]{2,2}",
        "pattern_description": "Year 1900-2099",
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "DateTimeField",
        "key": "dafc",
        "label": "Date Approved",
        "description": "This is date calendar entry for Date Grant was approved",
        "required": true,
        "disabled": false,
        "hidden": false,
        "data_name": "date_approved",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "default_previous_value": false
      },
      {
        "type": "DateTimeField",
        "key": "c59e",
        "label": "Date Completed",
        "description": "Work Completed",
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "date_completed",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "default_previous_value": false
      },
      {
        "type": "TextField",
        "key": "2472",
        "label": "Interim Reports Due",
        "description": "Descriptive text box for Interim Reports",
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "interim_reports_due",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": false,
        "pattern": null,
        "pattern_description": null,
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      },
      {
        "type": "DateTimeField",
        "key": "092d",
        "label": "Final Report Due",
        "description": null,
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "final_report_due",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "default_previous_value": false
      },
      {
        "type": "HyperlinkField",
        "key": "343a",
        "label": "Link to Contract Docs",
        "description": null,
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "link_to_contract_docs",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": [
          
        ],
        "default_url": ""
      },
      {
        "type": "TextField",
        "key": "c5a0",
        "label": "Contact Phone",
        "description": null,
        "required": false,
        "disabled": false,
        "hidden": false,
        "data_name": "contact_phone",
        "default_value": null,
        "visible_conditions_type": null,
        "visible_conditions": null,
        "required_conditions_type": null,
        "required_conditions": null,
        "numeric": false,
        "pattern": "\\d{3}[\\-]\\d{3}[\\-]\\d{4}",
        "pattern_description": "US Phone Number",
        "min_length": null,
        "max_length": null,
        "default_previous_value": false
      }
    ]
  }
}