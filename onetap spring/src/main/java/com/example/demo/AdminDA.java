package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class AdminDA {
	Connection con;
	PreparedStatement pstmt;
	public Admin check(Admin c) {
		Admin admin=null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("select * from admin where email=? AND password=?");
			pstmt.setString(1, c.email);
			pstmt.setString(2, c.password);
			ResultSet rs=pstmt.executeQuery();
			if(rs.next()) {
				admin=new Admin();
				admin.setEmail(rs.getString(1));
				admin.setPassword(rs.getString(4));
			}
		} catch (Exception e) {
			System.out.print(e);
		}
		return admin;
	}
}
