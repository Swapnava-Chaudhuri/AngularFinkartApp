package com.lti.controller;

import java.util.List;


import javax.mail.MessagingException;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.CardTypeDTO;
import com.lti.dto.ProductDTO;
import com.lti.misc.CibilScoreGenerator;
import com.lti.model.CardType;
import com.lti.model.Customer;
import com.lti.model.Login;
import com.lti.model.Product;
import com.lti.model.Registration;
import com.lti.service.AdminService;
import com.lti.service.HomeService;
import com.lti.service.MiscellaneousService;
import com.lti.service.CustomerService;

@RestController
@Controller("projectController")
@CrossOrigin
public class ProjectController {
	
	@Autowired
	private HomeService homeService;
	@Autowired
	private AdminService adminService;
	@Autowired
	private MiscellaneousService miscellaneousService;
	@Autowired
	private CustomerService customerService;
	@Autowired
	private ProductDTO productDTO;
	@Autowired
	private CardTypeDTO cardTypeDTO;
	//Hi
	/*
	 * Home Module
	 * */
	
	@GetMapping(path = "cardtypelist")
	public List<CardType> home() {
		List<CardType> cardTypes=homeService.fetchCardTypes();
		return cardTypes;
	}
	@PostMapping(path="login")
	public String login(@RequestBody Login login){
		return homeService.login(login);
	}
	@PostMapping(path="insertlogin")
	public boolean insertlogin(@RequestBody Login login){ 
		return homeService.insertLogin(login);
	}
	@PostMapping(path="updatelogin")
	public boolean updatelogin(@RequestBody Login login){
		return homeService.updateLogin(login);
	}
	@PostMapping(path="register")
	public boolean register(@RequestBody Registration registration){
		registration.setCibilScore(CibilScoreGenerator.cibilScoreGenerator());
		return homeService.register(registration);
	}
	
	/*
	 * Miscellaneous Module
	 * */
	
	@GetMapping(path="otp/{email}")
	public int getOtp(@PathVariable("email") String email) throws MessagingException
	{		int otp=(int)(Math.random()*10000);
			String phoneNo=homeService.getPhoneNoByEmail(email);
			if(phoneNo!=null){
			miscellaneousService.sendOtpEmail(email,otp);
			miscellaneousService.sendOtpSms(phoneNo,otp);
			}
			return otp;
	}
	/*
	 * Customer Module
	 * */
	
	@GetMapping(path="dashboard/{username}")
	public Customer getCustomer(@PathVariable("username") String username){
		//Customer customer= customerService.fetchCustomer(username);
		//CardType cardType=customerService.fetchCardTypeByCardNumber(customer.getCard().getCardNumber());
		//customer.getCard().setCardType(cardType);
		//return customer;
		return customerService.fetchCustomer(username);
	}
	@GetMapping(path="dashboard/1/{cardnumber}")
	public CardTypeDTO getCardTypeByCardNumber(@PathVariable("cardnumber") String cardNumber)
	{
		CardType cardType=customerService.fetchCardTypeByCardNumber(cardNumber);
		BeanUtils.copyProperties(cardType, cardTypeDTO);
		return cardTypeDTO;
	}
	@GetMapping(path="products")
	public List<Product> getProducts(){
		return customerService.fetchAllProducts();
	}
	/*@PutMapping(path="payemis")
	public boolean updateEmis(@RequestBody List<Emi> emis){
		return customerService.updateEmisOneByOne(emis);
	}*/
	@PutMapping(path="update")
	public boolean  updateCustomer(@RequestBody Customer customer){
		return customerService.updateCustomer(customer);
	}
	@GetMapping(path="purchase/{purchaseid}")
	public ProductDTO getProductByPurchaseId(@PathVariable("purchaseid") int purchaseId)
	{
		Product product=customerService.fetchProductByPurchaseId(purchaseId);
		BeanUtils.copyProperties(product, productDTO);
		return productDTO;
	}
	/*@GetMapping(path="otp/{email}")
	public void sendInvoice(@PathVariable("email") String email)
	{
		//TO:DO implement if possible
	}*/
	
	/*
	 * Admin module
	 * */
	
	@GetMapping(path="admin")
	public List<Registration> getAllRegistrations()
	{
		return adminService.fetchAllRegistration();
	}
	@PutMapping(path="admin/updateregistration")
	public boolean updateRegistration(@RequestBody Registration registration){
		return adminService.updateRegistration(registration);
	}
	@DeleteMapping(path="admin/delete/{username}")
	public boolean deleteRegistration(@PathVariable("username") String username)
	{
		return adminService.deleteRegistrationByUsername(username);
	}


}
