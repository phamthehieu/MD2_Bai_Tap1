import {ProductManage} from "./productManage";
import {Product} from "./product";

const input = require('readline-sync')
let productManage = new ProductManage;

function main() {
    let choice = -1;
    do {
        console.log(`
        1.Thêm sản phẩm
        2.Sửa sản phẩm
        3. Xóa Sản phẩm
        4. Tìm theo tên
        5.Tìm theo khoảng giá
        6.Sắp xếp giá tăng dần
        7.Sắp xếp giá giảm dần
        8.Sắp xếp số lượng giảm dần
        9. Tìm sản phẩm theo hãng
        10. Hiện thị danh sách
        0.Thoát
        `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                editProduct();
                break;
            case 3:
                removeProduct();
                break;
            case 4:
                findByName();
                break;
            case 5:
                finByPriceRange();
                break;
            case 6:
                sortUpPrice();
                break;
            case 7:
                sortDiscounts();
                break;
            case 8:
                decreasingAmount();
                break;
            case 9:
                findByTheFirm();
                break;
            case 10:
                displayProduct();
                break;
        }
    } while (choice !== 0);
}
main();

function addProduct() {
    let name = input.question('Enter name : ');
    let price = +input.question('Enter price : ');
    let amount = +input.question('Enter amount : ');
    let theFirm = input.question('Enter theFirm : ');
    let product = new Product(name,price,amount,theFirm)
    productManage.add(product);
    main();
}

function editProduct() {
    console.log(`----------------Chọn sản phẩm muốn sửa-----------------`);
    console.log(productManage.displayAll())
    let id = input.question('Enter name edit : ');
    console.log(`-----------------Form sua thong tin---------------------`)
    let name = input.question('Enter name : ');
    let price = +input.question('Enter price : ');
    let amount = +input.question('Enter amount : ');
    let theFirm = input.question('Enter theFirm : ');
    let product = new Product(name,price,amount,theFirm)
    productManage.edit(id,product)
}

function removeProduct() {
    console.log(`----------------Chọn sản phẩm muốn xoa-----------------`);
    console.log(productManage.displayAll())
    let id = input.question('Enter name room : ');
    productManage.remove(id)
}

function displayProduct() {
    console.log(productManage.displayAll())
}

function findByName() {
    let id = input.question('Enter name room : ');
    console.log(productManage.findByName(id))
}

function sortUpPrice() {
    console.log(productManage.sortUpPrice())
}

function sortDiscounts() {
    console.log(productManage.sortDiscounts())
}

function decreasingAmount() {
    console.log(productManage.decreasingAmount())
}

function finByPriceRange() {
    let low = +input.question('Enter low room : ');
    let high = +input.question('Enter high room : ');
    console.log(productManage.finByPriceRange(low,high)
    )
}

function findByTheFirm() {
    let theFirm = input.question('Enter the Firm room : ');
    console.log(productManage.findByTheFirm(theFirm))
}