package com.lti.service;

import javax.mail.MessagingException;

import com.lti.model.Purchase;

public interface MiscellaneousService {
	 public int sendOtpEmail(String email,int otp) throws MessagingException;
	 public int sendinvoice(Purchase purchase);
	 public int sendOtpSms(String phoneNo,int otp);
}
