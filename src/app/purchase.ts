import { Customer } from "./customer";
import { Emi } from "./emi";
import { Product } from "./product";

export class Purchase{
    purchaseId:number;
    emiAmount:number;
    months:number;
    dateOfPurchase:Date;
    emis:Emi;
    customer:Customer;
    product:Product;


    constructor(purchaseId:number,emiAmount:number,months:number,dateOfPurchase:Date,
        emis:Emi,customer:Customer,product:Product){
            this.purchaseId=purchaseId;
            this.emiAmount=emiAmount;
            this.months=months;
            this.dateOfPurchase=dateOfPurchase;
            this.emis=emis;
            this.customer=customer;
            this.product=product;
        }
}