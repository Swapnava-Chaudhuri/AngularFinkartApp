package com.lti.model;



import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonManagedReference;
@Component
@Scope(scopeName="prototype")
@Entity
@Table(name="customer_table")
public class Customer {

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
	
	@Autowired
	@JsonManagedReference
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="card_number")
	private Card card;
	
	@Autowired
	@JsonManagedReference(value="customer_purchase")
	@OneToMany(mappedBy="customer",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	private Set<Purchase> purchases; 
	
	
	public Set<Purchase> getPurchases() {
		return purchases;
	}

	public void setPurchases(Set<Purchase> purchases) {
		this.purchases = purchases;
	}

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

	public Card getCard() {
		return card;
	}

	public void setCard(Card card) {
		this.card = card;
	}

	@Override
	public String toString() {
		return "Customer [username=" + username + ", dob=" + dob + ", email=" + email + ", phoneNo=" + phoneNo
				+ ", address=" + address + ", name=" + name + ", savingsAccount=" + savingsAccount + ", aadhar="
				+ aadhar + ", pan=" + pan + ", bankName=" + bankName + ", ifsc=" + ifsc + ", card=" + card + "]";
	}

	public Customer(String username, Date dob, String email, String phoneNo, String address, String name,
			String savingsAccount, String aadhar, String pan, String bankName, String ifsc) {
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
	}

	public Customer() {
		super();
	}
	
	
}