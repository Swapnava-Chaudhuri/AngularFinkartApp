package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;


import com.lti.model.Purchase;

@Repository
public class PurchaseDaoImpl implements PurchaseDao {
	
	@PersistenceContext
	private EntityManager entityManager;


	@Override
	@Transactional
	public boolean persistPurchase(Purchase purchase) {
		entityManager.persist(purchase);
		return true ;
	}

	@Override
	public List<Purchase> getPurchasesByUsername(String username) {
		String sqlQuery="Select p from Purchase p where p.username=:name order by p.purchaseId"; //name is a bind parameter
		TypedQuery<Purchase>query=entityManager.createQuery(sqlQuery,Purchase.class);
		List<Purchase>list = query.getResultList();
		return list;
	}

	@Override
	@Transactional
	public int deletePurchasesByUsername(String username) {
		String sqlQuery="Delete from Purchase p where p.username=:name"; //name is a bind parameter
		Query query=entityManager.createQuery(sqlQuery);
		query.setParameter("name",username).executeUpdate();
		return 1;
	}

	@Override
	@Transactional
	public Purchase updatePurchase(Purchase purchase) {
		purchase=entityManager.merge(purchase);
		return purchase;
	}




	@Override
	public List<Purchase> getAllPurchases() {
		String sqlQuery="Select p from Purchase p order by p.purchaseId";
		TypedQuery<Purchase>query=entityManager.createQuery(sqlQuery,Purchase.class);
		List<Purchase>list = query.getResultList();
		//System.out.println(list);
		return list;
	}

}
