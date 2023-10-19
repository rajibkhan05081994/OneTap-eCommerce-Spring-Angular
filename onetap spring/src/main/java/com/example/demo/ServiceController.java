package com.example.demo;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ServiceController {
	List<Service> plist = new ArrayList<>();

	@RequestMapping(value = "/allServices")
	public List<Service> allServices() {
		ServiceDA d = new ServiceDA();
		plist = d.allServices();
		return plist;
	}

	@GetMapping(value = "/service/{id}")
	public Service getServiceById(@PathVariable("id") int id) {
		ServiceDA d = new ServiceDA();
		return d.getServiceById(id);

	}

	@PostMapping(value = "/addServices")
	public void add(@RequestBody Service p) {
		ServiceDA d = new ServiceDA();
		d.add(p);
	}

	@PostMapping(value = "/updateServices")
	public void update(@RequestBody Service p) {
		ServiceDA d = new ServiceDA();
		d.update(p);
	}

	@PostMapping(value = "/deleteServices")
	public void delete(@RequestBody Service p) {
		ServiceDA d = new ServiceDA();
		d.delete(p);
	}
}
