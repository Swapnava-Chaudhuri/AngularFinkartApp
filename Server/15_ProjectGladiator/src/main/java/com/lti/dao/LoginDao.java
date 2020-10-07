package com.lti.dao;



import java.util.List;

import com.lti.model.Login;

public interface LoginDao {
	
	public boolean persistLogin(Login login);
	public Login getLoginByUsername(String username);
	public int deleteLoginByUsername(String username);
	public Login updateLogin(Login login);
	public List<Login> getAllLogins();//extra
}
