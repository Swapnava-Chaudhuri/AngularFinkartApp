package com.lti.service;

import java.util.List;

import com.lti.model.CardType;
import com.lti.model.Customer;
import com.lti.model.Emi;
import com.lti.model.Product;

public interface CustomerService {
	public Customer fetchCustomer(String username);
	public List<Product> fetchAllProducts();
	/*implement by calling update for each emi dont update all emi as it
	belongs to only one customer*/
	public boolean updateEmisOneByOne(List<Emi> emis);
	public boolean updateCustomer(Customer customer);
	public CardType fetchCardTypeByCardNumber(String cardNumber);
	public Product fetchProductByPurchaseId(int purchaseId);
}
