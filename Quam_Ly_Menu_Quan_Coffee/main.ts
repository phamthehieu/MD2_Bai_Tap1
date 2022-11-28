import {DishManage} from "./service/dishManage";
import {Dish} from "./model/dish";

const input = require('readline-sync')
 let dishManage = new DishManage()
let dish = new Dish(1,'blackCoffee',1,'Coffee','a',1)
let dish1 = new Dish(2,'LotusTea',2,'Tea','a',2)
let dish2 = new Dish(3,'a',3,'Juice','a',3)
let dish3 = new Dish(4,'a',4,'Snacks','a',4)
dishManage.add(dish)
dishManage.add(dish1)
dishManage.add(dish2)
dishManage.add(dish3)

function main() {
    let choice = -1;
    do {
        console.log(`
        1. Hien thi danh sach mon an
        2. Them mon an theo ma
        3. Sua mon an theo ma
        4. Xoa mon an theo ma
        5. Tim mon theo ten
        6. Hien mon theo loai
        7. Sap xep gia tang dan
        8. Xoa theo loai
        0: Thoat
        `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                displayAll();
                break;
            case 2:
                addDish();
                break;
            case 3:
                editDish();
                break;
            case 4:
                removeDish();
                break;
            case 5:
                searchDishName();
                break;
            case 6:
                displayDishClass();
                break;
            case 7:
                sortUpAscending();
                break;
            case 8:
                break;
        }

    } while (choice != 0)
}
main();

function displayAll() {
    console.log(dishManage.display())
}

function addDish() {
    console.log(`--------Them mon an moi---------------`)
    let id = +input.question('Enter id : ');
    let name = input.question('Enter name : ');
    let price = input.question('Enter price : ');
    let classify = input.question('Enter classify : ');
    let describe = input.question('Enter describe : ');
    let amount = input.question('Enter amount : ');
    let dish = new Dish(id,name,price,classify,describe,amount)
    dishManage.add(dish)
}

function editDish() {
    let i = +input.question('Enter id : ');
    console.log(dishManage.display())
    console.log(`-------- Sua mon an ----------`)
    let id = +input.question('Enter id: ')
    let name = input.question('Enter name : ');
    let price = input.question('Enter price : ');
    let classify = input.question('Enter classify : ');
    let describe = input.question('Enter describe : ');
    let amount = input.question('Enter amount : ');
    let editDish = new Dish(id,name,price,classify,describe,amount)
    dishManage.edit(i,editDish)
}

function removeDish() {
    let i = +input.question('Enter id : ');
    console.log(dishManage.display())
    dishManage.remove(i)
}

function searchDishName() {
    let name = input.question('Enter name : ');
    console.log(dishManage.searchName(name))
}

function displayDishClass() {
    let choice = -1;
    do {
        console.log(`-------------Chon loai hien thi-------------
        1. Hien thi cac mon coffee
        2. Hien thi cac mon tea
        3. Hien thi cac mon Juice
        4. Hien thi cac mon Snacks
        0. Thoat
        `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                displayCoffee();
                break;
            case 2:
                displayTea();
                break;
            case 3:
                displayJuice();
                break;
            case 4:
                displaySnacks();
                break;
        }

    } while (choice != 0)
}

function sortUpAscending() {
    console.log(dishManage.SortUpAscending())
}

function displayTea() {
    console.log( dishManage.checkClassify('Tea'))
}
function displayCoffee() {
    console.log( dishManage.checkClassify('Coffee'))
}function displaySnacks() {
    console.log( dishManage.checkClassify('Snacks'))
}function displayJuice() {
    console.log( dishManage.checkClassify('Juice'))
}