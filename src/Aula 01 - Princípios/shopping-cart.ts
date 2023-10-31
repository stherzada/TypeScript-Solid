type Product = { name: string; price: number };
type OrderStatus = "open" | "closed";

export class ShoppingCart {
    private readonly _items: Product[] = [];
    private _orderStatus: OrderStatus = "open";

    addItem(item: Product): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get items(): Readonly<Product[]> {
        return this._items;
    }

    get orderStatus(): Readonly<Product[]> {
        return this._items;
    }

    total(): number {
        return +this._items
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2);
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log("Your shopping cart is empty");
            return;
        }
        this._orderStatus = "closed";
        this.sendMessage(
            `Your order with total ${this.total()} it was received.`,
        );
        this.saveOrder();
        this.clear();
    }
    isEmpty(): boolean {
        return this._items.length === 0;
    }

    sendMessage(msg: string): void {
        console.log("Message sent:", msg);
    }

    saveOrder(): void {
        console.log("Order saved successfully.");
    }

    clear(): void {
        console.log("Shopping cart has been cleaned :)");
        this._items.length = 0;
    }
}
