package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.model.Customer;


@Repository
public class CustomerDaoImpl implements CustomerDao {
	
	@PersistenceContext
	private EntityManager entityManager;


	@Override
	@Transactional
	public boolean persistCustomer(Customer customer) {
		entityManager.persist(customer);
		return true ;
	}

	@Override
	public Customer getCustomerByUsername(String username) {
		return entityManager.find(Customer.class,username);
	}

	@Override
	@Transactional
	public int deleteCustomerByUsername(String username) {
		String sqlQuery="Delete from Customer c where c.username=:name"; //name is a bind parameter
		Query query=entityManager.createQuery(sqlQuery);
		query.setParameter("name",username).executeUpdate();
		return 1;
	}

	@Override
	@Transactional
	public Customer updateCustomer(Customer customer) {
		customer=entityManager.merge(customer);
		return customer;
	}

	@Override
	public List<Customer> getAllCustomers() {
		String sqlQuery="Select c from Customer c";
		TypedQuery<Customer>query=entityManager.createQuery(sqlQuery,Customer.class);
		List<Customer>list = query.getResultList();
		return list;
	}

}
