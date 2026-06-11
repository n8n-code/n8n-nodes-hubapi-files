import type { INodeProperties } from 'n8n-workflow';

export const filesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					]
				}
			},
			"options": [
				{
					"name": "Post Files v3 Files Upload",
					"value": "Post Files v3 Files Upload",
					"action": "Upload file",
					"description": "Upload a single file with content specified in request body.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/files/v3/files"
						}
					}
				},
				{
					"name": "Post Files v3 Files Import From URL Async Import From URL",
					"value": "Post Files v3 Files Import From URL Async Import From URL",
					"action": "Import a file from a URL into the file manager.",
					"description": "Asynchronously imports the file at the given URL into the file manager.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/files/v3/files/import-from-url/async"
						}
					}
				},
				{
					"name": "Get Files v3 Files Import From URL Async Tasks Task ID Status Check Import",
					"value": "Get Files v3 Files Import From URL Async Tasks Task ID Status Check Import",
					"action": "Check import status.",
					"description": "Check the status of requested import.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/files/v3/files/import-from-url/async/tasks/{{$parameter[\"taskId\"]}}/status"
						}
					}
				},
				{
					"name": "Get Files v3 Files Search Do Search",
					"value": "Get Files v3 Files Search Do Search",
					"action": "Search files",
					"description": "Search through files in the file manager. Does not display hidden or archived files.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/files/v3/files/search"
						}
					}
				},
				{
					"name": "Delete Files v3 Files File ID Archive",
					"value": "Delete Files v3 Files File ID Archive",
					"action": "Delete file",
					"description": "Delete file by ID",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/files/v3/files/{{$parameter[\"fileId\"]}}"
						}
					}
				},
				{
					"name": "Get Files v3 Files File ID Get By ID",
					"value": "Get Files v3 Files File ID Get By ID",
					"action": "Get file.",
					"description": "Get file by ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/files/v3/files/{{$parameter[\"fileId\"]}}"
						}
					}
				},
				{
					"name": "Patch Files v3 Files File ID Update Properties",
					"value": "Patch Files v3 Files File ID Update Properties",
					"action": "update file properties",
					"description": "Update properties of file by ID.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/files/v3/files/{{$parameter[\"fileId\"]}}"
						}
					}
				},
				{
					"name": "Put Files v3 Files File ID Replace",
					"value": "Put Files v3 Files File ID Replace",
					"action": "Replace file.",
					"description": "Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/files/v3/files/{{$parameter[\"fileId\"]}}"
						}
					}
				},
				{
					"name": "Delete Files v3 Files File ID Gdpr Delete Archive GDPR",
					"value": "Delete Files v3 Files File ID Gdpr Delete Archive GDPR",
					"action": "GDPR delete",
					"description": "GDRP delete file",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/files/v3/files/{{$parameter[\"fileId\"]}}/gdpr-delete"
						}
					}
				},
				{
					"name": "Get Files v3 Files File ID Signed URL Get Signed URL",
					"value": "Get Files v3 Files File ID Signed URL Get Signed URL",
					"action": "Get signed URL to access private file.",
					"description": "Generates signed URL that allows temporary access to a private file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/files/v3/files/{{$parameter[\"fileId\"]}}/signed-url"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /files/v3/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Upload"
					]
				}
			}
		},
		{
			"displayName": "POST /files/v3/files<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Upload"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Upload"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Upload"
					]
				}
			}
		},
		{
			"displayName": "POST /files/v3/files/import-from-url/async",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Access",
			"name": "access",
			"type": "options",
			"default": "PUBLIC_INDEXABLE",
			"description": "PUBLIC_INDEXABLE: File is publicly accessible by anyone who has the URL. Search engines can index the file. PUBLIC_NOT_INDEXABLE: File is publicly accessible by anyone who has the URL. Search engines *can't* index the file. PRIVATE: File is NOT publicly accessible. Requires a signed URL to see content. Search engines *can't* index the file.\n",
			"options": [
				{
					"name": "PUBLIC INDEXABLE",
					"value": "PUBLIC_INDEXABLE"
				},
				{
					"name": "PUBLIC NOT INDEXABLE",
					"value": "PUBLIC_NOT_INDEXABLE"
				},
				{
					"name": "HIDDEN INDEXABLE",
					"value": "HIDDEN_INDEXABLE"
				},
				{
					"name": "HIDDEN NOT INDEXABLE",
					"value": "HIDDEN_NOT_INDEXABLE"
				},
				{
					"name": "HIDDEN PRIVATE",
					"value": "HIDDEN_PRIVATE"
				},
				{
					"name": "PRIVATE",
					"value": "PRIVATE"
				}
			],
			"routing": {
				"send": {
					"property": "access",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Duplicate Validation Scope",
			"name": "duplicateValidationScope",
			"type": "options",
			"default": "ENTIRE_PORTAL",
			"description": "ENTIRE_PORTAL: Look for a duplicate file in the entire account. EXACT_FOLDER: Look for a duplicate file in the provided folder.\n",
			"options": [
				{
					"name": "ENTIRE PORTAL",
					"value": "ENTIRE_PORTAL"
				},
				{
					"name": "EXACT FOLDER",
					"value": "EXACT_FOLDER"
				}
			],
			"routing": {
				"send": {
					"property": "duplicateValidationScope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Duplicate Validation Strategy",
			"name": "duplicateValidationStrategy",
			"type": "options",
			"default": "NONE",
			"description": "NONE: Do not run any duplicate validation. REJECT: Reject the upload if a duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload a new file and return the found duplicate instead.\n",
			"options": [
				{
					"name": "NONE",
					"value": "NONE"
				},
				{
					"name": "REJECT",
					"value": "REJECT"
				},
				{
					"name": "RETURN EXISTING",
					"value": "RETURN_EXISTING"
				}
			],
			"routing": {
				"send": {
					"property": "duplicateValidationStrategy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"type": "string",
			"default": "",
			"description": "One of folderId or folderPath is required. Destination folder ID for the uploaded file.",
			"routing": {
				"send": {
					"property": "folderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"displayName": "Folder Path",
			"name": "folderPath",
			"type": "string",
			"default": "",
			"description": "One of folderPath or folderId is required. Destination folder path for the uploaded file. If the folder path does not exist, there will be an attempt to create the folder path.",
			"routing": {
				"send": {
					"property": "folderPath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name to give the resulting file in the file manager.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Overwrite",
			"name": "overwrite",
			"type": "boolean",
			"default": true,
			"description": "If true, it will overwrite existing files if a file with the same name exists in the given folder.",
			"routing": {
				"send": {
					"property": "overwrite",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"displayName": "Ttl",
			"name": "ttl",
			"type": "string",
			"default": "",
			"description": "Time to live. If specified the file will be deleted after the given time frame.",
			"routing": {
				"send": {
					"property": "ttl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"description": "URL to download the new file from.",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Post Files v3 Files Import From URL Async Import From URL"
					]
				}
			}
		},
		{
			"displayName": "GET /files/v3/files/import-from-url/async/tasks/{taskId}/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Import From URL Async Tasks Task ID Status Check Import"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "taskId",
			"required": true,
			"description": "Import by URL task ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Import From URL Async Tasks Task ID Status Check Import"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Import From URL Async Tasks Task ID Status Check Import"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Import From URL Async Tasks Task ID Status Check Import"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Import From URL Async Tasks Task ID Status Check Import"
					]
				}
			}
		},
		{
			"displayName": "GET /files/v3/files/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"description": "Desired file properties in the return object.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "properties",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "The maximum offset of items for a given search is 10000. Narrow your search down if you are reaching this limit.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Before",
			"name": "before",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "before",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of items to return. Maximum limit is 100.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort files by a given field.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"description": "Search files by given ID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "createdAt",
			"description": "Search files by time of creation.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdAt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Created At Lte",
			"name": "createdAtLte",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdAtLte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Created At Gte",
			"name": "createdAtGte",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdAtGte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updatedAt",
			"description": "Search files by time of latest updated.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "updatedAt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Updated At Lte",
			"name": "updatedAtLte",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "updatedAtLte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Updated At Gte",
			"name": "updatedAtGte",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "updatedAtGte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Search for files containing the given name.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Path",
			"name": "path",
			"description": "Search files by path.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "path",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Parent Folder ID",
			"name": "parentFolderId",
			"description": "Search files within given folder ID.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "parentFolderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Query by file size.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "Search files by height of image or video.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "height",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "Search files by width of image or video.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "width",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Encoding",
			"name": "encoding",
			"description": "Search files with specified encoding.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "encoding",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Filter by provided file type.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Extension",
			"name": "extension",
			"description": "Search files by given extension.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "extension",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"description": "Search for given URL",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "url",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Is Usable In Content",
			"name": "isUsableInContent",
			"description": "If true shows files that have been marked to be used in new content. It false shows files that should not be used in new content.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "isUsableInContent",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Allows Anonymous Access",
			"name": "allowsAnonymousAccess",
			"description": "If 'true' will show private files; if 'false' will show public files",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowsAnonymousAccess",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "DELETE /files/v3/files/{fileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete Files v3 Files File ID Archive"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "File ID to delete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete Files v3 Files File ID Archive"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete Files v3 Files File ID Archive"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete Files v3 Files File ID Archive"
					]
				}
			}
		},
		{
			"displayName": "GET /files/v3/files/{fileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "Id of the desired file.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "properties",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /files/v3/files/{fileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Patch Files v3 Files File ID Update Properties"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "ID of file to update",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Patch Files v3 Files File ID Update Properties"
					]
				}
			}
		},
		{
			"displayName": "Access",
			"name": "access",
			"type": "options",
			"default": "PUBLIC_INDEXABLE",
			"description": "NONE: Do not run any duplicate validation. REJECT: Reject the upload if a duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload a new file and return the found duplicate instead.\n",
			"options": [
				{
					"name": "PUBLIC INDEXABLE",
					"value": "PUBLIC_INDEXABLE"
				},
				{
					"name": "PUBLIC NOT INDEXABLE",
					"value": "PUBLIC_NOT_INDEXABLE"
				},
				{
					"name": "HIDDEN INDEXABLE",
					"value": "HIDDEN_INDEXABLE"
				},
				{
					"name": "HIDDEN NOT INDEXABLE",
					"value": "HIDDEN_NOT_INDEXABLE"
				},
				{
					"name": "HIDDEN PRIVATE",
					"value": "HIDDEN_PRIVATE"
				},
				{
					"name": "PRIVATE",
					"value": "PRIVATE"
				}
			],
			"routing": {
				"send": {
					"property": "access",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Patch Files v3 Files File ID Update Properties"
					]
				}
			}
		},
		{
			"displayName": "Is Usable In Content",
			"name": "isUsableInContent",
			"type": "boolean",
			"default": true,
			"description": "Mark weather the file should be used in new content or not.",
			"routing": {
				"send": {
					"property": "isUsableInContent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Patch Files v3 Files File ID Update Properties"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "New name for the file.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Patch Files v3 Files File ID Update Properties"
					]
				}
			}
		},
		{
			"displayName": "Parent Folder ID",
			"name": "parentFolderId",
			"type": "string",
			"default": "",
			"description": "Folder ID where the file should be moved to.  folderId and folderPath cannot be set at the same time.",
			"routing": {
				"send": {
					"property": "parentFolderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Patch Files v3 Files File ID Update Properties"
					]
				}
			}
		},
		{
			"displayName": "Parent Folder Path",
			"name": "parentFolderPath",
			"type": "string",
			"default": "",
			"description": "Folder path where the file should be moved to. folderId and folderPath cannot be set at the same time.",
			"routing": {
				"send": {
					"property": "parentFolderPath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Patch Files v3 Files File ID Update Properties"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Patch Files v3 Files File ID Update Properties"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Patch Files v3 Files File ID Update Properties"
					]
				}
			}
		},
		{
			"displayName": "PUT /files/v3/files/{fileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Put Files v3 Files File ID Replace"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "Id of the desired file.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Put Files v3 Files File ID Replace"
					]
				}
			}
		},
		{
			"displayName": "PUT /files/v3/files/{fileId}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Put Files v3 Files File ID Replace"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Put Files v3 Files File ID Replace"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Put Files v3 Files File ID Replace"
					]
				}
			}
		},
		{
			"displayName": "DELETE /files/v3/files/{fileId}/gdpr-delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete Files v3 Files File ID Gdpr Delete Archive GDPR"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "ID of file to GDPR delete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete Files v3 Files File ID Gdpr Delete Archive GDPR"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete Files v3 Files File ID Gdpr Delete Archive GDPR"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Delete Files v3 Files File ID Gdpr Delete Archive GDPR"
					]
				}
			}
		},
		{
			"displayName": "GET /files/v3/files/{fileId}/signed-url",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Signed URL Get Signed URL"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "fileId",
			"required": true,
			"description": "ID of file.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Signed URL Get Signed URL"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "For image files. This will resize the image to the desired size before sharing. Does not affect the original file, just the file served by this signed URL.",
			"default": "thumb",
			"type": "options",
			"options": [
				{
					"name": "Thumb",
					"value": "thumb"
				},
				{
					"name": "Icon",
					"value": "icon"
				},
				{
					"name": "Medium",
					"value": "medium"
				},
				{
					"name": "Preview",
					"value": "preview"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Signed URL Get Signed URL"
					]
				}
			}
		},
		{
			"displayName": "Expiration Seconds",
			"name": "expirationSeconds",
			"description": "How long in seconds the link will provide access to the file.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "expirationSeconds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Signed URL Get Signed URL"
					]
				}
			}
		},
		{
			"displayName": "Upscale",
			"name": "upscale",
			"description": "If size is provided, this will upscale the image to fit the size dimensions.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "upscale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Signed URL Get Signed URL"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Signed URL Get Signed URL"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Signed URL Get Signed URL"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Files"
					],
					"operation": [
						"Get Files v3 Files File ID Signed URL Get Signed URL"
					]
				}
			}
		},
];
