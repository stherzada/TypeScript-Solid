import { Product } from "./product";

export interface ShoppingCartProtocol {
    items: Readonly<Product[]>;
    addItem(item: Product): void;
    removeItem(index: number): void;
    total(): number;
    totalWithDicount(): number;
    isEmpty(): boolean;
    clear(): void;
}
