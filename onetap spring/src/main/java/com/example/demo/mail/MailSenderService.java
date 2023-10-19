package com.example.demo.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailSenderService {
	@Autowired
	JavaMailSender mailer;

	public boolean sendEmail(String to, String subject, String body) {
		SimpleMailMessage m = new SimpleMailMessage();
		m.setFrom("ezzybreezyhvaccare@gmail.com");
		m.setTo(to);
		m.setSubject(subject);
		m.setText(body);

		mailer.send(m);
		return true;
	}
	
}
