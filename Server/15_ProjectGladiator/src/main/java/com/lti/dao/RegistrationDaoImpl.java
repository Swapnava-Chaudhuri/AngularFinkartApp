package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;


import com.lti.model.Registration;

@Repository
public class RegistrationDaoImpl implements RegistrationDao {
	
	@PersistenceContext
	private EntityManager entityManager;


	@Override
	@Transactional
	public boolean persistRegistration(Registration registration) {
		entityManager.persist(registration);
		return true ;
	}

	@Override
	public Registration getRegistrationByUsername(String username) {
		return entityManager.find(Registration.class,username);
	}

	@Override
	@Transactional
	public boolean deleteRegistrationByUsername(String username) {
		String sqlQuery="Delete from Registration r where r.username=:name"; //name is a bind parameter
		Query query=entityManager.createQuery(sqlQuery);
		query.setParameter("name",username).executeUpdate();
		return true;
	}

	@Override
	@Transactional
	public boolean updateRegistration(Registration registration) {
		entityManager.merge(registration);
		return true;
	}

	@Override
	public List<Registration> getAllRegistrations() {
		String sqlQuery="Select r from  Registration r";
		TypedQuery<Registration>query=entityManager.createQuery(sqlQuery,Registration.class);
		List<Registration>list = query.getResultList();
		return list;
	}

	@Override
		public String getPhoneNumberByEmail(String email) {
			String sqlQuery="Select r from Registration r where r.email=:email"; 
			Query query=entityManager.createQuery(sqlQuery);
			@SuppressWarnings("unchecked")
			List<Registration> list=query.setParameter("email", email).getResultList();
			return list.get(0).getPhoneNo();
	}

}
