/*INTERFACE SEGREGATION PRINCIPLE os clientes não devem ser forçados a depender de interfaces que não são utilizam*/

import { ShoppingCartS } from "./entities/CartShopping";
import { Messaging } from "./entities/services/messaging";
import { Order } from "./entities/order-status";
import { Persistency } from "./entities/services/persistency";
import { Products } from "./entities/product";
import {
    FiftyPercentDiscount,
    NoDiscount,
    TenPercentDiscount,
} from "./entities/interfaces/discount";
import { IndividualCustomer } from "./entities/customer";

// const tenPercentDiscount = new TenPercentDiscount();
// const fiftyPercentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCartS(noDiscount);
const message = new Messaging();
const persistency = new Persistency();

const IndividualCustomer = new IndividualCustomer(
    "Sther",
    "ALVES",
    "111.111.111.11",
);
const order = new Order(shoppingCart, message, persistency, customer);

shoppingCart.addItem(new Products("Apple", 2.99));
shoppingCart.addItem(new Products("Banana", 2.99));
shoppingCart.addItem(new Products("Orange", 5.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
