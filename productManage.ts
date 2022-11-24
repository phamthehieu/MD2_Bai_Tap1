import {Product} from "./product";

export class ProductManage {
    listProduct: Product[] = [];

    add(t: Product): void {
        this.listProduct.push(t);
    }

    remove(id: number): void {

    }

    findById(name: string) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (name === this.listProduct[i].Name) {
                return this.listProduct[i]
            }
        }
        return -1;
    }

    edit(name: string, t: Product) {
        let index: any = this.findById(name);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listProduct[index] = t;
        }
    }

    findByName(t: string) {
        return this.listProduct.filter((el) => el.Name.toLowerCase().includes(t.toLowerCase()))
    }

    finByPriceRange(low: number, high: number) {
        let arr = [];
        for (let i = 0; i < this.listProduct.length; i++) {
            if (low < this.listProduct[i].Price && this.listProduct[i].Price < high) {
                arr.push(this.listProduct[i]);
            }
        }
        return arr;
    }

    sortUpPrice() {
        return this.listProduct.sort(function (a, b) {
            return a.Price - b.Price
        })
    }

    sortDiscounts() {
        return this.listProduct.sort(function (a, b) {
            return b.Price - a.Price
        })
    }

    decreasingAmount() {
        return this.listProduct.sort(function (a, b) {
            return b.Amount - a.Amount
        })
    }

    findByTheFirm(t: string) {
        return this.listProduct.filter((el) => el.TheFirm.toLowerCase().includes(t.toLowerCase()))
    }
}