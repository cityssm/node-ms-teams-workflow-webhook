import type { AdaptiveCardElement } from './types/element.types.js';
export default function sendMessageToTeamsWebhook(webhookUrl: string, card: {
    cardElements: AdaptiveCardElement[];
    actions?: {
        openUrl?: {
            title: string;
            url: string;
        };
    };
}): Promise<void>;
export * as helpers from './helpers.js';
export type * as elementTypes from './types/element.types.js';
export type * as valueTypes from './types/value.types.js';
