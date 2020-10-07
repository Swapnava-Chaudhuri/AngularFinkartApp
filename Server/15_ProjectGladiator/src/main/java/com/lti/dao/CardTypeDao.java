package com.lti.dao;

import java.util.List;

import com.lti.model.CardType;

public interface CardTypeDao {

	public boolean persistCardType(CardType cardType);//extra
	public CardType getCardTypeByCardTypeName(String cardType);
	public int deleteCardTypeByCardTypeName(String cardType);//extra
	public CardType updateCardType(CardType cardType);//extra
	public List<CardType> getAllCardTypes();
}
