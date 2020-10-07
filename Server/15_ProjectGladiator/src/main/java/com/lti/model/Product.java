package com.lti.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonManagedReference;
@Component
@Scope(scopeName="prototype")
@Entity
@Table(name="product_table")
public class Product {
@Id
@Column(name="product_id")
private int productId;
@Column(name="product_rate")
private double productRate;
@Column(name="product_name")
private String productName;

@Autowired
@OneToMany(mappedBy="product",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
private Set<Purchase> purchases;

public int getProductId() {
	return productId;
}

public void setProductId(int productId) {
	this.productId = productId;
}

public double getProductRate() {
	return productRate;
}

public void setProductRate(double productRate) {
	this.productRate = productRate;
}

public String getProductName() {
	return productName;
}

public void setProductName(String productName) {
	this.productName = productName;
}
@JsonManagedReference(value="product_purchase")
public Set<Purchase> getPurchases() {
	return purchases;
}

public void setPurchases(Set<Purchase> purchases) {
	this.purchases = purchases;
}

public Product(int productId, double productRate, String productName) {
	super();
	this.productId = productId;
	this.productRate = productRate;
	this.productName = productName;
}

public Product() {
	super();
}

@Override
public String toString() {
	return "Product [productId=" + productId + ", productRate=" + productRate + ", productName=" + productName
			+ ", purchases=" + purchases + "]";
}

}