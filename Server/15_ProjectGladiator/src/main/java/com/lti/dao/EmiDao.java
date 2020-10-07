package com.lti.dao;

import java.util.List;

import com.lti.model.Emi;

public interface EmiDao {

	public boolean persistEmi(Emi emiDetails);
	public Emi getEmiByEmiId(int emiId);//extra
	public int deleteEmiByEmiId(int emiId);//extra
	public Emi updateEmi(Emi emiDetails);
	public List<Emi> getAllEmis();//extra
	public List<Emi> getAllEmisByPurchaseId(int purchaseId);
}
