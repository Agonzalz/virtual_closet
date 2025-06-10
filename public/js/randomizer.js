export function getRandomItem(items) {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}