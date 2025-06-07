//Functionality relating to CRUD operations for clothing objects

export function loadCloset() {
    return JSON.parse(localStorage.getItem('closet')) || [];
}

export function saveCloset(closet) {
    localStorage.setItem('closet', JSON.stringify(closet));
}

export function addClothingItem(item) {
    const closet = loadCloset();
    closet.push(item);
    saveCloset(closet);
}

export function deleteClothingItem(index) {
    const closet = loadCloset();
    closet.splice(index, 1);
    saveCloset(closet);
}

export function updateClothingItem(index, newItem) {
    const closet = loadCloset();
    closet[index] = newItem;
    saveCloset(closet);
}

