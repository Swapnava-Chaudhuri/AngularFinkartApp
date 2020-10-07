package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.model.Product;

@Repository
public class ProductDaoImpl implements ProductDao {
	
	@PersistenceContext
	private EntityManager entityManager;


	@Override
	@Transactional
	public boolean persistProduct(Product product) {
		entityManager.persist(product);
		return true ;
	}

	@Override
	public Product getProductByProductId(int productId) {
		return entityManager.find(Product.class,productId);
	}

	@Override
	@Transactional
	public int deleteProductByProductId(int productId) {
		String sqlQuery="Delete from Product p where p.productId=:id"; //name is a bind parameter
		Query query=entityManager.createQuery(sqlQuery);
		query.setParameter("id",productId).executeUpdate();
		return 1;
	}

	@Override
	@Transactional
	public Product updateProduct(Product product) {
		product=entityManager.merge(product);
		return product;
	}

	@Override
	public List<Product> getAllProducts() {
		String sqlQuery="Select p from Product p order by p.productId";
		TypedQuery<Product>query=entityManager.createQuery(sqlQuery,Product.class);
		List<Product>list = query.getResultList();
		return list;
	}

}
