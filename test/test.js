import { describe, it } from 'node:test';
import sendMessageToTeamsWebhook from '../index.js';
import { webhookURL } from './config.js';
await describe('ms-teams-workflow-webhook', async () => {
    await it('should run tests', async () => {
        await sendMessageToTeamsWebhook(webhookURL, {
            cardElements: [
                {
                    text: 'This is a test message from the ms-teams-workflow-webhook package.',
                    type: 'TextBlock',
                    weight: 'bolder',
                    size: 'extraLarge'
                },
                {
                    type: 'Image',
                    url: 'https://adaptivecards.io/content/cats/1.png'
                }
            ],
            actions: {
                openUrl: {
                    title: 'Visit Adaptive Cards',
                    url: 'https://adaptivecards.io'
                }
            }
        });
    });
});
