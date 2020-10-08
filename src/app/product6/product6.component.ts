import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../classes/customer';
import { Emi } from '../classes/emi';
import { Product } from '../classes/product';
import { Purchase } from '../classes/purchase';
import { FinkartService } from '../finkart.service';

@Component({
  selector: 'app-product6',
  templateUrl: './product6.component.html',
  styleUrls: ['./product6.component.css']
})
export class Product6Component implements OnInit {
  customer:Customer;
  products:Product[];
  product:Product;
  months:number;
  purchase:Purchase;
  emis:Emi[];
  emi:Emi;
  i:number;
  constructor(private finkartService:FinkartService,private router:Router) {
    this.customer=new Customer();
    this.months=3;
    this.product=new Product();
    this.purchase=new Purchase();
    this.emis=[];
    this.emi=new Emi();
   }

  ngOnInit(): void {
    this.customer=JSON.parse(localStorage.getItem("currentCustomer"));
   // alert(JSON.stringify(this.customer))
    this.finkartService.getAllProducts().subscribe(data=>{
      this.products=data;
      this.product.productName=this.products[5].productName;//change this only
      this.product.productId=this.products[5].productId;//change this only
      this.product.productRate=this.products[5].productRate;//change this only
    });
    
  }

  onPurchase(){
    this.i=0;
    
   // alert('purchase')
   if( confirm("Are you sure you want to purchase? "))
   {
     //alert("purchased")
     if((this.customer.card.usedLimit+(this.product.productRate))<=this.customer.card.cardType.creditLimit)
     {
       this.customer.card.usedLimit=this.customer.card.usedLimit+this.product.productRate;
       this.customer.card.remainingLimit=this.customer.card.cardType.creditLimit-this.customer.card.usedLimit;
       
       for(this.i=0;this.i<this.months;this.i++)
       {
        let date:Date=new Date();
        this.emi.dateOfPayment=new Date(date.setMonth(date.getMonth()+this.i+1));
       // alert(JSON.stringify(this.emi.dateOfPayment));
        this.emi.balance=this.product.productRate-((this.product.productRate/this.months)*this.i);
        this.emi.paid=false;
        this.emis.push(this.emi);
        this.emi=new Emi();
       }
       this.purchase.emiAmount=this.product.productRate/this.months;
       this.purchase.dateOfPurchase=new Date();
       this.purchase.emis=this.emis;
       this.purchase.months=this.months;
       this.purchase.product=this.product;
       this.customer.purchases.push(this.purchase);
      // alert(JSON.stringify(this.customer));
       this.emis=[];
       this.purchase=new Purchase();
       this.finkartService.updateCustomer(this.customer).subscribe(data21=>{
        this.router.navigate(['dashboard'])
      });
     }
     else
     alert("this transaction will exceed your credit limit")
    }
  }

  changeMonths(event:any){
    this.months=event.target.value;
    //alert(this.months)
  }

}
