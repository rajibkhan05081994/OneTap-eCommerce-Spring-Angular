package com.example.demo;

import java.util.ArrayList;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {
	List<Product> plist = new ArrayList<>();

	@RequestMapping(value = "/all")
	public List<Product> allproducts() {
		ProductDA d = new ProductDA();
		plist = d.allProduct();
		return plist;
	}

	@GetMapping(value = "/product/{id}")
	public Product getProductsById(@PathVariable("id") int id) {
		ProductDA d = new ProductDA();
		return d.productstById(id);

	}

	@PostMapping(value = "/addProduct")
	public void add(@RequestBody Product p) {
		ProductDA d = new ProductDA();
		d.add(p);
	}

	@PostMapping(value = "/updateProduct")
	public void update(@RequestBody Product p) {
		ProductDA d = new ProductDA();
		d.update(p);
	}

	@PostMapping(value = "/deleteProduct")
	public void delete(@RequestBody Product p) {
		ProductDA d = new ProductDA();
		d.delete(p);
	}

}
