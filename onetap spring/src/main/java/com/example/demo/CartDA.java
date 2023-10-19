package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class CartDA {
	Connection con;
	PreparedStatement pstmt;
	public void addToCart(Cart p) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("insert into cart values (?,?,?,?,?,?,?,?,?,?)");
			pstmt.setInt(1, p.cart_id);
			pstmt.setString(2, p.customer_id);
			pstmt.setInt(3, p.product_id);
			pstmt.setString(4, p.product_name);
			pstmt.setString(5, p.product_brand);
			pstmt.setInt(6, p.prooduct_quantity);
			pstmt.setString(7, p.product_price);
			pstmt.setString(8, p.product_discount);
			pstmt.setString(9, p.total_product_price);
			pstmt.setString(10, p.product_img);
			pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
