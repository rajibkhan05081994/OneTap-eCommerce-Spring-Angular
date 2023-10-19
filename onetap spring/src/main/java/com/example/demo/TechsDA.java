package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class TechsDA {

	Connection con;
	PreparedStatement pstmt;

	public List<Techs> getPendingTechs() {
		List<Techs> slist = new ArrayList<>();
		Techs s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("SELECT * FROM techs");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Techs(rs.getString(1), rs.getInt(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9));
				slist.add(s);
			}
		} catch (Exception e) {
			System.out.print(e);
		}
		return slist;
	}

	public void Insert(Techs s) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("INSERT INTO techs VALUES(?,?,?,?,?,?,?,?,?)");
			pstmt.setString(1, s.category);
			pstmt.setInt(2, s.id);
			pstmt.setString(3, s.name);
			pstmt.setString(4, s.email);
			pstmt.setString(5, s.contact);
			pstmt.setString(6, s.password);
			pstmt.setString(7, s.degree);
			pstmt.setString(8, s.img);
			pstmt.setString(9, s.status);
			pstmt.executeUpdate();
		} catch (Exception e) {
			System.out.print(e);
		}

	}
	
	public void updatePendingTechs(Techs p) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("update techs set status='Approved' where id=?");
			pstmt.setInt(1, p.id);
			pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
