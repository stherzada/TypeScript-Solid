import { CustomerOrder } from "./interfaces/customer-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { OrderStatus } from "./interfaces/order-status";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";

export class Order {
    private _orderStatus: OrderStatus = "open";
    constructor(
        private readonly cart: ShoppingCartProtocol,
        private readonly message: MessagingProtocol,
        private readonly persistency: PersistencyProtocol,
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
            "Client is",
            this.customer.getName(),
            this.customer.getIDM(),
        );
    }
}
