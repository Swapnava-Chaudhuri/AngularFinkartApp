package com.lti.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Component
@Scope(scopeName="prototype")
@Entity
@Table(name="Emi")
@SequenceGenerator(name="emi_seq",sequenceName="emi_seq",initialValue=10000,allocationSize=1)
public class Emi {
	@Id
	@Column(name="emi_id")
	@GeneratedValue(generator="emi_seq",strategy=GenerationType.SEQUENCE)
	private int emiId;
	@Column(name="is_paid")
	private boolean isPaid;
	@Column(name="date_of_payment")
	@Temporal(TemporalType.DATE)
	private Date dateOfPayment;
	@Column(name="balance")
	private double balance;
	
	@Autowired
	@ManyToOne
	@JoinColumn(name="purchase_id")
	private Purchase purchase;

	public Emi() {
		super();
	}

	

	public Emi(boolean isPaid, Date dateOfPayment, double balance) {
		super();
		this.isPaid = isPaid;
		this.dateOfPayment = dateOfPayment;
		this.balance = balance;
	}



	public int getEmiId() {
		return emiId;
	}

	public void setEmiId(int emiId) {
		this.emiId = emiId;
	}

	public boolean isPaid() {
		return isPaid;
	}

	public void setPaid(boolean isPaid) {
		this.isPaid = isPaid;
	}

	public Date getDateOfPayment() {
		return dateOfPayment;
	}

	public void setDateOfPayment(Date dateOfPayment) {
		this.dateOfPayment = dateOfPayment;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}
	@JsonBackReference
	public Purchase getPurchase() {
		return purchase;
	}

	public void setPurchase(Purchase purchase) {
		this.purchase = purchase;
	}

	@Override
	public String toString() {
		return "Emi [emiId=" + emiId + ", isPaid=" + isPaid + ", dateOfPayment=" + dateOfPayment + ", balance="
				+ balance + ", purchase=" + purchase + "]";
	}
	
}
