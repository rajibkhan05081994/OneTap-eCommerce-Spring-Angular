package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CartController {
	
	@PostMapping(value = "/addToCart")
	public void addToCart(@RequestBody Cart p) {
		CartDA d = new CartDA();
		d.addToCart(p);
	}
}
