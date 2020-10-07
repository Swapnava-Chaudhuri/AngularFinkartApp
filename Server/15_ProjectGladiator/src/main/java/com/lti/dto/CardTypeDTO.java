package com.lti.dto;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(scopeName="prototype")
public class CardTypeDTO {
	private String cardType;
	private double joiningFees;
	private double creditLimit;
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
	
}
