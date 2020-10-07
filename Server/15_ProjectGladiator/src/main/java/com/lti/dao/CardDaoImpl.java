package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.model.Card;

@Repository
public class CardDaoImpl implements CardDao {
	@PersistenceContext
	private EntityManager entityManager;


	@Override
	@Transactional
	public boolean persistCard(Card card) {
		entityManager.persist(card);
		return true ;
	}

	@Override
	public Card getCardByCardNumber(String cardNumber) {
		//System.out.println(cardNumber);
		return entityManager.find(Card.class,cardNumber);
	}

	@Override
	@Transactional
	public int deleteCardByCardNumber(String cardNumber) {
		String sqlQuery="Delete from Card c where c.cardNumber=:num"; //name is a bind parameter
		Query query=entityManager.createQuery(sqlQuery);
		query.setParameter("num",cardNumber).executeUpdate();
		return 1;
	}

	@Override
	@Transactional
	public Card updateCard(Card card) {
		card=entityManager.merge(card);
		return card;
	}

	@Override
	public List<Card> getAllCards() {
		// TODO Auto-generated method stub
		return null;
	}

}
