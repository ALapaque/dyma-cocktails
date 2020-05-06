export class Ingredient {
    public name: string;
    public quantity: string;

    constructor(name: string, quantity: string) {
        this.name = name;
        this.quantity = quantity;
    }
}

// OR

/* export class Ingredient {
    constructor(
        public name: string,
        publicquantity: string
        ) {
    }
} */