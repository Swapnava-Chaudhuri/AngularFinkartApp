import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';
import { Emi } from '../classes/emi';
import { Purchase } from '../classes/purchase';
import {SuperEmi} from '../classes/SuperEmi';

@Component({
  selector: 'app-emitable',
  templateUrl: './emitable.component.html',
  styleUrls: ['./emitable.component.css']
})
export class EmitableComponent implements OnInit {
customer:Customer;
monthName:string[];
paidEmis:SuperEmi[];
pendingEmis:SuperEmi[];
superEmi:SuperEmi;
purchase:Purchase;
emi:Emi;
  constructor() {
    this.paidEmis=[];
    this.pendingEmis=[];
    this.monthName=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.superEmi=new SuperEmi();
  }

  ngOnInit(): void {
    
    this.customer=JSON.parse(localStorage.getItem("currentCustomer"));
    //alert(JSON.stringify(this.customer));
    for(this.purchase of this.customer.purchases){
      //alert(JSON.stringify(this.purchase))
      for(this.emi of this.purchase.emis){
        //alert(JSON.stringify(new Date(this.emi.dateOfPayment).getMonth()))
        this.emi.dateOfPayment=new Date(this.emi.dateOfPayment);
        this.superEmi.emiId=this.emi.emiId;
        this.superEmi.monthOfPayment=this.monthName[this.emi.dateOfPayment.getMonth()];
        this.superEmi.productName=this.purchase.product.productName;
        this.superEmi.purchaseId=this.purchase.purchaseId;
        this.superEmi.emiAmount=this.purchase.emiAmount;
       // alert(JSON.stringify( this.superEmi))
        if(this.emi.paid==true)
        {
          //alert(JSON.stringify( this.superEmi))
         this.paidEmis.push(this.superEmi);
         //alert(JSON.stringify( this.paidEmis))
        }
        else
        {this.pendingEmis.push(this.superEmi);}
        this.superEmi=new SuperEmi();
      }
      
    }
    //alert(JSON.stringify( this.paidEmis))
  }

}
