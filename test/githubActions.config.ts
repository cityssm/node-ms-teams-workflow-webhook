export const webhookURL = process.env.TEAMS_WEBHOOK_URL ?? ''

if (webhookURL === '') {
  throw new Error('TEAMS_WEBHOOK_URL environment variable is not set.')
}