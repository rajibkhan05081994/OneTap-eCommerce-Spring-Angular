package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mail.MailSenderService;

@Service
public class CustomerDA {
	Connection con;
	PreparedStatement pstmt;
	
	@Autowired
	MailSenderService mail;
	
	public void Insert(Customer s) {
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("INSERT INTO customer VALUES(?,?,?,?)");
			pstmt.setString(1, s.name);
			pstmt.setString(2, s.email);
			pstmt.setString(3, s.contact);
			pstmt.setString(4, s.password);
			pstmt.executeUpdate();
			mail.sendEmail(s.email, "Account Created Successfully",
				"Dear, "+s.name +"\n Your Account Created Successfuly "+"\n Thanks For Choosing Us");
		} catch (Exception e) {
			System.out.print(e);
		}

	}

	public void update(Customer s) {
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("update customer set name=?,contact=?,password=? where email=?");
			pstmt.setString(1, s.name);
			pstmt.setString(2, s.contact);
			pstmt.setString(3, s.password);
			pstmt.setString(4, s.email);
			pstmt.executeUpdate();
		} catch (Exception e) {
			System.out.print(e);
		}

	}
	public Customer check(Customer c) {
		Customer customer=null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("select * from customer where email=? AND password=?");
			pstmt.setString(1, c.email);
			pstmt.setString(2, c.password);
			ResultSet rs=pstmt.executeQuery();
			if(rs.next()) {
				customer=new Customer();
				customer.setEmail(rs.getString(2));
				customer.setPassword(rs.getString(4));
			}
		} catch (Exception e) {
			System.out.print(e);
		}
		return customer;
	}
	public Customer customerByEmail(String email) {
		Customer customer=null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("select * from customer where email=?");
			pstmt.setString(1, email);
			ResultSet rs=pstmt.executeQuery();
			if(rs.next()) {
				customer=new Customer(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4));
			}
		} catch (Exception e) {
			System.out.print(e);
		}
		return customer;
	}

	
	
}
