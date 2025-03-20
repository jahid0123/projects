package com.jmjbrothers.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import com.jmjbrothers.model.Product;

@Repository
public class ProductRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	private SimpleJdbcInsert simpleJdbcInsert;

	// RowMapper to map ResultSet to Product object
	private static final class ProductRowMapper implements RowMapper<Product> {
		@Override
		public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
			Product product = new Product();
			product.setId(rs.getLong("id"));
			product.setName(rs.getString("name"));
			product.setPrice(rs.getDouble("price"));
			product.setQuantity(rs.getInt("quantity"));
			product.setModel(rs.getString("model"));
			return product;
		}
	}

	// Constructor to initialize SimpleJdbcInsert
	public ProductRepository() {
		// Initialize SimpleJdbcInsert for inserting into the "product" table
		this.simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate).withTableName("product")
				.usingGeneratedKeyColumns("id");
	}

	// CRUD Operations
	public List<Product> findAll() {
		String sql = "SELECT * FROM product";
		return jdbcTemplate.query(sql, new ProductRowMapper());
	}

	public Product findById(Long id) {
		String sql = "SELECT * FROM product WHERE id = ?";
		return jdbcTemplate.queryForObject(sql, new ProductRowMapper(), id);
	}

	// Save operation using SimpleJdbcInsert to automatically get generated keys
	public Product saveAndRetrieve(Product product) {
		// Prepare parameters for insert
		Map<String, Object> parameters = Map.of("name", product.getName(), "price", product.getPrice(), "quantity",
				product.getQuantity(), "model", product.getModel());

		// Insert the product and retrieve the generated ID
		Number generatedId = simpleJdbcInsert.executeAndReturnKey(parameters);

		// Set the generated ID in the product object
		product.setId(generatedId.longValue());

		return product; // Return the product with its generated ID
	}

	public void update(Product product) {
		String sql = "UPDATE product SET name = ?, price = ?, quantity = ?, model = ? WHERE id = ?";
		jdbcTemplate.update(sql, product.getName(), product.getPrice(), product.getQuantity(), product.getModel(),
				product.getId());
	}

	public Product updateAndRetrieve(Product product) {
		String sql = "UPDATE product SET name = ?, price = ?, quantity = ?, model = ? WHERE id = ?";

		int rowsAffected = jdbcTemplate.update(sql, product.getName(), product.getPrice(), product.getQuantity(),
				product.getModel(), product.getId());

		if (rowsAffected > 0) {
			return findById(product.getId()); // Retrieve updated product
		} else {
			throw new RuntimeException("Failed to update product with ID: " + product.getId());
		}
	}

	public Product updateAndRetrieveSelective(Product product) {
		StringBuilder sql = new StringBuilder("UPDATE product SET ");
		List<Object> params = new ArrayList<>();

		if (product.getName() != null) {
			sql.append("name = ?, ");
			params.add(product.getName());
		}
		if (product.getPrice() != 0) {
			sql.append("price = ?, ");
			params.add(product.getPrice());
		}
		if (product.getQuantity() != 0) {
			sql.append("quantity = ?, ");
			params.add(product.getQuantity());
		}
		if (product.getModel() != null) {
			sql.append("model = ?, ");
			params.add(product.getModel());
		}

		// Remove the last comma and space
		if (params.isEmpty()) {
			throw new RuntimeException("No fields provided for update.");
		}
		sql.setLength(sql.length() - 2);

		// Add WHERE condition
		sql.append(" WHERE id = ?");
		params.add(product.getId());

		int rowsAffected = jdbcTemplate.update(sql.toString(), params.toArray());

		if (rowsAffected > 0) {
			return findById(product.getId()); // Fetch updated product
		} else {
			throw new RuntimeException("Failed to update product with ID: " + product.getId());
		}
	}

	public void deleteById(Long id) {
		String sql = "DELETE FROM product WHERE id = ?";
		jdbcTemplate.update(sql, id);
	}
}
