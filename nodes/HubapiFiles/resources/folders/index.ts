import type { INodeProperties } from 'n8n-workflow';

export const foldersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					]
				}
			},
			"options": [
				{
					"name": "Post Files v3 Folders Create",
					"value": "Post Files v3 Folders Create",
					"action": "Create folder.",
					"description": "Creates a folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/files/v3/folders"
						}
					}
				},
				{
					"name": "Get Files v3 Folders Search Do Search",
					"value": "Get Files v3 Folders Search Do Search",
					"action": "Search folders",
					"description": "Search for folders. Does not contain hidden or archived folders.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/files/v3/folders/search"
						}
					}
				},
				{
					"name": "Post Files v3 Folders Update Async Update Properties",
					"value": "Post Files v3 Folders Update Async Update Properties",
					"action": "Update folder properties",
					"description": "Update properties of folder by given ID. This action happens asynchronously and will update all of the folder's children as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/files/v3/folders/update/async"
						}
					}
				},
				{
					"name": "Get Files v3 Folders Update Async Tasks Task ID Status Check Update Status",
					"value": "Get Files v3 Folders Update Async Tasks Task ID Status Check Update Status",
					"action": "Check folder update status.",
					"description": "Check status of folder update. Folder updates happen asynchronously.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/files/v3/folders/update/async/tasks/{{$parameter[\"taskId\"]}}/status"
						}
					}
				},
				{
					"name": "Delete Files v3 Folders Folder ID Archive",
					"value": "Delete Files v3 Folders Folder ID Archive",
					"action": "Delete folder.",
					"description": "Delete folder by ID.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/files/v3/folders/{{$parameter[\"folderId\"]}}"
						}
					}
				},
				{
					"name": "Get Files v3 Folders Folder ID Get By ID",
					"value": "Get Files v3 Folders Folder ID Get By ID",
					"action": "Get folder",
					"description": "Get folder by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/files/v3/folders/{{$parameter[\"folderId\"]}}"
						}
					}
				},
				{
					"name": "Delete Files v3 Folders Folder Path Archive By Path",
					"value": "Delete Files v3 Folders Folder Path Archive By Path",
					"action": "Delete folder.",
					"description": "Delete folder by path.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/files/v3/folders/{{$parameter[\"folderPath\"]}}"
						}
					}
				},
				{
					"name": "Get Files v3 Folders Folder Path Get By Path",
					"value": "Get Files v3 Folders Folder Path Get By Path",
					"action": "Get folder.",
					"description": "Get folder by path.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/files/v3/folders/{{$parameter[\"folderPath\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /files/v3/folders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Desired name for the folder.",
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
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Create"
					]
				}
			}
		},
		{
			"displayName": "Parent Folder ID",
			"name": "parentFolderId",
			"type": "string",
			"default": "",
			"description": "Folder ID of the parent of the created folder. If not specified, the folder will be created at the root level. parentFolderId and parentFolderPath cannot be set at the same time.",
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
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Create"
					]
				}
			}
		},
		{
			"displayName": "Parent Path",
			"name": "parentPath",
			"type": "string",
			"default": "",
			"description": "Path of the parent of the created folder. If not specified the folder will be created at the root level. parentFolderPath and parentFolderId cannot be set at the same time.",
			"routing": {
				"send": {
					"property": "parentPath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Create"
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
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Create"
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
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Create"
					]
				}
			}
		},
		{
			"displayName": "GET /files/v3/folders/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"description": "Properties that should be included in the returned folders.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit of results to return. Max limit is 100.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"description": "Search folder by given ID.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "createdAt",
			"description": "Search for folders with the given creation timestamp.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updatedAt",
			"description": "Search for folder at given update timestamp.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Search for folders containing the specified name.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Path",
			"name": "path",
			"description": "Search for folders by path.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "Parent Folder ID",
			"name": "parentFolderId",
			"description": "Search for folders with the given parent folder ID.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Search Do Search"
					]
				}
			}
		},
		{
			"displayName": "POST /files/v3/folders/update/async",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Update Async Update Properties"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Id of the folder to change.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Update Async Update Properties"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "New name. If specified the folder's name and fullPath will change. All children of the folder will be updated accordingly.",
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
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Update Async Update Properties"
					]
				}
			}
		},
		{
			"displayName": "Parent Folder ID",
			"name": "parentFolderId",
			"type": "number",
			"default": 0,
			"description": "New parent folder ID. If changed, the folder and all it's children will be moved into the specified folder. parentFolderId and parentFolderPath cannot be specified at the same time.",
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
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Update Async Update Properties"
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
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Update Async Update Properties"
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
						"Folders"
					],
					"operation": [
						"Post Files v3 Folders Update Async Update Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /files/v3/folders/update/async/tasks/{taskId}/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Update Async Tasks Task ID Status Check Update Status"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "taskId",
			"required": true,
			"description": "Task ID of folder update",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Update Async Tasks Task ID Status Check Update Status"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Update Async Tasks Task ID Status Check Update Status"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Update Async Tasks Task ID Status Check Update Status"
					]
				}
			}
		},
		{
			"displayName": "DELETE /files/v3/folders/{folderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Delete Files v3 Folders Folder ID Archive"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "ID of folder to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Delete Files v3 Folders Folder ID Archive"
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
						"Folders"
					],
					"operation": [
						"Delete Files v3 Folders Folder ID Archive"
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
						"Folders"
					],
					"operation": [
						"Delete Files v3 Folders Folder ID Archive"
					]
				}
			}
		},
		{
			"displayName": "GET /files/v3/folders/{folderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "ID of desired folder",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"description": "Properties to set on returned folder.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder ID Get By ID"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder ID Get By ID"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder ID Get By ID"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /files/v3/folders/{folderPath}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Delete Files v3 Folders Folder Path Archive By Path"
					]
				}
			}
		},
		{
			"displayName": "Folder Path",
			"name": "folderPath",
			"required": true,
			"description": "Path of folder to delete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Delete Files v3 Folders Folder Path Archive By Path"
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
						"Folders"
					],
					"operation": [
						"Delete Files v3 Folders Folder Path Archive By Path"
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
						"Folders"
					],
					"operation": [
						"Delete Files v3 Folders Folder Path Archive By Path"
					]
				}
			}
		},
		{
			"displayName": "GET /files/v3/folders/{folderPath}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder Path Get By Path"
					]
				}
			}
		},
		{
			"displayName": "Folder Path",
			"name": "folderPath",
			"required": true,
			"description": "Path of desired folder.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder Path Get By Path"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"description": "Properties to set on returned folder.",
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder Path Get By Path"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder Path Get By Path"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder Path Get By Path"
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
						"Folders"
					],
					"operation": [
						"Get Files v3 Folders Folder Path Get By Path"
					]
				}
			}
		},
];
