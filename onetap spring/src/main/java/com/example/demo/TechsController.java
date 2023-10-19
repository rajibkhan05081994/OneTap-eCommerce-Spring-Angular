package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TechsController {
	@PostMapping(value = "/add")
	public void Save(@RequestBody Techs s) {
		TechsDA d = new TechsDA();
		d.Insert(s);
	}
	
	List<Techs> plist = new ArrayList<>();

	@RequestMapping(value = "/getpendingtechs")
	public List<Techs> getPendingTechs() {
		TechsDA d = new TechsDA();
		plist = d.getPendingTechs();
		return plist;
	}
	
	@PostMapping(value = "/updatePendingTechs")
	public void updatePendingTechs(@RequestBody Techs p) {
		TechsDA d = new TechsDA();
		d.updatePendingTechs(p);
	}
}
