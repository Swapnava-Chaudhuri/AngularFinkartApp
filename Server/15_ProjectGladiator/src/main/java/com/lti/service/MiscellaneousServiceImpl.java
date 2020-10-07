package com.lti.service;

import javax.mail.MessagingException;

import org.springframework.stereotype.Service;

import com.lti.misc.MailOtp;
import com.lti.misc.SMSOtp;
import com.lti.model.Purchase;
@Service
public class MiscellaneousServiceImpl implements MiscellaneousService {

	@Override
	public int sendOtpEmail(String email, int otp) throws MessagingException {
	
		MailOtp.sendEmail(email, "your otp: "+otp);
		return 0;
	}

	@Override
	public int sendinvoice(Purchase purchase) {
		// TODO Auto-generated method stub
		return 0; 
	}

	@Override
	public int sendOtpSms(String phoneNo, int otp) {
		SMSOtp.sendSms("YxO7HDmS+uw-zAin3Z0YEp39rYIQj20HPZYLlwzeib", "OTP Change Request for Numero1 Finkart: "+otp, phoneNo);
		return 0;
	}

}
