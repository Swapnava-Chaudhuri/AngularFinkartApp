import { Purchase } from "./purchase";

export class Product{
    productId:number;
    productRate:number;
    productName:string;
    purchases:Purchase;

    constructor(productId:number,productRate:number,productName:string,purchases:Purchase){
        this.productId=productId;
        this.productRate=productRate;
        this.productRate=productRate;
        this.purchases=purchases;
    }
}