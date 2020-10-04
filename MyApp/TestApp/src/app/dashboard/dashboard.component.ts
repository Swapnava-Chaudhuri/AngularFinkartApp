import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../classes/card';
import { CardType } from '../classes/cardType';
import { Customer } from '../classes/customer';
import { Product } from '../classes/product';
import { Purchase } from '../classes/purchase';
import { FinkartService } from '../finkart.service';
import {forkJoin} from 'rxjs';
import { Emi } from '../classes/emi';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customer:Customer;
  purchase:Purchase;
  purchaseProducts:Observable<Product>[];
  i:number;
  emiPayable:number;
  emi:Emi;
  paypurchases:Purchase[];
  paypurchase:Purchase;
  payemis:Emi[];
  paid:boolean=false;
  
  constructor(private finkartService:FinkartService,private router:Router) { 
    this.customer=new Customer();
    this.customer.card=new Card();
    this.customer.card.cardType=new CardType();
    this.purchaseProducts=[];
    this.i=0;
    this.emiPayable=0;
    this.payemis=[];
    this.paypurchases=[];
  }

  ngOnInit(): void {

    this.finkartService.getCustomer(localStorage.getItem("username")).subscribe(data=>{
      this.customer=data;
      this.finkartService.getCardTypeByCardNumber(this.customer.card.cardNumber).subscribe(data2=>{
        this.customer.card.cardType=data2;
        localStorage.setItem("currentCustomer",JSON.stringify(this.customer));
        for(this.purchase of this.customer.purchases)
        {
          this.purchaseProducts.push(this.finkartService.getProductByPurchaseId(this.purchase.purchaseId))
        }
        forkJoin(this.purchaseProducts).subscribe(dataArray=>{

          for(this.purchase of this.customer.purchases)
          {
            this.customer.purchases[this.i].product=dataArray[this.i];
            this.i++;
          }
        // alert(JSON.stringify (this.customer));
        localStorage.setItem("currentCustomer",JSON.stringify(this.customer));
          for(this.purchase of this.customer.purchases){
            //alert(JSON.stringify(this.purchase))
            for(this.emi of this.purchase.emis){
              //alert(JSON.stringify(new Date(this.emi.dateOfPayment).getMonth()))
              this.emi.dateOfPayment=new Date(this.emi.dateOfPayment);
              if((this.emi.dateOfPayment.getMonth()==new Date().getMonth())&&(this.emi.dateOfPayment.getFullYear()==new Date().getFullYear())&&(this.emi.paid==false))
              {//alert(new Date().getMonth())
                this.emiPayable=this.emiPayable+this.purchase.emiAmount;
               // alert(this.emiPayable)
              }
            }
          }

        })
      }
      )
    })
  }


  onPay(){
    if(this.emiPayable!=0){
    alert("pay")
    for(this.purchase of this.customer.purchases){
      //alert(JSON.stringify(this.purchase))
      this.payemis=[];
      for(this.emi of this.purchase.emis){
        //alert(JSON.stringify(new Date(this.emi.dateOfPayment).getMonth()))
        this.emi.dateOfPayment=new Date(this.emi.dateOfPayment);
        if((this.emi.dateOfPayment.getMonth()==new Date().getMonth())&&(this.emi.dateOfPayment.getFullYear()==new Date().getFullYear())&&(this.emi.paid==false))
        {//alert(new Date().getMonth())
          this.emi.paid=true;
         // alert(this.emiPayable)
        }
        this.payemis.push(this.emi);
        this.purchase.emis=this.payemis;
      }
      this.paypurchases.push(this.purchase);
    }
    this.customer.purchases=this.paypurchases;
    this.customer.card.usedLimit=this.customer.card.usedLimit-this.emiPayable;
    this.customer.card.remainingLimit=this.customer.card.cardType.creditLimit-this.customer.card.usedLimit;
    alert(JSON.stringify(this.customer));
    this.emiPayable=0;
    this.paid=true;
    this.finkartService.updateCustomer(this.customer).subscribe(data5=>{ localStorage.setItem("currentCustomer",JSON.stringify(this.customer));});
    
  }}
 

}
