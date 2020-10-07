package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.model.Login;

@Repository
public class LoginDaoImpl implements LoginDao {
	
	@PersistenceContext
	private EntityManager entityManager;


	@Override
	@Transactional
	public boolean persistLogin(Login login) {
		
		entityManager.persist(login);
		return true ;
	}

	@Override
	public Login getLoginByUsername(String username) {
		return entityManager.find(Login.class,username);
		
		
	}

	@Override
	@Transactional
	public int deleteLoginByUsername(String username) {
		String sqlQuery="Delete from Login l where l.username=:name"; //name is a bind parameter
		Query query=entityManager.createQuery(sqlQuery);
		query.setParameter("name",username).executeUpdate();
		return 1;
		
	}

	@Override
	@Transactional
	public Login updateLogin(Login login) {
		login=entityManager.merge(login);
		return login;
	}

	@Override
	public List<Login> getAllLogins() {
		// TODO Auto-generated method stub
		return null;
	}

	

}
