package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.model.Emi;

@Repository
public class EmiDaoImpl implements EmiDao {
	
	@PersistenceContext
	private EntityManager entityManager;


	@Override
	@Transactional
	public boolean persistEmi(Emi emiDetails) {
		entityManager.persist(emiDetails);
		return true ;
	}

	@Override
	public Emi getEmiByEmiId(int emiId) {
		return entityManager.find(Emi.class,emiId);
	}

	@Override
	@Transactional
	public int deleteEmiByEmiId(int emiId) {
		String sqlQuery="Delete from Emi e where e.emiId=:id"; //name is a bind parameter
		Query query=entityManager.createQuery(sqlQuery);
		query.setParameter("id",emiId).executeUpdate();
		return 1;
		
	}

	@Override
	@Transactional
	public Emi updateEmi(Emi emiDetails) {
		emiDetails=entityManager.merge(emiDetails);
		return emiDetails;
	}

	@Override
	public List<Emi> getAllEmis() {
		String sqlQuery="Select e from  Emi e order by e.emiId";
		TypedQuery<Emi>query=entityManager.createQuery(sqlQuery,Emi.class);
		List<Emi>list = query.getResultList();
		return list;
	}

	@Override
	public List<Emi> getAllEmisByPurchaseId(int purchaseId) {
		String sqlQuery="Select e from  Emi e where purchaseId:=pid order by e.emiId";
		TypedQuery<Emi> query=entityManager.createQuery(sqlQuery,Emi.class); 
		query.setParameter("pid",purchaseId);
		
		List<Emi>list = query.getResultList();
		return list;
	}

}
