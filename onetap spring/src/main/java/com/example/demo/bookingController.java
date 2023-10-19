package com.example.demo;

import java.util.List;
import java.util.ArrayList;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@org.springframework.stereotype.Service

public class bookingController {
	@Autowired
	bookingDA d;
	@PostMapping(value = "/addapp")
	public void add(@RequestBody bookin p) {
		d.add(p);
	}
	
	List<bookin> plist = new ArrayList<>();
	@RequestMapping(value = "/allbookins")
	public List<bookin> allbookins() {
		plist = d.allbookins();
		return plist;
	}
	@PostMapping(value = "/deleteApp")
	public void delete(@RequestBody bookin p) {
//		ServiceDA d = new ServiceDA();
		d.delete(p);
	}
	
}
