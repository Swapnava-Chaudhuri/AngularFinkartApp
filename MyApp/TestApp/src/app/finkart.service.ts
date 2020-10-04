import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from './classes/Login'
import {Registration} from './classes/Registration';
import{Customer} from './classes/customer';
import { CardType } from './classes/cardType';
import { Product } from './classes/product';
@Injectable({
  providedIn: 'root'
})
export class FinkartService {

  constructor(private http:HttpClient) { }
  baseUrl:string='http://localhost:9091/FinkartApp/'
  getLogin(login:Login){
    return this.http.post(this.baseUrl+'login',login,{responseType: 'text'});
  }
  insertLogin(login:Login){
    return this.http.post(this.baseUrl+'insertlogin',login);
  }
  insertRegistration(registration:Registration){
    return this.http.post(this.baseUrl+'register',registration);
  }
  getRegistrations(){
    return this.http.get<Registration[]>(this.baseUrl+'admin');
  }
  updateRegistration(registration:Registration){
    return this.http.put(this.baseUrl+'admin/updateregistration',registration);
  }
  deleteRegistration(registration:Registration){
    return this.http.delete(this.baseUrl+'admin/delete/'+registration.username);
  }
  sendOtp(email:string){
    return this.http.get(this.baseUrl+'otp/'+email);
  }
  updateLogin(login:Login){
    return this.http.post(this.baseUrl+'updatelogin',login);
  }
  getCustomer(username:string){
    return this.http.get<Customer>(this.baseUrl+'dashboard/'+username);
  }
  updateCustomer(customer:Customer){
    return this.http.put(this.baseUrl+'update',customer);
  }
  getAllCards(){
    return this.http.get<CardType[]>(this.baseUrl+'cardtypelist');
  }
  getCardTypeByCardNumber(cardNumber:string){
    return this.http.get<CardType>(this.baseUrl+'dashboard/1/'+cardNumber);
  }
  getProductByPurchaseId(purchaseId:number){
    return this.http.get<Product>(this.baseUrl+'purchase/'+purchaseId);
  }
  getAllProducts(){
    return this.http.get<Product[]>(this.baseUrl+'products');
  }
}
