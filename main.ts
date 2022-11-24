import {ProductManage} from "./productManage";
import {Product} from "./product";

let productManage = new ProductManage;
let product = new Product('AAA',40,1,'ABC')
let product1 = new Product('BBB',23,21,'ss')
let product2 = new Product('CCC',22,41,'ae')
let product3 = new Product('ABC',31,11,'qw')


productManage.add(product)
productManage.add(product1)
productManage.add(product2)
productManage.add(product3)

// console.log(productManage.findByName('a'))
// console.log(productManage.finByPriceRange(10,30))
// console.log(productManage.sortUpPrice())
// console.log(productManage.sortDiscounts())
// console.log(productManage.decreasingAmount())
console.log(productManage.findByTheFirm('a'))
