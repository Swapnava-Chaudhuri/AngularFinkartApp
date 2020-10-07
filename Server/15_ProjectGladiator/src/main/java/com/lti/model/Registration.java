package com.lti.model;




import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
@Component
@Scope(scopeName="prototype")
@Entity
@Table(name="registration_table")
public class Registration {
	
/*	The following attributes are common to customer table.
	This data redundancy is required to keep a track of declined records*/
@Id
@Column(name="username")
private String username;
@Column(name="dob")
@Temporal(TemporalType.DATE)
private Date dob;
@Column(name="email")
private String email;
@Column(name="phone_no")
private String phoneNo;
@Column(name="address")
private String address;
@Column(name="name")
private String name;
@Column(name="savings_account")
private String savingsAccount;
@Column(name="aadhar")
private String aadhar;
@Column(name="pan")
private String pan;
@Column(name="Bank_Name")
private String bankName;
@Column(name="ifsc")
private String ifsc;

//The following attributes are not present in customer table
@Column(name="card_type") 
private String cardType;
@Column(name="Status")
private String status;
@Column(name="cibil_score") 
private int cibilScore;
@Column(name="comments")	
private String comments;
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public Date getDob() {
	return dob;
}
public void setDob(Date dob) {
	this.dob = dob;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPhoneNo() {
	return phoneNo;
}
public void setPhoneNo(String phoneNo) {
	this.phoneNo = phoneNo;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getSavingsAccount() {
	return savingsAccount;
}
public void setSavingsAccount(String savingsAccount) {
	this.savingsAccount = savingsAccount;
}
public String getAadhar() {
	return aadhar;
}
public void setAadhar(String aadhar) {
	this.aadhar = aadhar;
}
public String getPan() {
	return pan;
}
public void setPan(String pan) {
	this.pan = pan;
}
public String getBankName() {
	return bankName;
}
public void setBankName(String bankName) {
	this.bankName = bankName;
}
public String getIfsc() {
	return ifsc;
}
public void setIfsc(String ifsc) {
	this.ifsc = ifsc;
}
public String getCardType() {
	return cardType;
}
public void setCardType(String cardType) {
	this.cardType = cardType;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public int getCibilScore() {
	return cibilScore;
}
public void setCibilScore(int cibilScore) {
	this.cibilScore = cibilScore;
}
public String getComments() {
	return comments;
}
public void setComments(String comments) {
	this.comments = comments;
}
@Override
public String toString() {
	return "Registration [username=" + username + ", dob=" + dob + ", email=" + email + ", phoneNo=" + phoneNo
			+ ", address=" + address + ", name=" + name + ", savingsAccount=" + savingsAccount + ", aadhar=" + aadhar
			+ ", pan=" + pan + ", bankName=" + bankName + ", ifsc=" + ifsc + ", cardType=" + cardType + ", status="
			+ status + ", cibilScore=" + cibilScore + ", comments=" + comments + "]";
}
public Registration(String username, Date dob, String email, String phoneNo, String address, String name,
		String savingsAccount, String aadhar, String pan, String bankName, String ifsc, String cardType, String status,
		int cibilScore, String comments) {
	super();
	this.username = username;
	this.dob = dob;
	this.email = email;
	this.phoneNo = phoneNo;
	this.address = address;
	this.name = name;
	this.savingsAccount = savingsAccount;
	this.aadhar = aadhar;
	this.pan = pan;
	this.bankName = bankName;
	this.ifsc = ifsc;
	this.cardType = cardType;
	this.status = status;
	this.cibilScore = cibilScore;
	this.comments = comments;
}
public Registration() {
	super();
}



}
