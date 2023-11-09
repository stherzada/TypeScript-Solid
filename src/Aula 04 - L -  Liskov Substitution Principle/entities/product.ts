import { Product } from "./interfaces/product";

export class Products implements Product {
    constructor(
        public name: string,
        public price: number,
    ) {}
}
