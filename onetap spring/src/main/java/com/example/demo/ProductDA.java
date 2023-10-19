package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ProductDA {
	Connection con;
	PreparedStatement pstmt;


	public List<Product> allProduct() {
		List<Product> slist = new ArrayList<>();
		Product s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("SELECT * FROM product");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Product(rs.getString(1), rs.getInt(2), rs.getString(3), rs.getString(4),rs.getString(5));
				slist.add(s);
			}
		} catch (Exception e) {
			System.out.print(e);
		}
		return slist;
	}

	public Product productstById(int id) {
		Product s = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("SELECT * FROM product where id=?");
			pstmt.setInt(1, id);
			ResultSet rs = pstmt.executeQuery();
			System.out.println("sds");
			while (rs.next()) {
				s = new Product(rs.getString(1), rs.getInt(2), rs.getString(3), rs.getString(4),rs.getString(5));
				System.out.println("ssds");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return s;
	}

	public void add(Product p) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("insert into product values (?,?,?,?,?)");
			pstmt.setString(1, p.img);
			pstmt.setInt(2, p.id);
			pstmt.setString(3, p.name);
			pstmt.setString(4, p.brand);
			pstmt.setString(5, p.price);
			pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void update(Product p) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("update product set p_name=?,p_brand=?,p_img=?,p_price=? where id=?");

			pstmt.setString(1, p.name);
			pstmt.setString(2, p.brand);
			pstmt.setString(3, p.img);
			pstmt.setString(4, p.price);
			pstmt.setInt(5, p.id);
			pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void delete(Product p) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("delete from product where id=?");
			pstmt.setInt(1, p.id);
			pstmt.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}
	}

}
