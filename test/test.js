import { describe, it } from 'node:test';
import Debug from 'debug';
import { DEBUG_ENABLE_NAMESPACES } from '../debug.config.js';
import { recordToFactSet } from '../helpers.js';
import sendMessageToTeamsWebhook from '../index.js';
import { webhookURL } from './config.js';
Debug.enable(DEBUG_ENABLE_NAMESPACES);
await describe('ms-teams-workflow-webhook', async () => {
    await it('Should post a string message to the Teams webhook', async () => {
        await sendMessageToTeamsWebhook(webhookURL, 'This is a test message from the ms-teams-workflow-webhook package.');
    });
    await it('Should post a string message with a URL to the Teams webhook', async () => {
        await sendMessageToTeamsWebhook(webhookURL, 'Test message', 'https://github.com/cityssm/node-ms-teams-workflow-webhook');
    });
    await it('Should post an element with an action to the Teams webhook', async () => {
        await sendMessageToTeamsWebhook(webhookURL, {
            type: 'TextBlock',
            text: 'Send with the @cityssm/ms-teams-workflow-webhook-package',
            weight: 'bolder'
        }, {
            type: 'Action.OpenUrl',
            title: 'Visit on GitHub',
            url: 'https://github.com/cityssm/node-ms-teams-workflow-webhook'
        });
    });
    await it('Should post a complex message to the Teams webhook', async () => {
        await sendMessageToTeamsWebhook(webhookURL, [
            {
                type: 'TextBlock',
                text: 'Built with the @cityssm/ms-teams-workflow-webhook package.',
                weight: 'bolder',
                size: 'large',
                wrap: true
            },
            {
                type: 'ColumnSet',
                columns: [
                    {
                        type: 'Column',
                        items: [
                            {
                                type: 'Image',
                                url: 'https://adaptivecards.io/content/cats/1.png'
                            }
                        ]
                    },
                    {
                        type: 'Column',
                        items: [
                            {
                                type: 'Image',
                                url: 'https://adaptivecards.io/content/cats/1.png'
                            }
                        ]
                    }
                ]
            },
            recordToFactSet({
                Sent: new Date().toISOString()
            })
        ], [
            {
                type: 'Action.OpenUrl',
                title: 'Visit on GitHub',
                url: 'https://github.com/cityssm/node-ms-teams-workflow-webhook'
            },
            {
                type: 'Action.OpenUrl',
                title: 'Visit on NPM',
                url: 'https://www.npmjs.com/package/@cityssm/ms-teams-workflow-webhook'
            }
        ]);
    });
});
