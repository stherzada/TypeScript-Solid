import { ShoppingCartS } from "./CartShopping";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";

export class Order {
    private _orderStatus: OrderStatus = "open";
    constructor(
        private readonly cart: ShoppingCartS,
        private readonly message: Messaging,
        private readonly persistency: Persistency,
        private readonly customer: CustomerOrder,
    ) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log("Your shopping cart is empty");
            return;
        }
        this._orderStatus = "closed";
        this.message.sendMessage(
            `Your order with total ${this.cart.totalWithDicount()} it was received.`,
        );
        this.persistency.saveOrder();
        this.cart.clear();

        console.log(
            "o cliente é",
            this.customer.getName(),
            this.customer.getIDM(),
        );
    }
}
