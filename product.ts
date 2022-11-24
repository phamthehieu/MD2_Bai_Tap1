export class Product {
    private _name: string;
    private _price: number;
    private _amount: number;
    private _theFirm: string;

    constructor(name: string, price: number, amount: number, theFirm: string) {
        this._name = name;
        this._price = price;
        this._amount = amount;
        this._theFirm = theFirm;
    }

    get Name(): string {
        return this._name;
    }

    set Name(value: string) {
        this._name = value;
    }

    get Price(): number {
        return this._price;
    }

    set Price(value: number) {
        this._price = value;
    }

    get Amount(): number {
        return this._amount;
    }

    set Amount(value: number) {
        this._amount = value;
    }

    get TheFirm(): string {
        return this._theFirm;
    }

    set TheFirm(value: string) {
        this._theFirm = value;
    }
}