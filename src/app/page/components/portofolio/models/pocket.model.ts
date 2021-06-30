import { Product } from './product.model';
import { Customer } from './customer.model';


export interface Pocket {
    id?: string,
    pocketName?: string,
    pocketQty?: number,
    product?: Product,
    customer?:Customer
}