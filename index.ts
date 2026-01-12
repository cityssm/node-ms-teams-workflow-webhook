import Debug from 'debug'

import { DEBUG_NAMESPACE } from './debug.config.js'
import type {
  AdaptiveCardElement,
  FactSetContainer
} from './types/element.types.js'

const debug = Debug(`${DEBUG_NAMESPACE}:index`)

export default async function sendMessageToTeamsWebhook(
  webhookUrl: string,
  card: {
    cardElements: AdaptiveCardElement[]

    actions?: {
      openUrl?: { title: string; url: string }
    }
  }
): Promise<void> {
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
          version: '1.2',

          body: card.cardElements,

          actions: [] as unknown[]
        }
      }
    ]
  }

  if (card.actions?.openUrl !== undefined) {
    json.attachments[0].content.actions.push({
      type: 'Action.OpenUrl',
      title: card.actions.openUrl.title,
      url: card.actions.openUrl.url
    })
  }

  debug('Sending message to Teams webhook: %O', json)

  await fetch(webhookUrl, {
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed to send message to Teams webhook: ${response.status} ${response.statusText}`
      )
    }
  })
}

/**
 * Convert a record to a FactSet container
 * @param record - Record to convert
 * @returns FactSet container
 */
export function recordToFactSet(
  record: Record<string, unknown>
): FactSetContainer {
  const factSet: FactSetContainer = {
    type: 'FactSet',

    facts: []
  }

  for (const [key, value] of Object.entries(record)) {
    factSet.facts.push({ title: key, value: String(value) })
  }

  return factSet
}
