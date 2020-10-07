package com.lti.misc;

import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class MailOtp {
	
	public static void sendEmail(String recipient, String m) throws MessagingException
	{
		
		
		Properties properties=new Properties();
		
		properties.put("mail.smtp.auth", "true");
		
		properties.put("mail.smtp.starttls.enable", "true");
		
		properties.put("mail.smtp.host", "smtp.gmail.com");
		
		properties.put("mail.smtp.port", "587");
		
		String myEmail="projectgladiator0@gmail.com";
		String password="ProjectGladiator_2020";
		
		Session session=Session.getInstance(properties, new Authenticator() {
			
			@Override
			protected PasswordAuthentication getPasswordAuthentication()
			{
				return new PasswordAuthentication(myEmail, password);
			}
			
		});
		
		Message message=prepareMessage(session,myEmail,recipient,m);
		
		Transport.send(message);
		
		
	}

	private static Message prepareMessage(Session session, String myEmail, String recipient, String m)
	{
		
		Message message =new MimeMessage(session);
		
		
			try {
				message.setFrom(new InternetAddress(myEmail));
				message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
				message.setSubject("OTP from Numero Finkart");
				message.setText("A password change request has been made for your Account.\nPlease contact us immediately at projectgladiator0@gmail.com if not initiated by you.\n"+m);
				return message;
			} 
			catch (Exception e) {
				
				Logger.getLogger(MailOtp.class.getName()).log(Level.SEVERE,null,e);
			}
			return null;
		
	}

}