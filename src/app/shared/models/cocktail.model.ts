import { Ingredient } from './ingredient.model';

export class Cocktail {
    public name: string;
    public img: string;
    public description: string;
    public ingredients?: Ingredient[];

    constructor(name: string, img: string, description: string, ingredients?: Ingredient[]) {
        this.name = name;
        this.img = img;
        this.description = description;
        this.ingredients = ingredients;
    }
}

// OR

/* export class Cocktail {
    constructor(
        public name: string,
        public img: string,
        public description: string,
        public ingredients: Ingredient[]
        ) {
    }
} */