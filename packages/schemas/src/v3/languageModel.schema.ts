// THIS IS A AUTO-GENERATED FILE. DO NOT MODIFY MANUALLY!
const schema = {
  "type": "object",
  "title": "LanguageModel",
  "definitions": {
    "AmazonBedrockLanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "amazon-bedrock",
          "description": "Amazon Bedrock Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "accessKeyId": {
          "description": "Optional access key ID to use with the model. Defaults to the `AWS_ACCESS_KEY_ID` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "accessKeySecret": {
          "description": "Optional secret access key to use with the model. Defaults to the `AWS_SECRET_ACCESS_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "region": {
          "type": "string",
          "description": "The AWS region. Defaults to the `AWS_REGION` environment variable.",
          "examples": [
            "us-east-1",
            "us-west-2",
            "eu-west-1"
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    "AnthropicLanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "anthropic",
          "description": "Anthropic Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `ANTHROPIC_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    "AzureLanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "azure",
          "description": "Azure Configuration"
        },
        "model": {
          "type": "string",
          "description": "The deployment name of the Azure model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "resourceName": {
          "type": "string",
          "description": "Azure resource name. Defaults to the `AZURE_RESOURCE_NAME` environment variable."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `AZURE_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "apiVersion": {
          "type": "string",
          "description": "Sets a custom api version. Defaults to `preview`."
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Use a different URL prefix for API calls. Either this or `resourceName` can be used."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    "DeepSeekLanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "deepseek",
          "description": "DeepSeek Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `DEEPSEEK_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    "GoogleGenerativeAILanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "google-generative-ai",
          "description": "Google Generative AI Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `GOOGLE_GENERATIVE_AI_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    "GoogleVertexAnthropicLanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "google-vertex-anthropic",
          "description": "Google Vertex AI Anthropic Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the Anthropic language model running on Google Vertex.",
          "examples": [
            "claude-sonnet-4"
          ]
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "project": {
          "type": "string",
          "description": "The Google Cloud project ID. Defaults to the `GOOGLE_VERTEX_PROJECT` environment variable."
        },
        "region": {
          "type": "string",
          "description": "The Google Cloud region. Defaults to the `GOOGLE_VERTEX_REGION` environment variable.",
          "examples": [
            "us-central1",
            "us-east1",
            "europe-west1"
          ]
        },
        "credentials": {
          "description": "Optional file path to service account credentials JSON. Defaults to the `GOOGLE_APPLICATION_CREDENTIALS` environment variable or application default credentials.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    "GoogleVertexLanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "google-vertex",
          "description": "Google Vertex AI Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model.",
          "examples": [
            "gemini-2.0-flash-exp",
            "gemini-1.5-pro",
            "gemini-1.5-flash"
          ]
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "project": {
          "type": "string",
          "description": "The Google Cloud project ID. Defaults to the `GOOGLE_VERTEX_PROJECT` environment variable."
        },
        "region": {
          "type": "string",
          "description": "The Google Cloud region. Defaults to the `GOOGLE_VERTEX_REGION` environment variable.",
          "examples": [
            "us-central1",
            "us-east1",
            "europe-west1"
          ]
        },
        "credentials": {
          "description": "Optional file path to service account credentials JSON. Defaults to the `GOOGLE_APPLICATION_CREDENTIALS` environment variable or application default credentials.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    "MistralLanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "mistral",
          "description": "Mistral AI Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `MISTRAL_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    "OpenAILanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "openai",
          "description": "OpenAI Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model.",
          "examples": [
            "gpt-4.1",
            "o4-mini",
            "o3",
            "o3-deep-research"
          ]
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `OPENAI_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    "OpenRouterLanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "openrouter",
          "description": "OpenRouter Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `OPENROUTER_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    "XaiLanguageModel": {
      "type": "object",
      "properties": {
        "provider": {
          "const": "xai",
          "description": "xAI Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model.",
          "examples": [
            "grok-beta",
            "grok-vision-beta"
          ]
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `XAI_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    }
  },
  "oneOf": [
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "amazon-bedrock",
          "description": "Amazon Bedrock Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "accessKeyId": {
          "description": "Optional access key ID to use with the model. Defaults to the `AWS_ACCESS_KEY_ID` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "accessKeySecret": {
          "description": "Optional secret access key to use with the model. Defaults to the `AWS_SECRET_ACCESS_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "region": {
          "type": "string",
          "description": "The AWS region. Defaults to the `AWS_REGION` environment variable.",
          "examples": [
            "us-east-1",
            "us-west-2",
            "eu-west-1"
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "anthropic",
          "description": "Anthropic Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `ANTHROPIC_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "azure",
          "description": "Azure Configuration"
        },
        "model": {
          "type": "string",
          "description": "The deployment name of the Azure model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "resourceName": {
          "type": "string",
          "description": "Azure resource name. Defaults to the `AZURE_RESOURCE_NAME` environment variable."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `AZURE_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "apiVersion": {
          "type": "string",
          "description": "Sets a custom api version. Defaults to `preview`."
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Use a different URL prefix for API calls. Either this or `resourceName` can be used."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "deepseek",
          "description": "DeepSeek Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `DEEPSEEK_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "google-generative-ai",
          "description": "Google Generative AI Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `GOOGLE_GENERATIVE_AI_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "google-vertex-anthropic",
          "description": "Google Vertex AI Anthropic Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the Anthropic language model running on Google Vertex.",
          "examples": [
            "claude-sonnet-4"
          ]
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "project": {
          "type": "string",
          "description": "The Google Cloud project ID. Defaults to the `GOOGLE_VERTEX_PROJECT` environment variable."
        },
        "region": {
          "type": "string",
          "description": "The Google Cloud region. Defaults to the `GOOGLE_VERTEX_REGION` environment variable.",
          "examples": [
            "us-central1",
            "us-east1",
            "europe-west1"
          ]
        },
        "credentials": {
          "description": "Optional file path to service account credentials JSON. Defaults to the `GOOGLE_APPLICATION_CREDENTIALS` environment variable or application default credentials.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "google-vertex",
          "description": "Google Vertex AI Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model.",
          "examples": [
            "gemini-2.0-flash-exp",
            "gemini-1.5-pro",
            "gemini-1.5-flash"
          ]
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "project": {
          "type": "string",
          "description": "The Google Cloud project ID. Defaults to the `GOOGLE_VERTEX_PROJECT` environment variable."
        },
        "region": {
          "type": "string",
          "description": "The Google Cloud region. Defaults to the `GOOGLE_VERTEX_REGION` environment variable.",
          "examples": [
            "us-central1",
            "us-east1",
            "europe-west1"
          ]
        },
        "credentials": {
          "description": "Optional file path to service account credentials JSON. Defaults to the `GOOGLE_APPLICATION_CREDENTIALS` environment variable or application default credentials.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "mistral",
          "description": "Mistral AI Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `MISTRAL_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "openai",
          "description": "OpenAI Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model.",
          "examples": [
            "gpt-4.1",
            "o4-mini",
            "o3",
            "o3-deep-research"
          ]
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `OPENAI_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "openrouter",
          "description": "OpenRouter Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model."
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `OPENROUTER_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "provider": {
          "const": "xai",
          "description": "xAI Configuration"
        },
        "model": {
          "type": "string",
          "description": "The name of the language model.",
          "examples": [
            "grok-beta",
            "grok-vision-beta"
          ]
        },
        "displayName": {
          "type": "string",
          "description": "Optional display name."
        },
        "token": {
          "description": "Optional API key to use with the model. Defaults to the `XAI_API_KEY` environment variable.",
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "secret": {
                  "type": "string",
                  "description": "The name of the secret that contains the token."
                }
              },
              "required": [
                "secret"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "env": {
                  "type": "string",
                  "description": "The name of the environment variable that contains the token. Only supported in declarative connection configs."
                }
              },
              "required": [
                "env"
              ],
              "additionalProperties": false
            }
          ]
        },
        "baseUrl": {
          "type": "string",
          "format": "url",
          "pattern": "^https?:\\/\\/[^\\s/$.?#].[^\\s]*$",
          "description": "Optional base URL."
        }
      },
      "required": [
        "provider",
        "model"
      ],
      "additionalProperties": false
    }
  ]
} as const;
export { schema as languageModelSchema };