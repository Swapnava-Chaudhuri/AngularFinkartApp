import {Card} from './card';
import { Purchase} from './purchase';

export class Customer{
    username:string;
    dob:Date;
    email:string;
    phoneNo:string;
    address:string;
    name:string;
    savingsAccount:string;
    adhar:string;
    pan:string;
    bankName:string;
    ifsc:string;
     card:Card;
     purchases:Purchase;

     constructor(username:string,dob:Date,email:string,phoneNo:string,address:string
        ,name:string,savingsAccount:string,adhar:string,pan:string,bankName:string,ifsc:string,card:Card,purchases:Purchase){
            this.username=username;
            this.dob=dob;
            this.email=email;
            this.phoneNo=phoneNo;
            this.address=address;
            this.name=name;
            this.savingsAccount=savingsAccount;
            this.adhar=adhar;
            this.pan=pan;
            this.bankName=bankName;
            this.ifsc=ifsc;
            this.card=card;
            this.purchases=purchases;


        }

}