import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class HubapiFilesApi implements ICredentialType {
        name = 'N8nDevHubapiFilesApi';

        displayName = 'Hubapi Files API';

        icon: Icon = { light: 'file:../nodes/HubapiFiles/hubapi-files.png', dark: 'file:../nodes/HubapiFiles/hubapi-files.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.hubapi.com/',
                        required: true,
                        placeholder: 'https://api.hubapi.com/',
                        description: 'The base URL of your Hubapi Files API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'hapikey': '={{$credentials.apiKey}}',
                        },
                },
        };


}
