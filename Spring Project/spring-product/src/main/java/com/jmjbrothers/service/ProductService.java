package com.jmjbrothers.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jmjbrothers.model.Product;
import com.jmjbrothers.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	public Product getProductById(Long id) {
		return productRepository.findById(id);
	}

	public void saveProduct(Product product) {
		productRepository.saveAndRetrieve(product);
	}

	public Product saveAndRetrieve(Product product) {
		return productRepository.saveAndRetrieve(product);
	}

	public void updateProduct(Product product) {
		productRepository.update(product);
	}

	public Product updateProductAndRetrieve(Product product) {
		return productRepository.updateAndRetrieve(product);
	}

	public void deleteProduct(Long id) {
		productRepository.deleteById(id);
	}
}