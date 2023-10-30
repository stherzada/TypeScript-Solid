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
            `Seu pedido com total de ${this.total()} foi recebido.`,
        );
        this.saveOrder();
        this.clear();
    }
    isEmpty(): boolean {
        return this._items.length === 0;
    }

    sendMessage(msg: string): void {
        console.log("Mensagem enviada:", msg);
    }

    saveOrder(): void {
        console.log("Pedido salvo com sucesso...");
    }

    clear(): void {
        console.log("Carrinho de compras foi limpo :)");
        this._items.length = 0;
    }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: "Apple", price: 2.99 });
shoppingCart.addItem({ name: "Banana", price: 0.99 });
shoppingCart.addItem({ name: "Orange", price: 5.99 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
