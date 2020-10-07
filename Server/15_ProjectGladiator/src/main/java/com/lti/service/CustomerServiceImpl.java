package com.lti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.CardDao;
import com.lti.dao.CustomerDao;
import com.lti.dao.EmiDao;
import com.lti.dao.ProductDao;
import com.lti.dao.PurchaseDao;
import com.lti.model.CardType;
import com.lti.model.Customer;
import com.lti.model.Emi;
import com.lti.model.Product;
import com.lti.model.Purchase;
@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerDao dao=null;
	@Autowired
	private ProductDao dao1=null;
	
	@Autowired
	private EmiDao dao2=null;
	@Autowired
	private CardDao cardDao;
	@Autowired
	private PurchaseDao purchaseDao;
	
	
	@Override
	public Customer fetchCustomer(String username) {
	
		return dao.getCustomerByUsername(username);
	}
	

	@Override
	public List<Product> fetchAllProducts(){
	
		return dao1.getAllProducts();
	}

	@Override
	@Transactional
	public boolean updateEmisOneByOne(List<Emi> emis) 
	{
		for(Emi emi:emis)
		{
			dao2.updateEmi(emi);
		}
		return true;
	}

	@Override
	@Transactional
	public boolean updateCustomer(Customer customer) {
		// TODO Auto-generated method stub
		customer=dao.updateCustomer(customer);
		return (customer!=null)?true:false;
	}


	@Override
	public CardType fetchCardTypeByCardNumber(String cardNumber) {
		return cardDao.getCardByCardNumber(cardNumber).getCardType();
		
	}


	@Override
	public Product fetchProductByPurchaseId(int purchaseId) {
		List<Purchase> purchases=purchaseDao.getAllPurchases();
		for (Purchase purchase : purchases) {
			if (purchase.getPurchaseId()==purchaseId) {
				return purchase.getProduct();
			}
		}
		return null;
	}

}