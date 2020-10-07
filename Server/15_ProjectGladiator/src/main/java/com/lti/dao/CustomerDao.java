package com.lti.dao;

import java.util.List;

import com.lti.model.Customer;

public interface CustomerDao {
	
	public boolean persistCustomer(Customer customer);
	public Customer getCustomerByUsername(String username);
	public int deleteCustomerByUsername(String username);//extra
	public Customer updateCustomer(Customer customer);//extra
	public List<Customer> getAllCustomers();
}
