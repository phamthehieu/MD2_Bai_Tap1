import {Dish} from "./dish";

export class Menu {
    private _dish: Dish;

    constructor(dish: Dish) {
        this._dish = dish;
    }

    get dish(): Dish {
        return this._dish;
    }

    set dish(value: Dish) {
        this._dish = value;
    }
}