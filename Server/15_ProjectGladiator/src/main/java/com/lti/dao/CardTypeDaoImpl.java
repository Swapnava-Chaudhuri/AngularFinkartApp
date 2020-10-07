package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.model.CardType;


@Repository
public class CardTypeDaoImpl implements CardTypeDao {
	
	@PersistenceContext
	private EntityManager entityManager;


	@Override
	@Transactional
	public boolean persistCardType(CardType cardType) {
		entityManager.persist(cardType);
		return true ;
	}

	@Override
	public CardType getCardTypeByCardTypeName(String cardType) {
		return entityManager.find(CardType.class,cardType);
	}

	@Override
	@Transactional
	public int deleteCardTypeByCardTypeName(String cardType) {
		String sqlQuery="Delete from CardType ct where ct.cardType=:cardType"; 
		Query query=entityManager.createQuery(sqlQuery);
		query.setParameter("cardType",cardType).executeUpdate();
		return 1;
	}
	

	@Override
	@Transactional
	public CardType updateCardType(CardType cardType) {
		cardType=entityManager.merge(cardType);
		return cardType;
	}

	@Override
	public List<CardType> getAllCardTypes() {
		String sqlQuery="Select ct from CardType ct";
		TypedQuery<CardType>query=entityManager.createQuery(sqlQuery,CardType.class);
		List<CardType>list = query.getResultList();
		return list;
	}

}
