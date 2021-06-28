import { Customer } from "./customer.model";
import { Product } from "./product.model";

export interface CreatePocket {
    id?: string,
    pocketName: string,
    pocketQty:number,
    customer:Customer,
    product:Product
}
