package com.lti.dao;

import java.util.List;

import com.lti.model.Registration;

public interface RegistrationDao {
	
	public boolean persistRegistration(Registration registration);
	public Registration getRegistrationByUsername(String username);
	public boolean deleteRegistrationByUsername(String username);
	public boolean updateRegistration(Registration registration);
	public List<Registration> getAllRegistrations();
	public String getPhoneNumberByEmail(String email);
}
