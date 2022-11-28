export class Dish {
    private _id: number;
    private _name: string;
    private _price: number;
    private _classify: string;
    private _describe: string;
    private _amount: number;

    constructor(id: number, name: string, price: number, classify: string, describe: string, amount: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._classify = classify;
        this._describe = describe;
        this._amount = amount;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get classify(): string {
        return this._classify;
    }

    set classify(value: string) {
        this._classify = value;
    }

    get describe(): string {
        return this._describe;
    }

    set describe(value: string) {
        this._describe = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
}