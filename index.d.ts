import type { AdaptiveCardAction, AdaptiveCardElement } from './types/element.types.js';
/**
 * Send a message to a Microsoft Teams workflow webhook.
 * @param webhookUrl - Webhook URL
 * @param messageBody - One or more Adaptive Card elements for the message body. Can also be a simple string.
 * @param messageActions - Optional. One or more Adaptive Card actions for the message. Can also be a URL string.
 */
export default function sendMessageToTeamsWebhook(webhookUrl: string, messageBody: AdaptiveCardElement | AdaptiveCardElement[] | string, messageActions?: AdaptiveCardAction | AdaptiveCardAction[] | string): Promise<void>;
export * as helpers from './helpers.js';
export type * as elementTypes from './types/element.types.js';
export type * as valueTypes from './types/value.types.js';
