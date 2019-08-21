import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyDataService {

  question = {
    "version": "1.2",
    "tasks": [
      {
        "type": "header",
        "description": "General",
        "tasks": [
          {
            "type": "date",
            "description": "DOB",
            "cast": "date"
          },
          {
            "type": "picklist",
            "description": "Sex",
            "values": [
              {
                "name": "Male",
                "showtasks": false,
                "exclusive": true
              },
              {
                "name": "Female",
                "showtasks": true,
                "exclusive": true,
                "setVarTrue": "pregnant"
              },
              {
                "name": "Male to Female",
                "showtasks": false,
                "exclusive": true
              },
              {
                "name": "Female to Male",
                "showtasks": true,
                "exclusive": true,
                "setVarTrue": "pregnant"
              }
            ],
            "multiple": false
          },
          {
            "type": "picklist",
            "description": "Do you drink alcohol?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false,
                "setVarTrue": "refalc"
              }
            ],
            "multiple": false
  
          },
          {
            "type": "picklist",
            "description": "Do you have / had an alcohol problem?",
            "values": [
              {
                "name": "Yes",
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false,
                "setVarTrue": "refalc"
              }
            ],
  
            "multiple": false
          },
          {
            "type": "picklist",
            "description": "Do other people think you have / had an alcohol problem?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "textarea",
                "description": "Comments"
              }
            ],
            "ifVarTrue": "refalc"
          },
          {
            "type": "picklist",
            "description": "Have you ever used illicit or street drugs?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false,
                "setVarTrue": "refdrug"
              }
            ],
            "multiple": false
          },
          {
            "type": "picklist",
            "description": "Do you have / had an drug problem?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false,
                "setVarTrue": "refdrug"
              }
            ],
            "multiple": false
          },
          {
            "type": "picklist",
            "description": "Do other people think you have / had a drug problem?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "ifVarTrue": "refdrug"
          },
          {
            "type": "picklist",
            "description": "Do you have / had Cirrhosis?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "dateish",
                "description": "When started?",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              },
              {
                "type": "dateish",
                "description": "When finished?",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              },
              {
                "type": "textarea",
                "description": "Comments"
              }
            ]
          },
          {
            "type": "picklist",
            "description": "Do you have / had Other Liver problem?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "dateish",
                "description": "When started?",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              },
              {
                "type": "dateish",
                "description": "When finished?",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              },
              {
                "type": "textarea",
                "description": "Comments"
              }
            ]
          },
          {
            "type": "picklist",
            "description": "Do you have / had Diabetes?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "dateish",
                "description": "When started?",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              },
              {
                "type": "dateish",
                "description": "When finished?",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              },
              {
                "type": "textarea",
                "description": "Comments"
              }
            ]
          },
          {
            "type": "picklist",
            "description": "Do you have / had Anaemia?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "dateish",
                "description": "When started?",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              },
              {
                "type": "dateish",
                "description": "When finished?",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              },
              {
                "type": "textarea",
                "description": "Comments"
              }
            ]
          },
          {
            "type": "picklist",
            "description": "Do you have / had Thick blood?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "dateish",
                "description": "When started?",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              },
              {
                "type": "dateish",
                "description": "When finished?",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              },
              {
                "type": "textarea",
                "description": "Comments"
              }
            ]
          }
        ]
      },
      {
        "type": "header",
        "description": "Pregnancy",
        "tasks": [
          {
            "type": "picklist",
            "description": "Are you currently pregnant?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false,
                "setVarTrue": "previouslypregnant"
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "dateish",
                "description": "Due Date",
                "settings": {
                  "days": {
                    "extra": [
                      "Early",
                      "Mid",
                      "Late"
                    ]
                  },
                  "maxdate": {
                    "day": "now",
                    "month": "now",
                    "year": "now"
                  }
                }
              }
            ]
          },
          {
            "type": "picklist",
            "description": "Have you been pregnant in the last 12 months?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "picklist",
                "description": "Pregnancy outcome",
                "values": [
                  {
                    "name": "Normal Delivery",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "pregnancyoutcome"
                  },
                  {
                    "name": "C section",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "pregnancyoutcome"
                  },
                  {
                    "name": "Miscarriage",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Termination",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Ectopic",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false
              }
            ],
            "ifVarTrue": "previouslypregnant"
          },
          {
            "type": "integer",
            "description": "Term in weeks?",
            "ifVarTrue": "pregnancyoutcome"
          },
          {
            "type": "picklist",
            "description": "Did you breast feed?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "integer",
                "description": "For how many weeks?"
              }
            ],
            "ifVarTrue": "pregnancyoutcome"
          }
        ],
        "ifVarTrue": "pregnant"
      },
      {
        "type": "header",
        "description": "Origin",
        "tasks": [
          {
            "type": "picklist",
            "description": "What is your ethnic origin?",
            "values": [
              {
                "name": "Northern white European",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Southern white European",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Middle Eastern",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "African",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Indian",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Chinese",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Other",
                "showtasks": true,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "textarea",
                "description": "Other"
              }
            ]
          }
        ]
      },
      {
        "type": "header",
        "description": "Scalp Hair",
        "tasks": [
          {
            "type": "picklist",
            "description": "What is the natural adult colour of your scalp hair?",
            "values": [
              {
                "name": "Black",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Dark Brown",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Brown",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Light Brown",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Ginger",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Yellow",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Fully Blonde",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Albino",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Grey",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false
          }
        ]
      },
      {
        "type": "header",
        "description": "Street Drugs Used",
        "tasks": [
          {
            "type": "checklist",
            "description": "In the last 12 months have you taken Crack and/or Cocaine?",
            "values": [
              {
                "name": "Crack",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "crack"
              },
              {
                "name": "Cocaine",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "cocaine"
              },
              {
                "name": "None",
                "showtasks": false,
                "exclusive": true
              }
            ],
            "multiple": true
          },
          {
            "type": "checklist",
            "description": "Cannabis?",
            "values": [
              {
                "name": "Grass",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "grass"
              },
              {
                "name": "Skunk",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "skunk"
              },
              {
                "name": "Resin",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "resin"
              },
              {
                "name": "Other",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "cannabisother"
              },
              {
                "name": "None",
                "showtasks": false,
                "exclusive": true
              }
            ],
            "multiple": true
          },
          {
            "type": "checklist",
            "description": "And/or any of the following Methamphetamine, Ketamine, Steroids, MDMA, Legal-Illegal highs, Heroin, Amphetamine?",
            "values": [
              {
                "name": "Methamphetamine",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "methamphetamine"
              },
              {
                "name": "Ketamine",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "Ketamine"
              },
              {
                "name": "Steroids",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "Steroids"
              },
              {
                "name": "MDMA",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "MDMA"
              },
              {
                "name": "Legal-Illegal highs",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "LegalIllegal"
              },
              {
                "name": "Heroin",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "Heroin"
              },
              {
                "name": "Amphetamine",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "Amphetamine"
              },
              {
                "name": "Other",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "other"
              },
              {
                "name": "None",
                "showtasks": false,
                "exclusive": true
              }
            ],
            "multiple": true
          }
        ]
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used",
        "tasks": [
          {
            "type": "picklist",
            "description": "Have you taken any prescribed or pharmacy obtained medications during the 12 months prior to sample collection?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "picklist",
                "description": "Methadone or Buprenorphine?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "checklist",
                    "description": "Please select",
                    "values": [
                      {
                        "name": "Methadone",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Methadone"
                      },
                      {
                        "name": "Buprenorphine",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Buprenorphine"
                      }
                    ],
                    "multiple": true
                  }
                ]
              },
              {
                "type": "picklist",
                "description": "Dihydrocodeine or Tramadol?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "checklist",
                    "description": "Please select",
                    "values": [
                      {
                        "name": "Dihydrocodeine",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Dihydrocodeine"
                      },
                      {
                        "name": "Tramadol",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Tramadol"
                      }
                    ],
                    "multiple": true
                  }
                ]
              },
              {
                "type": "picklist",
                "description": "Drug or Alcohol Treatment?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "checklist",
                    "description": "Please select",
                    "values": [
                      {
                        "name": "Acamprosate",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Acamprosate"
                      },
                      {
                        "name": "Librium",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Librium"
                      }
                    ],
                    "multiple": true
                  }
                ]
              },
              {
                "type": "picklist",
                "description": "Co-codamal or Codeine?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "checklist",
                    "description": "Please select",
                    "values": [
                      {
                        "name": "Codeine",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Codeine"
                      },
                      {
                        "name": "Co-codamol",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Co-codamol"
                      },
                      {
                        "name": "Zapain",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "zapain"
                      }
                    ],
                    "multiple": true
                  }
                ]
              },
              {
                "type": "picklist",
                "description": "Benzodiazepines?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "checklist",
                    "description": "Please select",
                    "values": [
                      {
                        "name": "Diazepam",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Diazepam"
                      },
                      {
                        "name": "Temazepam",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Temazepam"
                      },
                      {
                        "name": "Nitrazepam",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Nitrazepam"
                      },
                      {
                        "name": "Flunitrazepam",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Flunitrazepam"
                      },
                      {
                        "name": "Nordiazepam",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Nordiazepam"
                      },
                      {
                        "name": "Alprazolam",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Alprazolam"
                      },
                      {
                        "name": "Loprazolam",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Loprazolam"
                      }
                    ],
                    "multiple": true
                  }
                ]
              },
              {
                "type": "picklist",
                "description": "Tranquiliser or Sleeping tablets?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "checklist",
                    "description": "Please select",
                    "values": [
                      {
                        "name": "Zopiclone",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Zopiclone"
                      },
                      {
                        "name": "Diazepam (Valium)",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Diazepamvalium"
                      },
                      {
                        "name": "Chlordiazepoxide",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Chlordiazepoxide"
                      },
                      {
                        "name": "Zolpidem",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Zolpidem"
                      }
                    ],
                    "multiple": true
                  }
                ]
              },
              {
                "type": "picklist",
                "description": "Anti-depressants?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "checklist",
                    "description": "Please select",
                    "values": [
                      {
                        "name": "Sertraline",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Sertraline"
                      },
                      {
                        "name": "Citalopram",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Citalopram"
                      },
                      {
                        "name": "Amitriptyline",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Amitriptyline"
                      },
                      {
                        "name": "Fluoxetine",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Fluoxetine"
                      },
                      {
                        "name": "Trazodone",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Trazodone"
                      }
                    ],
                    "multiple": true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "header",
        "description": "Street Drug Exposure",
        "tasks": [
          {
            "type": "picklist",
            "description": "Have you been exposed to any street drugs during the 12 months prior to sample collection?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "picklist",
                "description": "Crack and/or Cocaine?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "checklist",
                    "description": "Please select",
                    "values": [
                      {
                        "name": "Crack",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "crackex"
                      },
                      {
                        "name": "Cocaine",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "cocaineex"
                      }
                    ],
                    "multiple": true
                  }
                ]
              },
              {
                "type": "picklist",
                "description": "Cannabis?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "checklist",
                    "description": "Please select",
                    "values": [
                      {
                        "name": "Grass",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "grassex"
                      },
                      {
                        "name": "Skunk",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "skunkex"
                      },
                      {
                        "name": "Resin",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "resinex"
                      },
                      {
                        "name": "Other",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "cannabisotherex"
                      }
                    ],
                    "multiple": true
                  }
                ]
              },
              {
                "type": "picklist",
                "description": "Methamphetamine, Ketamine, Steroids, MDMA, Legal-Illegal highs, Heroin, Amphetamine, Other?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "checklist",
                    "description": "Please select",
                    "values": [
                      {
                        "name": "Methamphetamine",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "methamphetamineex"
                      },
                      {
                        "name": "Ketamine",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Ketamineex"
                      },
                      {
                        "name": "Steroids",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Steroidsex"
                      },
                      {
                        "name": "MDMA",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "MDMAex"
                      },
                      {
                        "name": "Legal-Illegal highs",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "LegalIllegalex"
                      },
                      {
                        "name": "Heroin",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Heroinex"
                      },
                      {
                        "name": "Amphetamine",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "Amphetamineex"
                      },
                      {
                        "name": "Other",
                        "showtasks": true,
                        "exclusive": false,
                        "setVarTrue": "otherex"
                      }
                    ],
                    "multiple": true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "header",
        "description": "Alcohol Used",
        "tasks": [
          {
            "type": "picklist",
            "description": "In the past 12 months have you had an alcoholic drink?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "checklist",
                "description": "Declared Alcohol",
                "values": [
                  {
                    "name": "Beer",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "beer"
                  },
                  {
                    "name": "Wine",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "wine"
                  },
                  {
                    "name": "Cider",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "cider"
                  },
                  {
                    "name": "Alcopops",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "alcopops"
                  },
                  {
                    "name": "Fortified Wine",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "fortifiedwine"
                  },
                  {
                    "name": "Whiskey",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "whiskey"
                  },
                  {
                    "name": "Gin",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "gin"
                  },
                  {
                    "name": "Vodka",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "vodka"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otheralc"
                  }
                ],
                "multiple": true
              }
            ]
          }
        ]
      },
      {
        "type": "header",
        "description": "Hair Care",
        "tasks": [
          {
            "type": "picklist",
            "description": "Do you wash your hair?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "hairwash"
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false
          },
          {
            "type": "picklist",
            "description": "In the last 12 months have you used Hair products? e.g Hair Dye or Colour",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false,
            "tasks": [
              {
                "type": "checklist",
                "description": "Declared hair products",
                "values": [
                  {
                    "name": "Hair Dye or Colour",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "hairdye"
                  },
                  {
                    "name": "Hair Spray",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "hairspray"
                  },
                  {
                    "name": "Bleaching",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "bleaching"
                  },
                  {
                    "name": "Straightening",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "straightening"
                  },
                  {
                    "name": "Hair Gel",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "hairgel"
                  },
                  {
                    "name": "Hair Wax",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "hairwax"
                  },
                  {
                    "name": "Hair Conditioner",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "hairconditioner"
                  },
                  {
                    "name": "Scalp Medications",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "scalpmedications"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherhc"
                  }
                ],
                "multiple": true
              }
            ]
          },
          {
            "type": "picklist",
            "description": "In the last 12 months have you been swimming?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "swimming"
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false
          }
        ]
      },
      {
        "type": "header",
        "description": "Hair Cutting, Shaving & Grooming",
        "tasks": [
          {
            "type": "picklist",
            "description": "In the last 12 months have you cut your scalp hair?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "scalphaircut"
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false
          },
          {
            "type": "picklist",
            "description": "How often do you comb/brush your scalp hair?",
            "values": [
              {
                "name": "Daily",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Weekly",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Monthly",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "None",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false
          },
          {
            "type": "picklist",
            "description": "In the last 12 months have you shaved scalp to skin?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "scalpskin"
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false
          }
        ]
      },
      {
        "type": "header",
        "description": "Personal Hygiene",
        "tasks": [
          {
            "type": "picklist",
            "description": "Do you use Alcohol containing mouthwash?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "mouthwash"
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false
          },
          {
            "type": "picklist",
            "description": "Do you use Alcohol containing hand antiseptics?",
            "values": [
              {
                "name": "Yes",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "handantiseptics"
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false
          },
          {
            "type": "checklist",
            "description": "Do you use Deodorant, Antiperspirant, Aftershave or Perfume?",
            "values": [
              {
                "name": "Deodorants",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "deodorants"
              },
              {
                "name": "Antiperspirant",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "antiperspirant"
              },
              {
                "name": "Aftershave",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "aftershave"
              },
              {
                "name": "Perfume",
                "showtasks": true,
                "exclusive": false,
                "setVarTrue": "perfume"
              },
              {
                "name": "None",
                "showtasks": false,
                "exclusive": true
              }
            ],
            "multiple": true
          }
        ]
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Crack",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Crack use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkcrack"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedcrack"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakencrack"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "text",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkcrack"
                  },
                  {
                    "type": "text",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedcrack"
                  },
                  {
                    "type": "text",
                    "description": "How was it taken?",
                    "ifVarTrue": "othertakencrack"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "crack"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Cocaine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Cocaine use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkcocaine"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedcocaine"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakencocaine"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkcocaine"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedcocaine"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakencocaine"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
  
        ],
        "ifVarTrue": "cocaine"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Grass",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Grass use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkgrass"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedgrass"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakengrass"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkgrass"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedgrass"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakengrass"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
  
        ],
        "ifVarTrue": "grass"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Skunk",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Skunk use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkskunk"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedskunk"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakenskunk"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkskunk"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedskunk"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakenskunk"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
  
        ],
        "ifVarTrue": "skunk"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Resin",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Resin use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkresin"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedresin"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakenresin"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkresin"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedresin"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakenresin"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
  
        ],
        "ifVarTrue": "resin"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Cannabis / Other",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Cannabis Other use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkcannabis"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedcannabis"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakencannabis"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkcannabis"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedcannabis"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakencannabis"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
  
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
  
        ],
        "ifVarTrue": "cannabisother"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Methamphetamine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Methamphetamine use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkmethamphetamine"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedethamphetamine"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakenmethamphetamine"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkmethamphetamine"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedmethamphetamine"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakenmethamphetamine"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "methamphetamine"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Ketamine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Ketamine use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkketamine"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedketamine"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakenketamine"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkketamine"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedketamine"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakenketamine"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Ketamine"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Steroids",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Steroid use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunksteroids"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedsteroids"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakensteroids"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunksteroids"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedsteroids"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakensteroids"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Steroids"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - MDMA",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because MDMA use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkMDMA"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedMDMA"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakenMDMA"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkMDMA"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedMDMA"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakenMDMA"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "MDMA"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Legal-Illegal highs",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Legal-Illegal highs use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkLegalIllegal"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedLegalIllegal"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakenLegalIllegal"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkLegalIllegal"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedLegalIllegal"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakenLegalIllegal"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "LegalIllegal"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Heroin",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Heroin use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkHeroin"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedHeroin"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakenHeroin"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkHeroin"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedHeroin"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakenHeroin"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Heroin"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Amphetamine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Amphetamine use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkAmphetamine"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedAmphetamine"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakenAmphetamine"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkAmphetamine"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedAmphetamine"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakenAmphetamine"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Amphetamine"
      },
      {
        "type": "header",
        "description": "Street Drugs Used - Other",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Street Drugs Used Other was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkother"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedother"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othertakenother"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkother"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedother"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othertakenother"
                  }
                ]
              },
              {
                "type": "checklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Joints or Spliffs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Pills or Tablets",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Bombs",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Paste",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Rocks",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": true
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "other"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Methadone",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Methadone use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourcemethadone"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourcemethadone"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Methadone"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Buprenorphine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Buprenorphine use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceBuprenorphine"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceBuprenorphine"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Buprenorphine"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Dihydrocodeine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Dihydrocodeine use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceDihydrocodeine"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceDihydrocodeine"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Dihydrocodeine"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Tramadol",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Tramadol use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceTramadol"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceTramadol"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Tramadol"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Acamprosate",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Acamprosate use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceAcamprosate"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceAcamprosate"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Acamprosate"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Librium",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Librium use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceLibrium"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceLibrium"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Librium"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Codeine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Codeine use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceCodeine"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceCodeine"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Codeine"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Co-codamol",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Co-codamol use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceCocodamol"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceCocodamol"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Co-codamol"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Zapain",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Zapain use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourcezapain"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourcezapain"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "zapain"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Diazepam",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Diazepam use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceDiazepam"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceDiazepam"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Diazepam"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Temazepam",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Temazepam was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceTemazepam"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceTemazepam"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
  
            ]
          }
        ],
        "ifVarTrue": "Temazepam"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Nitrazepam",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Nitrazepam use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceNitrazepam"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceNitrazepam"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Nitrazepam"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Flunitrazepam",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Flunitrazepam use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceFlunitrazepam"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceFlunitrazepam"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Flunitrazepam"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Nordiazepam",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Nordiazepam use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceNordiazepam"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceNordiazepam"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Nordiazepam"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Alprazolam",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Alprazolam use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceAlprazolam"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceAlprazolam"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
  
            ]
          }
        ],
        "ifVarTrue": "Alprazolam"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Loprazolam",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Loprazolam use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceLoprazolam"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceLoprazolam"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Loprazolam"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Zopiclone",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Zopiclone use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceZopiclone"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceZopiclone"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Zopiclone"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Diazepam (Valium)",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Diazepam use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceDiazepam"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceDiazepam"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Diazepamvalium"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Chlordiazepoxide",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Chlordiazepoxide use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceChlordiazepoxide"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceChlordiazepoxide"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Chlordiazepoxide"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Zolpidem",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Zolpidem use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceZolpidem"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceZolpidem"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Zolpidem"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Sertraline",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Sertaline use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceSertraline"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceSertraline"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Sertraline"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Citalopram",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Citalopram use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceCitalopram"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceCitalopram"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Citalopram"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Amitriptyline",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Amitriptyline use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceAmitriptyline"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceAmitriptyline"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Amitriptyline"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Fluoxetine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Fluoxetine use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceFluoxetine"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceFluoxetine"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "currency",
                    "description": "Value per day"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Fluoxetine"
      },
      {
        "type": "header",
        "description": "Pharmacy Grade Medication Used - Trazodone",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Trazodone use was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "Source?",
                "values": [
                  {
                    "name": "Prescribed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Over the counter",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othersourceTrazodone"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othersourceTrazodone"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Trazodone"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Crack",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Crack was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkexcrack"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedexcrack"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherexcrack"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkexcrack"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedexcrack"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "otherexcrack"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "crackex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Cocaine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Cocaine was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkcocaineex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedcocaineex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othercocaineex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkcocaineex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedcocaineex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othercocaineex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "cocaineex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Grass",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Grass was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkgrassex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedgrassex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othergrassex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkgrassex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedgrassex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othergrassex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "grassex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Skunk",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Skunk was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkskunkex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedskunkex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherskunkex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkskunkex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedskunkex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "otherskunkex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "skunkex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Resin",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Resin was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkresinex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedresinex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherresinex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkresinex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedresinex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "otherresinex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "resinex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Cannabis / Other",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Cannabis / Other was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkcannabisotherex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedcannabisotherex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othercannabisotherex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkcannabisotherex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedcannabisotherex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othercannabisotherex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "cannabisotherex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Methamphetamine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Methamphetamine was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkmethamphetamineex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedmethamphetamineex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "othermethamphetamineex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkmethamphetamineex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedmethamphetamineex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "othermethamphetamineex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "methamphetamineex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Ketamine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Ketamine was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkKetamineex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedKetamineex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherKetamineex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkKetamineex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedKetamineex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "otherKetamineex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Ketamineex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Steroids",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure Steroids to was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkSteroidsex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedSteroidsex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherSteroidsex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkSteroidsex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedSteroidsex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "otherSteroidsex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Steroidsex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - MDMA",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to MDMA was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkMDMAex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedMDMAex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherMDMAex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkMDMAex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedMDMAex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "otherMDMAex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "MDMAex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Legal-Illegal highs",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Legal-Illegal highs was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkLegalIllegalex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedLegalIllegalex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherLegalIllegalex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkLegalIllegalex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedLegalIllegalex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "otherLegalIllegalex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "LegalIllegalex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Heroin",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Heroin was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkHeroinex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedHeroinex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherHeroinex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkHeroinex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedHeroinex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "otherHeroinex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Heroinex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Amphetamine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Amphetamine was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkAmphetamineex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedAmphetamineex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherAmphetamineex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkAmphetamineex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedAmphetamineex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "otherAmphetamineex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "Amphetamineex"
      },
      {
        "type": "header",
        "description": "Street Drugs Exposure - Other",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because exposure to Other Street Drugs was selected",
            "tasks": [
              {
                "type": "checklist",
                "description": "How was it taken?",
                "values": [
                  {
                    "name": "Smoked",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Snorted",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallowed",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Injected",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Powder",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Liquid",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Drunk or Eaten",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "drunkotherex"
                  },
                  {
                    "name": "Inserted",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "insertedotherex"
                  },
                  {
                    "name": "Other",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "otherotherex"
                  }
                ],
                "multiple": true,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "How was it drunk or eaten?",
                    "ifVarTrue": "drunkotherex"
                  },
                  {
                    "type": "textarea",
                    "description": "How was it inserted?",
                    "ifVarTrue": "insertedotherex"
                  },
                  {
                    "type": "textarea",
                    "description": "Other",
                    "ifVarTrue": "otherotherex"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "otherex"
      },
      {
        "type": "header",
        "description": "Alcohol Use - Beer",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Beer was selected",
            "tasks": [
              {
                "type": "ftstimeperiods",
                "description": "Date last drunk",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days drunk out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Type"
                  },
                  {
                    "type": "textarea",
                    "description": "Amount"
                  }
  
                ]
              }
            ]
          }
          
        ],
        "ifVarTrue": "beer"
      },
      {
        "type": "header",
        "description": "Alcohol Use - Wine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Wine was selected",
            "tasks": [
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days drunk out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Type"
                  },
                  {
                    "type": "textarea",
                    "description": "Amount"
                  }
  
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "wine"
      },
      {
        "type": "header",
        "description": "Alcohol Use - Cider",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Cider was selected",
            "tasks": [
              {
                "type": "ftstimeperiods",
                "description": "Date last drunk",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days drunk out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Type"
                  },
                  {
                    "type": "textarea",
                    "description": "Amount"
                  }
  
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "cider"
      },
      {
        "type": "header",
        "description": "Alcohol Use - Alcopops",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Alcopops was selected",
            "tasks": [
              {
                "type": "ftstimeperiods",
                "description": "Date last drunk",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days drunk out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Type"
                  },
                  {
                    "type": "textarea",
                    "description": "Amount"
                  }
  
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "alcopops"
      },
      {
        "type": "header",
        "description": "Alcohol Use - Fortified Wine",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Fortified Wine was selected",
            "tasks": [
              {
                "type": "ftstimeperiods",
                "description": "Date last drunk",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days drunk out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Type"
                  },
                  {
                    "type": "textarea",
                    "description": "Amount"
                  }
  
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "fortifiedwine"
      },
      {
        "type": "header",
        "description": "Alcohol Use - Whiskey",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Whiskey was selected",
            "tasks": [
              {
                "type": "ftstimeperiods",
                "description": "Date last drunk",
                "tasksPerPeriod": [
                  {
                    "type": "textarea",
                    "description": "Days drunk out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Type"
                  },
                  {
                    "type": "textarea",
                    "description": "Amount"
                  }
  
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "whiskey"
      },
      {
        "type": "header",
        "description": "Alcohol Use - Gin",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Gin was selected",
            "tasks": [
              {
                "type": "ftstimeperiods",
                "description": "Date last drunk",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days drunk out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Type"
                  },
                  {
                    "type": "textarea",
                    "description": "Amount"
                  }
  
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "gin"
      },
      {
        "type": "header",
        "description": "Alcohol Use - Vodka",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Vodka was selected"
          },
          {
            "type": "ftstimeperiods",
            "description": "Date last drunk",
            "tasksPerPeriod": [
              {
                "type": "integer",
                "description": "Days drunk out of above time scale"
              },
              {
                "type": "textarea",
                "description": "Type"
              },
              {
                "type": "textarea",
                "description": "Amount"
              }
  
            ]
          }
        ],
        "ifVarTrue": "vodka"
      },
      {
        "type": "header",
        "description": "Alcohol Use - Other",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Other Alcohol was selected",
            "tasks": [
              {
                "type": "ftstimeperiods",
                "description": "Date last drunk",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days drunk out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Type"
                  },
                  {
                    "type": "textarea",
                    "description": "Amount"
                  }
  
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "otheralc"
      },
      {
        "type": "header",
        "description": "Hair Care Use - Hair Wash",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because the customer indicated they wash their hair",
            "tasks": [
              {
                "type": "picklist",
                "description": "Water only?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Comment"
                  },
                  {
                    "type": "ftstimeperiods",
                    "description": "Date last washed",
                    "tasksPerPeriod": [
                      {
                        "type": "textarea",
                        "description": "Days washed out of above timescale"
                      }
  
  
                    ]
                  }
  
                ]
              },
              {
                "type": "picklist",
                "description": "Shampoo?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Comment"
                  },
                  {
                    "type": "ftstimeperiods",
                    "description": "Date last washed",
                    "tasksPerPeriod": [
                      {
                        "type": "textarea",
                        "description": "Days washed out of above timescale"
                      }
  
  
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "hairwash"
      },
      {
        "type": "header",
        "description": "Hair Care Use - Hair Dye or Colour",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Hair Dye or Colour has been used",
            "tasks": [
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
  
                  {
                    "type": "picklist",
                    "description": "Type",
                    "values": [
                      {
                        "name": "Permanent",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Temporary",
                        "showtasks": false,
                        "exclusive": false
                      }
                    ],
                    "multiple": false
                  },
                  {
                    "type": "textarea",
                    "description": "Details"
                  },
                  {
                    "type": "textarea",
                    "description": "Brand and/or Colour"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "hairdye"
      },
      {
        "type": "header",
        "description": "Hair Care Use - Hair Spray",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Hair Spray has been used",
            "tasks": [
              {
                "type": "textarea",
                "description": "Comments"
              },
              {
                "type": "picklist",
                "description": "Type",
                "values": [
                  {
                    "name": "Pump",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Aerosol",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false
              },
              {
                "type": "checklist",
                "description": "Site where applied",
                "values": [
                  {
                    "name": "Full head",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Partial - near sample site",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "hairspraynear"
                  },
                  {
                    "name": "Partial - away from sample site",
                    "showtasks": true,
                    "exclusive": false,
                    "setVarTrue": "hairsprayaway"
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Please specify",
                    "ifVarTrue": "hairspraynear"
                  },
                  {
                    "type": "textarea",
                    "description": "Please specify",
                    "ifVarTrue": "hairsprayaway"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above timescale"
                  },
                  {
                    "type": "textarea",
                    "description": "Brand"
                  }
                ]
              }
            ]
          }
  
        ],
        "ifVarTrue": "hairspray"
      },
          {
        "type": "header",
        "description": "Hair Care Use - Bleaching",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Bleaching has been used",
            "tasks": [
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above timescale"
                  },
                  {
                    "type": "textarea",
                    "description": "Brand"
                  }
                ]
              }
            ]
          }
  
        ],
        "ifVarTrue": "bleaching"
      },
      {
        "type": "header",
        "description": "Hair Care Use - Straightening",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Straightening has been used",
            "tasks": [
              {
                "type": "picklist",
                "description": "Thermal hair straightening?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "picklist",
                    "description": "Used on",
                    "values": [
                      {
                        "name": "Full length",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Other",
                        "showtasks": true,
                        "exclusive": false
                      }
                    ],
                    "multiple": false,
                    "tasks": [
                      {
                        "type": "textarea",
                        "description": "Other"
                      }
                    ]
                  },
                  {
                    "type": "ftstimeperiods",
                    "description": "Date last used",
                    "tasksPerPeriod": [
                      {
                        "type": "integer",
                        "description": "Days used out of above timescale"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "picklist",
                "description": "Other type of hair straightening?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Comment"
                  },
                  {
                    "type": "picklist",
                    "description": "Used on",
                    "values": [
                      {
                        "name": "Full length",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Other",
                        "showtasks": true,
                        "exclusive": false
                      }
                    ],
                    "multiple": false,
                    "tasks": [
                      {
                        "type": "textarea",
                        "description": "Other"
                      }
                    ]
                  },
                  {
                    "type": "ftstimeperiods",
                    "description": "Date last used",
                    "tasksPerPeriod": [
                      {
                        "type": "integer",
                        "description": "Days used out of above time scale"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "straightening"
      },
      {
        "type": "header",
        "description": "Hair Care Use - Hair Gel",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Hair Gel has been used",
            "tasks": [
              {
                "type": "textarea",
                "description": "Comments"
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "hairgel"
      },
      {
        "type": "header",
        "description": "Hair Care Use - Hair Wax",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Hair Wax has been used",
            "tasks": [
              {
                "type": "textarea",
                "description": "Comments"
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "hairwax"
      },
      {
        "type": "header",
        "description": "Hair Care Use - Hair Conditioner",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Hair Conditioner has been used",
            "tasks": [
              {
                "type": "textarea",
                "description": "Comments"
              },
              {
                "type": "picklist",
                "description": "How long is conditioner left on scalp?",
                "values": [
                  {
                    "name": "1min",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "2 to 3 mins",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "5 mins",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "10 mins",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "More than 10 mins",
                    "showtasks": true,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Comments"
                  }
                ]
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Brand"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "hairconditioner"
      },
      {
        "type": "header",
        "description": "Hair Care Use - Scalp Medications",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Scalp Medications has been used",
            "tasks": [
              {
                "type": "textarea",
                "description": "Medication Name"
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Details"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "scalpmedications"
      },
      {
        "type": "header",
        "description": "Hair Care Use - Other",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Other Hair Care Products has been used",
            "tasks": [
              {
                "type": "textarea",
                "description": "Comment"
              },
              {
                "type": "ftstimeperiods",
                "description": "Date last used",
                "tasksPerPeriod": [
                  {
                    "type": "integer",
                    "description": "Days used out of above time scale"
                  },
                  {
                    "type": "textarea",
                    "description": "Details"
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "otherhc"
      },
      {
        "type": "ftstimeperiods",
        "description": "Date last swam",
        "tasksPerPeriod": [
          {
            "type": "picklist",
            "description": "Swim location",
            "values": [
              {
                "name": "Swimming Pool",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Sea",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "River",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "Other",
                "showtasks": true,
                "exclusive": false
              }
            ],
            "multiple": true,
            "tasks": [
              {
                "type": "textarea",
                "description": "Other"
              }
            ]
          },
          {
            "type": "integer",
            "description": "Days swam out of above timescale in declared location?"
          },
          {
            "type": "picklist",
            "description": "Was head submerged under water?",
            "values": [
              {
                "name": "Yes",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false
          },
          {
            "type": "picklist",
            "description": "Was a swimming cap used?",
            "values": [
              {
                "name": "Yes",
                "showtasks": false,
                "exclusive": false
              },
              {
                "name": "No",
                "showtasks": false,
                "exclusive": false
              }
            ],
            "multiple": false
          }
        ],
        "ifVarTrue": "swimming"
      },
  
      {
        "type": "header",
        "description": "Scalp Hair Cut",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Scalp Hair Cut was selected",
            "tasks": [
              {
                "type": "date",
                "description": "Date last cut?"
              },
              {
                "type": "textarea",
                "description": "Length cut to or clipper guard number"
              }
            ]
          }
        ],
        "ifVarTrue": "scalphaircut"
      },
      {
        "type": "header",
        "description": "Scalp to Skin",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Scalp to Skin was selected",
            "tasks": [
              {
                "type": "date",
                "description": "Date last shaved?"
              }
            ]
          }
        ],
        "ifVarTrue": "scalpskin"
      },
      {
        "type": "header",
        "description": "Personal Hygiene - Alcohol containing mouthwash",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Alcohol containing mouthwash was selected",
            "tasks": [
              {
                "type": "picklist",
                "description": "Method",
                "values": [
                  {
                    "name": "Spit",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Swallow",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false
              },
              {
                "type": "picklist",
                "description": "Frequency",
                "values": [
                  {
                    "name": "Daily",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Weekly",
                    "showtasks": false,
                    "exclusive": false
                  },
                  {
                    "name": "Monthly",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false
              }
            ]
          }
        ],
        "ifVarTrue": "mouthwash"
      },
      {
        "type": "header",
        "description": "Personal Hygiene - Alcohol containing hand antiseptics",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Alcohol containing hand antiseptics was selected",
            "tasks": [
              {
                "type": "picklist",
                "description": "Is hand antiseptic ever applied to sample sites?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Comments"
                  },
                  {
                    "type": "picklist",
                    "description": "Frequency",
                    "values": [
                      {
                        "name": "Daily",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Weekly",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Monthly",
                        "showtasks": false,
                        "exclusive": false
                      }
                    ],
                    "multiple": false
                  },
                  {
                    "type": "dateish",
                    "description": "Date last used?",
                    "settings": {
                      "days": {
                        "extra": [
                          "Early",
                          "Mid",
                          "Late"
                        ]
                      },
                      "maxdate": {
                        "day": "now",
                        "month": "now",
                        "year": "now"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "handantiseptics"
      },
      {
        "type": "header",
        "description": "Personal Hygiene - Deodorants",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Deodorant use was selected",
            "tasks": [
              {
                "type": "picklist",
                "description": "Is deodorant ever applied to sample sites?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Comments"
                  },
                  {
                    "type": "picklist",
                    "description": "Frequency",
                    "values": [
                      {
                        "name": "Daily",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Weekly",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Monthly",
                        "showtasks": false,
                        "exclusive": false
                      }
                    ],
                    "multiple": false
                  },
                  {
                    "type": "checklist",
                    "description": "Area",
                    "values": [
                      {
                        "name": "Scalp",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Arm",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Chest",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Back",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Legs",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Underarm",
                        "showtasks": false,
                        "exclusive": false
                      }
                    ],
                    "multiple": true
                  },
                  {
                    "type": "dateish",
                    "description": "Date last used?",
                    "settings": {
                      "days": {
                        "extra": [
                          "Early",
                          "Mid",
                          "Late"
                        ]
                      },
                      "maxdate": {
                        "day": "now",
                        "month": "now",
                        "year": "now"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "deodorants"
      },
      {
        "type": "header",
        "description": "Personal Hygiene - Antiperspirant",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Antiperspirant use was selected",
            "tasks": [
              {
                "type": "picklist",
                "description": "Is antiperspirant ever applied to sample sites?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Comments"
                  },
                  {
                    "type": "picklist",
                    "description": "Frequency",
                    "values": [
                      {
                        "name": "Daily",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Weekly",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Monthly",
                        "showtasks": false,
                        "exclusive": false
                      }
                    ],
                    "multiple": false
                  },
                  {
                    "type": "checklist",
                    "description": "Area",
                    "values": [
                      {
                        "name": "Scalp",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Arm",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Chest",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Back",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Legs",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Underarm",
                        "showtasks": false,
                        "exclusive": false
                      }
                    ],
                    "multiple": true
                  },
                  {
                    "type": "dateish",
                    "description": "Date last used?",
                    "settings": {
                      "days": {
                        "extra": [
                          "Early",
                          "Mid",
                          "Late"
                        ]
                      },
                      "maxdate": {
                        "day": "now",
                        "month": "now",
                        "year": "now"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "antiperspirant"
      },
      {
        "type": "header",
        "description": "Personal Hygiene - Aftershave",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Aftershave use was selected",
            "tasks": [
              {
                "type": "picklist",
                "description": "Is aftershave ever applied to sample sites?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Comments"
                  },
                  {
                    "type": "picklist",
                    "description": "Frequency",
                    "values": [
                      {
                        "name": "Daily",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Weekly",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Monthly",
                        "showtasks": false,
                        "exclusive": false
                      }
                    ],
                    "multiple": false
                  },
                  {
                    "type": "checklist",
                    "description": "Area",
                    "values": [
                      {
                        "name": "Scalp",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Arm",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Chest",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Back",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Legs",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Underarm",
                        "showtasks": false,
                        "exclusive": false
                      }
                    ],
                    "multiple": true
                  },
                  {
                    "type": "dateish",
                    "description": "Date last used?",
                    "settings": {
                      "days": {
                        "extra": [
                          "Early",
                          "Mid",
                          "Late"
                        ]
                      },
                      "maxdate": {
                        "day": "now",
                        "month": "now",
                        "year": "now"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "aftershave"
      },
      {
        "type": "header",
        "description": "Personal Hygiene - Perfume",
        "tasks": [
          {
            "type": "info",
            "description": "This section is visible because Perfume use was selected",
            "tasks": [
              {
                "type": "picklist",
                "description": "Is perfume ever applied to sample sites?",
                "values": [
                  {
                    "name": "Yes",
                    "showtasks": true,
                    "exclusive": false
                  },
                  {
                    "name": "No",
                    "showtasks": false,
                    "exclusive": false
                  }
                ],
                "multiple": false,
                "tasks": [
                  {
                    "type": "textarea",
                    "description": "Comments"
                  },
                  {
                    "type": "picklist",
                    "description": "Frequency",
                    "values": [
                      {
                        "name": "Daily",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Weekly",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Monthly",
                        "showtasks": false,
                        "exclusive": false
                      }
                    ],
                    "multiple": false
                  },
                  {
                    "type": "checklist",
                    "description": "Area",
                    "values": [
                      {
                        "name": "Scalp",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Arm",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Chest",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Back",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Legs",
                        "showtasks": false,
                        "exclusive": false
                      },
                      {
                        "name": "Underarm",
                        "showtasks": false,
                        "exclusive": false
                      }
                    ],
                    "multiple": true
                  },
                  {
                    "type": "dateish",
                    "description": "Date last used?",
                    "settings": {
                      "days": {
                        "extra": [
                          "Early",
                          "Mid",
                          "Late"
                        ]
                      },
                      "maxdate": {
                        "day": "now",
                        "month": "now",
                        "year": "now"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        "ifVarTrue": "perfume"
      },
      {
        "type": "header",
        "description": "Review",
        "tasks": [
          {
            "type": "review",
            "description": "Review your answers below"
          },
          {
            "type": "photo",
            "description": "Please take a photo of the client"
          },
          {
            "type": "signature",
            "description": "Signature"
          },
          {
            "type": "complete",
            "description": "Complete the Questionnaire"
          }
        ]
      }
    ]
  };

  logic = {
    "version": "1.2",
    "tasks": [
  
      {
        "type": "header",
        "description": "Testing Logic",
        "tasks": [
          {
            "type": "picklist",
            "description": "Please choose on of these",
            "multiple": "false",
            "values": [
              {
                "name": "Show Question Track 1",
                "exclusive": true,
                "setVarTrue": "showq1"
              },
  
              {
                "name": "Show Question Track 2",
                "exclusive": true,
                "setVarTrue": "showq2"
              },
  
              {
                "name": "Show Question Track 3",
                "exclusive": true,
                "setVarTrue": "showq3"
              },
  
              {
                "name": "Show Question Track 4",
                "exclusive": true,
                "setVarTrue": "showq4"
              }
            ]
          }
        ]
      },
      {
        "type": "header",
        "description": "Question Track 1",
        "ifVarTrue": "showq1",
        "tasks": [
          {
            "type": "info",
            "description": "Here is some info as part of question track 1"
          }
        ]
      },
      {
        "type": "header",
        "description": "Question Track 2",
        "ifVarTrue": "showq2",
        "tasks": [
          {
            "type": "info",
            "description": "Here is some info as part of question track 2"
          }
        ]
      },
      {
        "type": "header",
        "description": "Question Track 3",
        "ifVarTrue": "showq3",
        "tasks": [
          {
            "type": "info",
            "description": "Here is some info as part of question track 3"
          }
        ]
      },
      {
        "type": "header",
        "description": "Question Track 4",
        "ifVarTrue": "showq4",
        "tasks": [
          {
            "type": "info",
            "description": "Here is some info as part of question track 4"
          }
        ]
      },
      {
        "type": "header",
        "description": "Another review page",
        "tasks" : [
          {
            "type": "info",
            "description": "All done"
          }
        ]
      }
    ]
  }

  surveyJSON = { 
    title: "Tell us, what technologies do you use?", 
    pages: 
    [
      { 
        name:"page1", 
        questions: [
          {
              type: "radiogroup",
              name: "displayQuestion",
              title: "Please choose on of these?",
              isRequired: true,
              choices: [
                  "showq1", "showq2"
              ],
          },
          {
              type: "text",
              name: "Q1",
              title: "Here is some info as part of question track 1",
              visibleIf: "{displayQuestion}='showq1'",
          },
          {
            type: "text",
            name: "Q2",
            title: "Here is some info as part of question track 2",
            visibleIf: "{displayQuestion}='showq2",
          }
        ]
      },
      { 
        name: "page2", 
        questions: [
        
        //   // { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
        //   // { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } 
        ]
      },
      { 
        name: "page3",
        questions: 
        [
          { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } 
        ] 
      }
    ]
  };

  json = {
    triggers: [
        {
            type: "visible",
            name: "type",
            operator: "equal",
            value: "Show Question Track 1",
            questions: ["showq1"]
        }, {
            type: "visible",
            name: "type",
            value: "Show Question Track 2",
            questions: ["showq2"]
        }, {
            type: "visible",
            name: "type",
            value: "Show Question Track 3",
            questions: ["showq3"]
        }, {
            type: "visible",
            name: "type",
            value: "Show Question Track 4",
            questions: ["showq4"]
        },
    ],
    questions: [
        {
            type: "radiogroup",
            name: "type",
            isRequired: true,
            colCount: 4,
            hasOther: true,
            title: "Please choose one of these.",
            choices: [
                "Show Question Track 1",
                "Show Question Track 2",
                "Show Question Track 3",
                "Show Question Track 4",
            ]
        },
        {
            type: "text",
            name: "showq1",
            isRequired: true,
            visible: false,
            title: "Here is some info as part of question track 1",
        }, 
        {
            type: "text",
            name: "showq2",
            isRequired: true,
            visible: false,
            title: "Here is some info as part of question track 2",
                
        }, 
        {
            type: "text",
            name: "showq3",
            isRequired: true,
            colCount: 4,
            visible: false,
            title: "Here is some info as part of question track 3",
        }, 
        {
            type: "text",
            name: "showq4",
            isRequired: true,
            visible: false,
            title: "Here is some info as part of question track 4",
        }, 
    ]
};


  constructor() { }

  getQuestionData(){
    return this.question;
  }
  getLogicData(){
    return this.logic;
  }
  getSampleData(){
    return this.surveyJSON;
  }
}
