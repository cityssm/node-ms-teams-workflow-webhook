import Debug from 'debug';
import { DEBUG_NAMESPACE } from './debug.config.js';
const debug = Debug(`${DEBUG_NAMESPACE}:index`);
const adaptiveCardVersion = '1.2';
export default async function sendMessageToTeamsWebhook(webhookUrl, card) {
    const json = {
        type: 'message',
        attachments: [
            {
                contentType: 'application/vnd.microsoft.card.adaptive',
                // eslint-disable-next-line unicorn/no-null
                contentUrl: null,
                content: {
                    // eslint-disable-next-line sonarjs/no-clear-text-protocols
                    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
                    type: 'AdaptiveCard',
                    version: adaptiveCardVersion,
                    body: card.cardElements,
                    actions: []
                }
            }
        ]
    };
    if (card.actions?.openUrl !== undefined) {
        json.attachments[0].content.actions.push({
            type: 'Action.OpenUrl',
            title: card.actions.openUrl.title,
            url: card.actions.openUrl.url
        });
    }
    debug('Sending message to Teams webhook: %O', json);
    await fetch(webhookUrl, {
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to send message to Teams webhook: ${response.status} ${response.statusText}`);
        }
    });
}
export * as helpers from './helpers.js';
