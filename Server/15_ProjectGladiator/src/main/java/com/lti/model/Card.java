
package com.lti.model;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Component
@Scope(scopeName="prototype")
@Entity
@Table(name="card_table")
public class Card {
	@Id
	@Column(name="card_number")
	private String cardNumber; //pk
	
	@Column(name="valid_till")
	@Temporal(TemporalType.DATE)
	private Date validTill;
	@Column(name="used_Limit")
	private double usedLimit;
	@Column(name="remaining_limit")
	private double remainingLimit;
	
	@Autowired
	@JsonBackReference(value="card_cardType")
	@JoinColumn(name="card_type")
	@ManyToOne
	private CardType cardType;
	
	@Autowired
	@JsonBackReference
	@OneToOne(mappedBy="card")
	private Customer customer;

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public Date getValidTill() {
		return validTill;
	}

	public void setValidTill(Date validTill) {
		this.validTill = validTill;
	}

	public double getUsedLimit() {
		return usedLimit;
	}

	public void setUsedLimit(double usedLimit) {
		this.usedLimit = usedLimit;
	}

	public double getRemainingLimit() {
		return remainingLimit;
	}

	public void setRemainingLimit(double remainingLimit) {
		this.remainingLimit = remainingLimit;
	}
	
	public CardType getCardType() {
		return cardType;
	}

	public void setCardType(CardType cardType) {
		this.cardType = cardType;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Card(String cardNumber, Date validTill, double usedLimit, double remainingLimit) {
		super();
		this.cardNumber = cardNumber;
		this.validTill = validTill;
		this.usedLimit = usedLimit;
		this.remainingLimit = remainingLimit;
	}

	public Card() {
		super();
	}
	
	
	
}