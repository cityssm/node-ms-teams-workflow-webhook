import type { FactSetContainer } from './types/element.types.js'

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
