import {Dish} from "../model/dish";

export class DishManage {
    listDishManage: Dish [] = [];

    add(t: Dish) {
        this.listDishManage.push(t);
    }

    edit(id: number, t: Dish) {
        for (let i = 0; i < this.listDishManage.length; i++) {
            if (this.listDishManage[i].id === id) {
                return this.listDishManage[i] = t;
            }
        }
    }

    remove(id: number) {
        for (let i = 0; i < this.listDishManage.length; i++) {
            if (this.listDishManage[i].id === id) {
                return this.listDishManage.splice(i, 1)
            }
        }
    }

    searchName(name: string) {
        return this.listDishManage.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))
    }

    searchClassify(t: string) {
        return this.listDishManage.filter((el) => el.classify.toLowerCase().includes(t.toLowerCase()))
    }

    SortUpAscending() {
        return this.listDishManage.sort((a, b) => a.price - b.price)
    }

    display() {
        return this.listDishManage;
    }

    checkClassify(t: string) {
        let arr = []
        for (let i = 0; i < this.listDishManage.length; i++) {
            if (this.listDishManage[i].classify === t) {
                arr.push(this.listDishManage[i])
            }
        }
        return arr;
    }
}