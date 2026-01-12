import type { AdaptiveCardAction } from './types/action.types.js';
import type { AdaptiveCardElement } from './types/element.types.js';
/**
 * Send a message to a Microsoft Teams workflow webhook
 * @param webhookUrl - Webhook URL
 * @param messageBody - Adaptive Card elements for the message body
 * @param actions - Adaptive Card actions for the message
 */
export default function sendMessageToTeamsWebhook(webhookUrl: string, messageBody: AdaptiveCardElement | AdaptiveCardElement[], actions?: AdaptiveCardAction | AdaptiveCardAction[]): Promise<void>;
export * as helpers from './helpers.js';
export type * as elementTypes from './types/element.types.js';
export type * as valueTypes from './types/value.types.js';
