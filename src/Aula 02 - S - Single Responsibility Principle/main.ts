import { ShoppingCartS } from "./entities/Aula02_S";
import { Messaging } from "./entities/services/messaging";
import { Order } from "./entities/order-status";
import { Persistency } from "./entities/services/persistency";
import { Products } from "./entities/product";

const shoppingCart = new ShoppingCartS();
const message = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, message, persistency);

shoppingCart.addItem(new Products("Apple", 2.99));
shoppingCart.addItem(new Products("Banana", 2.99));
shoppingCart.addItem(new Products("Orange", 5.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
