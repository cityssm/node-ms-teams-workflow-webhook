import Debug from 'debug';
import { DEBUG_NAMESPACE } from './debug.config.js';
const debug = Debug(`${DEBUG_NAMESPACE}:index`);
const adaptiveCardVersion = '1.5';
/**
 * Send a message to a Microsoft Teams workflow webhook.
 * @param webhookUrl - Webhook URL
 * @param messageBody - One or more Adaptive Card elements for the message body. Can also be a simple string.
 * @param messageActions - Optional. One or more Adaptive Card actions for the message. Can also be a URL string.
 */
export default async function sendMessageToTeamsWebhook(webhookUrl, messageBody, messageActions = []) {
    /*
     * Build Adaptive Card body
     */
    // eslint-disable-next-line @typescript-eslint/init-declarations
    let body;
    if (typeof messageBody === 'string') {
        body = [
            {
                type: 'TextBlock',
                text: messageBody,
                wrap: true
            }
        ];
    }
    else if (Array.isArray(messageBody)) {
        body = messageBody;
    }
    else {
        body = [messageBody];
    }
    /*
     * Build actions
     */
    let actions = [];
    if (typeof messageActions === 'string') {
        actions = [
            {
                type: 'Action.OpenUrl',
                title: 'Open Link',
                url: messageActions
            }
        ];
    }
    else if (Array.isArray(messageActions)) {
        actions = messageActions;
    }
    else if (Object.keys(messageActions).length > 0) {
        actions = [messageActions];
    }
    /*
     * Build JSON payload
     */
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
                    body,
                    actions
                }
            }
        ]
    };
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
