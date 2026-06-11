import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { filesDescription } from './resources/files';
import { foldersDescription } from './resources/folders';

export class HubapiFiles implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Hubapi Files',
		name: 'N8nDevHubapiFiles',
		icon: { light: 'file:./hubapi-files.png', dark: 'file:./hubapi-files.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Upload and manage files.',
		defaults: { name: 'Hubapi Files' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevHubapiFilesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Files",
					"value": "Files",
					"description": "Operations to upload and edit files."
				},
				{
					"name": "Folders",
					"value": "Folders",
					"description": "Operations to create and edit folders."
				}
			],
			"default": ""
		},
		...filesDescription,
		...foldersDescription
		],
	};
}
