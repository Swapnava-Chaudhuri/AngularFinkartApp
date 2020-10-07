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
emi2:SuperEmi;
emi3:SuperEmi;
i:number;
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
        this.superEmi.monthOfPayment=this.monthName[this.emi.dateOfPayment.getMonth()]+","+this.emi.dateOfPayment.getFullYear();
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
  sortId(){
    //alert("sortid")
    this.paidEmis = this.paidEmis.sort((n1,n2) => {
      if (n1.emiId > n2.emiId) {
          return 1;
      }
  
      if (n1.emiId < n2.emiId) {
          return -1;
      }
  
      return 0;
  });
  }
  sortMonths(){
    //alert("sort months")
  //   this.paidEmis = this.paidEmis.sort((n1,n2) => {
  //     //alert(n1.monthOfPayment.substr(0,n1.monthOfPayment.length-5))
  //     if((Number(n1.monthOfPayment.substr(-4))==Number(n2.monthOfPayment.substr(-4)))&&(this.monthName.indexOf(n1.monthOfPayment.substr(0,n1.monthOfPayment.length-5)) == this.monthName.indexOf(n2.monthOfPayment.substr(0,n2.monthOfPayment.length-5))))
  //      { return 0;}
  //     if(Number(n1.monthOfPayment.substr(-4))<=Number(n2.monthOfPayment.substr(-4)))
  //     {
  //       if ((this.monthName.indexOf(n1.monthOfPayment.substr(0,n1.monthOfPayment.length-5)))<(this.monthName.indexOf(n2.monthOfPayment.substr(0,n2.monthOfPayment.length-5)))) {
  //       //alert(Number(n1.monthOfPayment.substr(-4)))  
  //        return -1;
  //       }
  //       else 
  //       return 1;
  //     }
  
  //     else {
  //         return 1;
  //     }
  // });
  this.paidEmis = this.paidEmis.sort((n1,n2) => {
    if (this.monthName.indexOf(n1.monthOfPayment.substr(0,n1.monthOfPayment.length-5)) > this.monthName.indexOf(n2.monthOfPayment.substr(0,n2.monthOfPayment.length-5))) {
        return 1;
    }

    if (this.monthName.indexOf(n1.monthOfPayment.substr(0,n1.monthOfPayment.length-5)) < this.monthName.indexOf(n2.monthOfPayment.substr(0,n2.monthOfPayment.length-5))) {
        return -1;
    }

    return 0;
});
this.paidEmis = this.paidEmis.sort((n1,n2) => {
  if (Number(n1.monthOfPayment.substr(-4))>Number(n2.monthOfPayment.substr(-4))) {
      return 1;
  }

  if (Number(n1.monthOfPayment.substr(-4))<Number(n2.monthOfPayment.substr(-4))) {
      return -1;
  }

  return 0;
});


  }
  sortId2(){
    //alert("sortid2")
    // for(this.emi2 of this.pendingEmis){
    //   if(this.emi2 of )
    // }
    this.pendingEmis = this.pendingEmis.sort((n1,n2) => {
      if (n1.emiId > n2.emiId) {
          return 1;
      }
  
      if (n1.emiId < n2.emiId) {
          return -1;
      }
  
      return 0;
  });
  }
  sortMonths2(){
    //alert("sort months2")
  //   this.pendingEmis = this.pendingEmis.sort((n1,n2) => {
  //     //alert(n1.monthOfPayment.substr(0,n1.monthOfPayment.length-5))
  //     if(
  //         (Number(n1.monthOfPayment.substr(-4))>=Number(n2.monthOfPayment.substr(-4)))
  //       &&
  //       (
  //         (this.monthName.indexOf(n1.monthOfPayment.substr(0,n1.monthOfPayment.length-5)))>(this.monthName.indexOf(n2.monthOfPayment.substr(0,n2.monthOfPayment.length-5)))       
  //       )
  //     )//comparing years
  //        return 1;     
  //     if (
  //       (Number(n1.monthOfPayment.substr(-4))<=Number(n2.monthOfPayment.substr(-4)))
  //     &&
  //     (
  //       (this.monthName.indexOf(n1.monthOfPayment.substr(0,n1.monthOfPayment.length-5)))<(this.monthName.indexOf(n2.monthOfPayment.substr(0,n2.monthOfPayment.length-5)))       
  //     )
  //     )
  //       return -1;

  //       return 0;
      
  // });
      //alert("sort months")

////////////////////////////////////////////
        // this.pendingEmis = this.pendingEmis.sort((n1,n2) => {
        //   if (Number(n1.monthOfPayment.substr(-4))<Number(n2.monthOfPayment.substr(-4))) {
        //       return 1;
        //   }

        //   if (Number(n1.monthOfPayment.substr(-4))>Number(n2.monthOfPayment.substr(-4))) {
        //       return -1;
        //   }

        //   return 0;
        // });
      ////////////////////////////////////////////////////
      this.pendingEmis = this.pendingEmis.sort((n1,n2) => {
        if (this.monthName.indexOf(n1.monthOfPayment.substr(0,n1.monthOfPayment.length-5)) > this.monthName.indexOf(n2.monthOfPayment.substr(0,n2.monthOfPayment.length-5))) {
            return 1;
        }
    
        if (this.monthName.indexOf(n1.monthOfPayment.substr(0,n1.monthOfPayment.length-5)) < this.monthName.indexOf(n2.monthOfPayment.substr(0,n2.monthOfPayment.length-5))) {
            return -1;
        }
    
        return 0;
    });

////////////////////////////////////////////
this.pendingEmis = this.pendingEmis.sort((n1,n2) => {
  if (Number(n1.monthOfPayment.substr(-4))>Number(n2.monthOfPayment.substr(-4))) {
      return 1;
  }

  if (Number(n1.monthOfPayment.substr(-4))<Number(n2.monthOfPayment.substr(-4))) {
      return -1;
  }

  return 0;
});


  }
sortPurchaseId(){
  this.paidEmis = this.paidEmis.sort((n1,n2) => {
    if (n1.purchaseId > n2.purchaseId) {
        return 1;
    }

    if (n1.purchaseId < n2.purchaseId) {
        return -1;
    }

    return 0;
});
}
sortPurchaseId2(){
  this.pendingEmis = this.pendingEmis.sort((n1,n2) => {
    if (n1.purchaseId > n2.purchaseId) {
        return 1;
    }

    if (n1.purchaseId < n2.purchaseId) {
        return -1;
    }

    return 0;
});
}
}
