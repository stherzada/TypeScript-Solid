import { type } from "os";
import { Discount } from "./interfaces/discount";
import { Product } from "./interfaces/product";

export class ShoppingCartS {
    private readonly _items: Product[] = [];
    constructor(private readonly discount: Discount) {}

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

    totalWithDicount(): number {
        const result = this.discount.calculate(this.total());

        if (typeof result === "number") return result;
        return this.total();
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    clear(): void {
        console.log("Shopping cart has been cleaned :)");
        this._items.length = 0;
    }
}
