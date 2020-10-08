import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from '../classes/card';
import { CardType } from '../classes/cardType';
import { Customer } from '../classes/customer';
import { Login } from '../classes/Login';
import { Registration } from '../classes/Registration';
import { FinkartService } from '../finkart.service';

@Component({
  selector: 'app-editregistration',
  templateUrl: './editregistration.component.html',
  styleUrls: ['./editregistration.component.css']
})
export class EditregistrationComponent implements OnInit {
  editForm:FormGroup;
  submitted:boolean=false;
  invalidRegistration:boolean=false;
  registration:Registration;
  login:Login;
  customer:Customer;
  cardNo:string;
  i:number;
  random:number;
  cardType:CardType;
  cardTypes:CardType[];
  dateSetter:Date;
  constructor(private fb:FormBuilder, private router: Router,private finkartService:FinkartService) {
    this.registration=new Registration();
    this.customer=new Customer();
    this.customer.card=new Card();
    this.customer.card.cardType=new CardType();
    this.dateSetter=new Date();
   }

  ngOnInit(): void {

    this.editForm=this.fb.group({
  //   name:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$') ]],
  //   phoneNo:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  //   email:['',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  //   username:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(10) ]],
  //   dob:['', Validators.required],
  //   address:['', Validators.required],
   
  //  savingsAccount:['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
  //  ifsc:['',Validators.required],
  
  //  aadhar:['',Validators.required], 
  //  pan:['',Validators.required],
  name:['', [Validators.required,Validators.pattern('^[a-zA-Z][ a-zA-Z]+$') ]],
    phoneNo:['', [Validators.required, Validators.pattern("[0-9]{10}$")]],
    email:['',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    username:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'),Validators.minLength(3) ]],
    password:['', [Validators.required, Validators.minLength(8)]],
    confirmPassword:['', [Validators.required, Validators.minLength(8)]],
    
    address:['', Validators.required],
    dob:['', Validators.required],
   savingsAccount:['',[Validators.required,Validators.pattern("[0-9]{12}$"),Validators.minLength(12),Validators.maxLength(12)]],
   ifsc:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]],
  
   aadhar:['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]], 
   pan:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]],
   comments:['',Validators.required]
   
   
  },
  // {validator: this.confirmedValidator('password', 'confirmPassword')}
  );
    this.registration= JSON.parse( localStorage.getItem("moreUserDetails"));
    this.editForm.controls.name.setValue(this.registration.name);
    this.editForm.controls.phoneNo.setValue(this.registration.phoneNo);
    this.editForm.controls.email.setValue(this.registration.email);
    this.editForm.controls.username.setValue(this.registration.username);
    this.editForm.controls.dob.setValue(this.registration.dob);
    this.editForm.controls.address.setValue(this.registration.address);
    //this.editForm.controls.bankName.setValue(this.registration.bankName);
    this.editForm.controls.savingsAccount.setValue(this.registration.savingsAccount);
    this.editForm.controls.ifsc.setValue(this.registration.ifsc);
    this.editForm.controls.aadhar.setValue(this.registration.aadhar);
    this.editForm.controls.pan.setValue(this.registration.pan);
    this.editForm.controls.comments.setValue(this.registration.comments);

  }

  onSubmit(){
    alert("Registration Details Updated")
    this.submitted=true;

    //this.login.password=this.editForm.controls.password.value;
    //this.login.username=this.editForm.controls.username.value;

    //this.registration.username=this.editForm.controls.username.value;
    this.registration.aadhar=this.editForm.controls.aadhar.value;
    this.registration.dob=this.editForm.controls.dob.value;
    //alert(JSON.stringify(this.registration.dob));
    // this.registration.dob=this.registration.dob.substr(6,4)+"-"+this.registration.dob.substr(3,2)+"-"
    //                       +this.registration.dob.substr(0,2);
    this.registration.email=this.editForm.controls.email.value;
    this.registration.phoneNo=this.editForm.controls.phoneNo.value;
    this.registration.address=this.editForm.controls.address.value;
    this.registration.name=this.editForm.controls.name.value;
    this.registration.savingsAccount=this.editForm.controls.savingsAccount.value;
    this.registration.pan=this.editForm.controls.pan.value;
    this.registration.ifsc=this.editForm.controls.ifsc.value;
    this.registration.comments=this.editForm.controls.comments.value;
    //alert(JSON.stringify(this.registration));
    //alert(JSON.stringify(this.login));
    //this.finkartService.insertLogin(this.login).subscribe();
    this.finkartService.updateRegistration(this.registration).subscribe(data=>{
      this.finkartService.getCustomer(this.registration.username).subscribe(data=>{
        if(data==null)
        {
          this.customer.username=this.registration.username;
          this.customer.dob=this.registration.dob;
          this.customer.email=this.registration.email;
          this.customer.phoneNo=this.registration.phoneNo;
          this.customer.address=this.registration.address;
          this.customer.name=this.registration.name;
          this.customer.savingsAccount=this.registration.savingsAccount;
          this.customer.aadhar=this.registration.aadhar;
          this.customer.pan=this.registration.pan;
          this.customer.bankName=this.registration.bankName;
          this.customer.ifsc=this.registration.ifsc;
          this.customer.card.cardNumber=this.generateCard();
          //alert( this.customer.card.cardNumber)
          this.finkartService.getAllCards().subscribe(data2=>{
            this.cardTypes=data2;
            for(this.cardType of this.cardTypes){//
              {if(this.cardType.cardType==this.registration.cardType)
              break;}
            }
            //alert(JSON.stringify(this.cardType))
            this.customer.card.cardType.cardType=this.cardType.cardType;
            this.customer.card.cardType.creditLimit=this.cardType.creditLimit;
            this.customer.card.cardType.joiningFees=this.cardType.joiningFees;
            //alert(JSON.stringify(this.customer.card.cardType))
            this.customer.card.remainingLimit=this.customer.card.cardType.creditLimit;
            this.customer.card.usedLimit=0;
            this.customer.card.validTill=new Date(this.dateSetter.getFullYear()+5,this.dateSetter.getMonth(),this.dateSetter.getDate());
           // alert(JSON.stringify(this.customer))
            this.finkartService.updateCustomer(this.customer).subscribe(data=>{this.router.navigate(['/admin'])});
          })
        }
      });
    });
  }


onDelete(){
  alert("User Deleted")
  this.finkartService.deleteRegistration(this.registration).subscribe(data=>{this.router.navigate(['/admin'])});
  
}



generateCard():string{
 
  for(this.i=0;this.i<4;this.i++){
    this.random= Math.floor(Math.random() * (9999 - 1000) + 1000);
    //alert(this.random);
    if(this.random>1000)
    {
      this.cardNo=this.cardNo+'-'+this.random;
    }
    else
    {
      this.i--;
    }
  }
  //alert(this.cardNo)
  return this.cardNo.substr(10,19);
}

















  toggleEditable(event:any){
    if(event.target.checked)
    this.registration.status='accepted';
    else
    this.registration.status='deactivated'; 
    //alert(this.registration.status);
  }


  changeTypeBank(event:any){
    this.registration.bankName=event.target.value;
  }
  changeTypeCard(event:any){
    this.registration.cardType=event.target.value;
  }

}
