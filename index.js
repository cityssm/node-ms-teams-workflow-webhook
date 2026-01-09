export default async function sendMessageToTeamsWebhook(webhookUrl, card) {
    const json = {
        type: 'message',
        attachments: [
            {
                contentType: 'application/vnd.microsoft.card.adaptive',
                contentUrl: null,
                content: {
                    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
                    type: 'AdaptiveCard',
                    version: '1.2',
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
    console.log(JSON.stringify(json, null, 2));
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
