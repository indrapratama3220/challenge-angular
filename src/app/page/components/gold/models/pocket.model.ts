import { Product } from '../models/product.model';
import { Customer } from '../models/customer.model';


export interface Pocket {
    id?: string,
    pocketName?: string,
    pocketQty?: number,
    product?: Product,
    customer?:Customer
}