import { Emi } from "./emi";
import { Product } from "./product";

export class Purchase{
    purchaseId:number;
    emiAmount:number;
    months:number;
    dateOfPurchase:Date;
    emis:Emi[];
    product:Product;


    // constructor(purchaseId:number,emiAmount:number,months:number,dateOfPurchase:Date,
    //     emis:Emi[],product:Product){
    //         this.purchaseId=purchaseId;
    //         this.emiAmount=emiAmount;
    //         this.months=months;
    //         this.dateOfPurchase=dateOfPurchase;
    //         this.emis=emis;
    //         this.product=product;
    //     }
}