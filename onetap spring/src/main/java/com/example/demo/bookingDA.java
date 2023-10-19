package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.mail.MailSenderService;

@Service
public class bookingDA {
	
@Autowired
MailSenderService mail;

	Connection con;
	PreparedStatement pstmt;
	public void add(bookin p) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("insert into appbook values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			pstmt.setString(1, null);
			pstmt.setString(2, p.appdate);
			pstmt.setString(3, p.servicecategory);
			pstmt.setString(4, p.servicename);
			pstmt.setString(5, p.serviceprice);
			pstmt.setString(6, p.laboourrate);
			pstmt.setString(7, p.servicediscount);
			pstmt.setString(8, p.totalprice);
			pstmt.setString(9, p.name);
			pstmt.setString(10, p.email);
			pstmt.setString(11, p.address);
			pstmt.setString(12, p.area);
			pstmt.setString(13, p.city);
			pstmt.setString(14, p.postcode);
			pstmt.executeUpdate();
			
			mail.sendEmail("rajibkhan05081994@gmail.com","Your Appoinment Booking Successfully",
					"Dear "+p.name+"\n Your Appoinment for "+p.appdate+"\n has been booked successfully"
							+ "\n "+p.servicename+ "\n "+p.serviceprice+ "\n "+p.laboourrate+ "\n "+p.servicediscount
							+ "\n "+p.totalprice
							+ "\n \n For Any kind of query please contact us!"
							+ "\n Rajib Khan "+
							"\n Customer Executive"
							+ "\n 0187727676234");
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public List<bookin> allbookins() {
		List<bookin> slist = new ArrayList<>();
		bookin s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("SELECT * FROM appbook");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new bookin(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9),rs.getString(10),rs.getString(11),rs.getString(12),rs.getString(13),rs.getString(14));
				slist.add(s);
			}
		} catch (Exception e) {
			System.out.print(e);
		}
		return slist;
	}
	
	public void delete(bookin p) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "southkorea1994");
			pstmt = con.prepareStatement("delete from appbook where app_id=?");
			pstmt.setInt(1, p.appid);
			pstmt.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}
	}
}
