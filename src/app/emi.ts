import {Purchase} from './purchase';
export class Emi{

    emiId:number;
    isPaid:boolean;
    dateOfPayment:Date;
    balance:number;
    purchase:Purchase;

    constructor(emiId:number,isPaid:boolean,dateOfPayment:Date,balance:number,
                purchase:Purchase){
                    this.emiId=emiId;
                    this.isPaid=isPaid;
                    this.dateOfPayment=dateOfPayment;
                    this.balance=balance;
                    this.purchase=purchase;
                }

}