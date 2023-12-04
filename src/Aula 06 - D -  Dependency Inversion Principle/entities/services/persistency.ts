import { PersistencyProtocol } from "../interfaces/persistency-protocol";

export class Persistency implements PersistencyProtocol {
    saveOrder(): void {
        console.log("Order saved successfully.");
    }
}
