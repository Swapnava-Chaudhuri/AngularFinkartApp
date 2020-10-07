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
@Table(name="card_type_table")
public class CardType {
@Id
@Column(name="card_type")
private String cardType;
@Column(name="joining_fees")
private double joiningFees;
@Column(name="credit_limit")
private double creditLimit;
@Autowired
@JsonManagedReference(value="card_cardType")
@OneToMany(mappedBy="cardType",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
private Set<Card> cards;

public CardType(String cardType, double joiningFees, double creditLimit) {
	super();
	this.cardType = cardType;
	this.joiningFees = joiningFees;
	this.creditLimit = creditLimit;
}

public CardType() {
	super();
}

public String getCardType() {
	return cardType;
}

public void setCardType(String cardType) {
	this.cardType = cardType;
}

public double getJoiningFees() {
	return joiningFees;
}

public void setJoiningFees(double joiningFees) {
	this.joiningFees = joiningFees;
}

public double getCreditLimit() {
	return creditLimit;
}

public void setCreditLimit(double creditLimit) {
	this.creditLimit = creditLimit;
}

public Set<Card> getCards() {
	return cards;
}

public void setCards(Set<Card> cards) {
	this.cards = cards;
}

@Override
public String toString() {
	return "CardType [cardType=" + cardType + ", joiningFees=" + joiningFees + ", creditLimit=" + creditLimit
			+ ", cards=" + cards + "]";
}

}
