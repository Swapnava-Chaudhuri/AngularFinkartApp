package com.lti.dao;

import java.util.List;

import com.lti.model.Card;

public interface CardDao {
	
	public boolean persistCard(Card card);
	public Card getCardByCardNumber(String cardNumber);
	public int deleteCardByCardNumber(String cardNumber);
	public Card updateCard(Card card);
	public List<Card> getAllCards();//extra
}
