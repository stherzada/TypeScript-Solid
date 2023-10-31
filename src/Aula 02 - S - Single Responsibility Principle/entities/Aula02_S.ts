import { Product } from "./interfaces/product";

export class ShoppingCartS {
    private readonly _items: Product[] = [];

    addItem(item: Product): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get items(): Readonly<Product[]> {
        return this._items;
    }

    total(): number {
        return +this._items
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2);
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    clear(): void {
        console.log("Shopping cart has been cleaned :)");
        this._items.length = 0;
    }
}
