package com.lti.dao;

import java.util.List;

import com.lti.model.Product;

public interface ProductDao {
	
	public boolean persistProduct(Product product);//extra
	public Product getProductByProductId(int productId);
	public int deleteProductByProductId(int productId);//extra
	public Product updateProduct(Product product);//extra
	public List<Product> getAllProducts();
}
