/**
 * Convert a record to a FactSet container
 * @param record - Record to convert
 * @returns FactSet container
 */
export function recordToFactSet(record) {
    const factSet = {
        type: 'FactSet',
        facts: []
    };
    for (const [key, value] of Object.entries(record)) {
        factSet.facts.push({ title: key, value: String(value) });
    }
    return factSet;
}
