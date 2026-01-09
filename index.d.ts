import { AdaptiveCardElement } from "./types/element.types.js";
export default function sendMessageToTeamsWebhook(webhookUrl: string, card: {
    cardElements: AdaptiveCardElement[];
    actions?: {
        openUrl?: {
            title: string;
            url: string;
        };
    };
}): Promise<void>;
