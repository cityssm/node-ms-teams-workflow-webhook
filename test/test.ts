import { describe, it } from 'node:test'

import Debug from 'debug'

import { DEBUG_ENABLE_NAMESPACES } from '../debug.config.js'
import { recordToFactSet } from '../helpers.js'
import sendMessageToTeamsWebhook from '../index.js'

import { webhookURL } from './config.js'

Debug.enable(DEBUG_ENABLE_NAMESPACES)

await describe('ms-teams-workflow-webhook', async () => {
  await it('Should post a message to the Teams webhook', async () => {
    await sendMessageToTeamsWebhook(
      webhookURL,
      [
        {
          type: 'TextBlock',

          text: 'This is a test message from the ms-teams-workflow-webhook package.',
          weight: 'bolder',
          size: 'extraLarge'
        },
        {
          type: 'Image',
          url: 'https://adaptivecards.io/content/cats/1.png'
        },
        recordToFactSet({
          Sent: new Date().toISOString()
        })
      ],

      [
        {
          type: 'Action.OpenUrl',
          
          title: 'Visit on GitHub',
          url: 'https://github.com/cityssm/node-ms-teams-workflow-webhook'
        }
      ]
    )
  })

  await it('Should post a message with columns to the Teams webhook', async () => {
    await sendMessageToTeamsWebhook(webhookURL, [
      {
        type: 'ColumnSet',

        columns: [
          {
            type: 'Column',

            items: [
              {
                type: 'TextBlock',

                text: 'Column 1'
              }
            ]
          },
          {
            type: 'Column',

            items: [
              {
                type: 'TextBlock',

                text: 'Column 2'
              }
            ]
          }
        ]
      }
    ])
  })
})
