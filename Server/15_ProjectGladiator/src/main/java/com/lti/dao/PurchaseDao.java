package com.lti.dao;

import java.util.List;

import com.lti.model.Purchase;

public interface PurchaseDao {
	
	public boolean persistPurchase(Purchase purchase);
	public List<Purchase> getPurchasesByUsername(String username);
	public int deletePurchasesByUsername(String username);//extra
	public Purchase updatePurchase(Purchase purchase);//extra
	public List<Purchase> getAllPurchases();//extra
}
