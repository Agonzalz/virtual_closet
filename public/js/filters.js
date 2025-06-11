import { renderCloset } from "./render.js";

export function filterClosetByType(closet, selectedTypes) {
  if (!selectedTypes.length) return closet;
  return closet.filter(item => selectedTypes.includes(item.type));
}

export function getSelectedTypes() {
  return Array.from(document.querySelectorAll('.filter-type:checked')).map(cb => cb.value);
}
export function getSelectedTags() {
  const tagFilterValue = document.getElementById("tags-filter")?.value || "";
  return tagFilterValue.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag);
}

export function applyFilters(closet, selectedTypes, selectedTags = "") {
    const filteredByType = selectedTypes.length
        ? closet.filter(item => selectedTypes.includes(item.type))
        : closet;

    const filteredByTags = selectedTags.length
        ? filteredByType.filter(item =>
            item.tags && item.tags.some(tag => selectedTags.includes(tag))
          )
        : filteredByType;

    const displayContainer = document.getElementById("display");
    renderCloset(filteredByTags, displayContainer);
  }