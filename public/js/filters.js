export function filterClosetByType(closet, selectedTypes) {
  if (!selectedTypes.length) return closet;
  return closet.filter(item => selectedTypes.includes(item.type));
}

export function getSelectedTypes() {
  return Array.from(document.querySelectorAll('.filter-type:checked')).map(cb => cb.value);
}