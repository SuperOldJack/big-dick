package com.t163.eshop.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class test {
	
	@RequestMapping("test.htm")
	public String a(Model model) {
		
		model.addAttribute("num",20);
		return "newFtl";
	
	
	}
	
	@RequestMapping("test2.htm")
	public String ba(Model model) {
		return "index";
	}
}
