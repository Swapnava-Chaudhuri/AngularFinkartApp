package com.lti.service;

import java.util.List;

import com.lti.model.CardType;
import com.lti.model.Login;
import com.lti.model.Registration;

public interface HomeService {

	public List<CardType> fetchCardTypes();
	//will return "admin" or "absent" or "user"
	public String login(Login login);
	// will insert registration into dao
	public boolean register(Registration registration);
	//will get phone number for otp
	public String getPhoneNoByEmail(String email);
	public boolean insertLogin(Login login);
	public boolean updateLogin(Login login);
}
