package com.lti.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;

import com.lti.dao.RegistrationDao;
import com.lti.model.Registration;
@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private RegistrationDao dao=null;

	@Override
	public List<Registration> fetchAllRegistration() {
		return dao.getAllRegistrations();
		
	}

	@Override
	@Transactional(propagation=Propagation.REQUIRED)
	public boolean updateRegistration(Registration registration) {
       
		return dao.updateRegistration(registration);
	}

	@Override
	@Transactional(propagation=Propagation.REQUIRED)
	public boolean deleteRegistrationByUsername(String username) {
        return dao.deleteRegistrationByUsername(username);
		
		
		
	}

}
