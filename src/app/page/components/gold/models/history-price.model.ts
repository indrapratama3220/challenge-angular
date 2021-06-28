import { Product } from "./product.model";

export interface HistoryPrice {
    historyDate: string,
    priceBuy: number,
    priceSell: number,
    product:Product

}