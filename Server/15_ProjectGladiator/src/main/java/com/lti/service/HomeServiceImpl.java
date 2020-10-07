package com.lti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.CardTypeDao;
import com.lti.dao.LoginDao;
import com.lti.dao.RegistrationDao;
import com.lti.model.CardType;
import com.lti.model.Login;
import com.lti.model.Registration;
@Service
public class HomeServiceImpl implements HomeService {

	@Autowired
	private CardTypeDao cardtypedao;
	@Autowired
	private LoginDao logindao;
	@Autowired
	private RegistrationDao registrationdao;
	
	
	@Override
	public List<CardType> fetchCardTypes() {
		return cardtypedao.getAllCardTypes();
	}

	@Override
	public String login(Login login) {
		String user=login.getUsername();
		Login login2=logindao.getLoginByUsername(user);
		if(login2==null)
		return "absent";
		else if(login2.getPassword().equals(login.getPassword())&&
				login2.getType().equals(login.getType()))
		{
			return login.getType();
		}else {
			return "absent";
		}
	}

	@Override
	@Transactional
	public boolean register(Registration registration) {
		// TODO Auto-generated method stub
		registrationdao.persistRegistration(registration);	
		Registration registration1 = registrationdao.getRegistrationByUsername(registration.getUsername());
		if(registration1!=null)
		return true;
		else {
		return false;
		}
	}
	@Override
	public String getPhoneNoByEmail(String email) {
		// TODO Auto-generated method stub
		
		return registrationdao.getPhoneNumberByEmail(email);
	}

	@Override
	public boolean insertLogin(Login login) {
		logindao.persistLogin(login);
		return true;
	}

	@Override
	public boolean updateLogin(Login login) {
		logindao.updateLogin(login);
		return true;
	}

}
