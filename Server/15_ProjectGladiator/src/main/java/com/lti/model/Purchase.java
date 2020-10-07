package com.lti.model;



import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
@Component
@Scope(scopeName="prototype")
@Entity
@Table(name="Purchase_Table")
@SequenceGenerator(name="purchase_seq",sequenceName="purchase_seq",initialValue=100,allocationSize=1)
public class Purchase {
@Id
@Column(name="purchase_id")
@GeneratedValue(generator="purchase_seq",strategy=GenerationType.SEQUENCE)
private int purchaseId;
@Column(name="emi_amount")
private double emiAmount;
@Column(name="months")
private int months;

@Column(name="date_of_purchase")
@Temporal(TemporalType.DATE)
private Date dateOfPurchase;

@Autowired
@OneToMany(mappedBy="purchase",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
private Set<Emi> emis;

@Autowired
@ManyToOne
@JoinColumn(name="username")
private Customer customer;

@Autowired
@ManyToOne
@JoinColumn(name="product_id")
private Product product;
//auto generated values and mapping  attributes are not present in all constructors throughout the project

public Purchase() {
	super();
}







public Purchase(double emiAmount, int months, Date dateOfPurchase) {
	super();
	this.emiAmount = emiAmount;
	this.months = months;
	this.dateOfPurchase = dateOfPurchase;
}







public int getPurchaseId() {
	return purchaseId;
}

public void setPurchaseId(int purchaseId) {
	this.purchaseId = purchaseId;
}

public double getEmiAmount() {
	return emiAmount;
}

public void setEmiAmount(double emiAmount) {
	this.emiAmount = emiAmount;
}

public int getMonths() {
	return months;
}

public void setMonths(int months) {
	this.months = months;
}

public Date getDateOfPurchase() {
	return dateOfPurchase;
}

public void setDateOfPurchase(Date dateOfPurchase) {
	this.dateOfPurchase = dateOfPurchase;
}
@JsonManagedReference
public Set<Emi> getEmis() {
	return emis;
}

public void setEmis(Set<Emi> emis) {
	this.emis = emis;
}
@JsonBackReference(value="customer_purchase")
public Customer getCustomer() {
	return customer;
}

public void setCustomer(Customer customer) {
	this.customer = customer;
}
@JsonBackReference(value="product_purchase")
public Product getProduct() {
	return product;
}

public void setProduct(Product product) {
	this.product = product;
}

@Override
public String toString() {
	return "Purchase [purchaseId=" + purchaseId + ", emiAmount=" + emiAmount + ", months=" + months
			+ ", dateOfPurchase=" + dateOfPurchase + ", emis=" + emis + ", customer=" + customer + ", product="
			+ product + "]";
}


}