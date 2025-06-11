

 export class Clothing {
    constructor(name, type, color, image, tags=[]) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.image = image;
        this.tags = tags;
    }

    displayClothing () {
        console.log(this)
    }
 }

