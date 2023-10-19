package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ServiceDA {
	Connection con;
	PreparedStatement pstmt;


	public List<Service> allServices() {
		List<Service> slist = new ArrayList<>();
		Service s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("SELECT * FROM service");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Service(rs.getInt(1),rs.getString(2),rs.getString(3), rs.getInt(4),rs.getInt(5),rs.getString(6));
				slist.add(s);
			}
		} catch (Exception e) {
			System.out.print(e);
		}
		return slist;
	}

	public Service getServiceById(int id) {
		Service s = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("SELECT * FROM service where id=?");
			pstmt.setInt(1, id);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Service(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getInt(4),rs.getInt(5), rs.getString(6));
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return s;
	}

	public void add(Service p) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("insert into service values (?,?,?,?,?,?)");
			pstmt.setInt(1, p.serviceid);
			pstmt.setString(2, p.servicename);
			pstmt.setString(3, p.servicecategory);
			pstmt.setInt(4, p.serviceprice);
			pstmt.setInt(5, p.servicediscount);
			pstmt.setString(6, p.serviceimg);
			pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void update(Service p) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("update service set name=?,category=?,price=?,discount=?,img=? where id=?");

			pstmt.setString(1, p.servicename);
			pstmt.setString(2, p.servicecategory);
			pstmt.setInt(3, p.serviceprice);
			pstmt.setInt(4, p.servicediscount);
			pstmt.setString(5, p.serviceimg);
			pstmt.setInt(6, p.serviceid);
			pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void delete(Service p) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("delete from service where id=?");
			pstmt.setInt(1, p.serviceid);
			pstmt.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}
	}

}
