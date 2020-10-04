import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import {Registration} from '../classes/Registration';
import { FinkartService } from '../finkart.service';
import { Login } from '../classes/Login';


@Component({
  selector: 'app-registeration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm:FormGroup;
  submitted:boolean=false;
  invalidRegistration:boolean=false;
  registration:Registration;
  login:Login;

  constructor(private fb:FormBuilder, private router: Router,private finkartService:FinkartService) {
    this.registration=new Registration();
    this.login=new Login();
    this.registration.status='deactivated';
    this.login.type='user';
    this.registration.cardType='platinum';
    this.registration.bankName='Allahabad Bank';
   }

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      name:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$') ]],
      phoneNo:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      username:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(10) ]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', [Validators.required, Validators.minLength(8)]],
      dob:['', Validators.required],
      address:['', Validators.required],
     
     savingsAccount:['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
     ifsc:['',Validators.required],
    
     aadhar:['',Validators.required], 
     pan:['',Validators.required]
     
     
    },
    // {validator: this.confirmedValidator('password', 'confirmPassword')}
    );
  }
  onSubmit(){
    alert("registered")
    this.submitted=true;

    this.login.password=this.registrationForm.controls.password.value;
    this.login.username=this.registrationForm.controls.username.value;

    this.registration.username=this.registrationForm.controls.username.value;
    this.registration.aadhar=this.registrationForm.controls.aadhar.value;
    this.registration.dob=this.registrationForm.controls.dob.value;
    //alert(JSON.stringify(this.registration.dob));
    // this.registration.dob=this.registration.dob.substr(6,4)+"-"+this.registration.dob.substr(3,2)+"-"
    //                       +this.registration.dob.substr(0,2);
    this.registration.email=this.registrationForm.controls.email.value;
    this.registration.phoneNo=this.registrationForm.controls.phoneNo.value;
    this.registration.address=this.registrationForm.controls.address.value;
    this.registration.name=this.registrationForm.controls.name.value;
    this.registration.savingsAccount=this.registrationForm.controls.savingsAccount.value;
    this.registration.pan=this.registrationForm.controls.pan.value;
    this.registration.ifsc=this.registrationForm.controls.ifsc.value;
    //alert(JSON.stringify(this.registration));
    //alert(JSON.stringify(this.login));
    this.finkartService.insertLogin(this.login).subscribe();
    this.finkartService.insertRegistration(this.registration).subscribe();
    this.router.navigate(['/home']);
    
  }

  
  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value != matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
 
changeTypeBank(event:any){
  this.registration.bankName=event.target.value;
}
changeTypeCard(event:any){
  this.registration.cardType=event.target.value;
}

}
