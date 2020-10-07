package com.lti.service;

import java.util.List;

import com.lti.model.Registration;

public interface AdminService {
	public List<Registration> fetchAllRegistration();
	public boolean updateRegistration(Registration registration);
	public boolean deleteRegistrationByUsername(String username);
}
