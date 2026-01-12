import type { AdaptiveCardElement, FactSetContainer } from './types/element.types.js';
export default function sendMessageToTeamsWebhook(webhookUrl: string, card: {
    cardElements: AdaptiveCardElement[];
    actions?: {
        openUrl?: {
            title: string;
            url: string;
        };
    };
}): Promise<void>;
/**
 * Convert a record to a FactSet container
 * @param record - Record to convert
 * @returns FactSet container
 */
export declare function recordToFactSet(record: Record<string, unknown>): FactSetContainer;
