export default function accumulate(string: string): string {
  return string
    .split("")
    .map(formatLetter)
    .join("-")
}

function formatLetter(character: string, count: number) {
  return `${character.toUpperCase()}${character.toLowerCase().repeat(count)}`
}
