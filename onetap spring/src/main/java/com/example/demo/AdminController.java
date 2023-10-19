package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdminController {
	@PostMapping(value = "/adminLogin")
	public Admin checkLogin(@RequestBody Admin s) {
		AdminDA d = new AdminDA();
		return d.check(s);
	}
}
