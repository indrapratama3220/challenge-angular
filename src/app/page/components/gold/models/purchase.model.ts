import { PurchaseDetails } from "./purchase-details.model";

export interface ReqBodyPurchase {
    purchaseType:number,
    purchaseDetails:[
            {
            quantityInGram:number
            pocket:{
                id:string  
            }
        }
    ]
}

    


