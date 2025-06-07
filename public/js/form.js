// form controls for editing items

export function openForm() {
    document.getElementById("addForm").style.display = "block";
}

export function closeForm() {
    document.getElementById("addForm").style.display = "none";
}

export function applyFilters(closet) {
    const selectedTypes = Array.from(document.querySelectorAll('.filter-type:checked')).map(cb=>cb.value);

    const filteredCloset = selectedTypes.length ? closet.filter(item => selectedTypes.includes(item.type)) : closet;
    return filteredCloset;
}