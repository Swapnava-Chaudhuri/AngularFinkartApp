package com.lti.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
@Component
@Scope(scopeName="prototype")
@Entity
@Table(name="login_table")
public class Login {
@Id
@Column(name="username")
private String username;
@Column(name="passowrd")
private String password;
@Column(name="type")
private String type;
@Override
public String toString() {
	return "Login [username=" + username + ", password=" + password + ", type=" + type + "]";
}
public Login() {
	super();
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public Login(String username, String password, String type) {
	super();
	this.username = username;
	this.password = password;
	this.type = type;
}
}
