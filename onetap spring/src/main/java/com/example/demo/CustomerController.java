package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;
 


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CustomerController {
	@Autowired
	CustomerDA d;
	
	@Autowired
	Customer customer;
	
	@PostMapping(value = "/save")
	public void Save(@RequestBody Customer s) {
		d.Insert(s);
	}
	
	@PostMapping(value = "/update")
	public void update(@RequestBody Customer s) {
		d.update(s);
	}
	@PostMapping(value = "/customerLogin")
	public Customer checkLogin(@RequestBody Customer s) {
		return d.check(s);
	}
	@GetMapping(value="/customer/{email}")
	public Customer getCustomerByEmail(@PathVariable("email")String email) {
		return customer=d.customerByEmail(email);
	}
	
}
