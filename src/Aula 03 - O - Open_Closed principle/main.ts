import { ShoppingCartS } from "./entities/CartShopping";
import { Messaging } from "./entities/services/messaging";
import { Order } from "./entities/order-status";
import { Persistency } from "./entities/services/persistency";
import { Products } from "./entities/product";
import { FiftyPercentDiscount } from "./entities/interfaces/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCartS(fiftyPercentDiscount);
const message = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, message, persistency);

shoppingCart.addItem(new Products("Apple", 2.99));
shoppingCart.addItem(new Products("Banana", 2.99));
shoppingCart.addItem(new Products("Orange", 5.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
