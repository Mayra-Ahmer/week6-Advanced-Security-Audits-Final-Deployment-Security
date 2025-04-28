# Week 6: Advanced Security Audits & Final Deployment Security

## Project Overview
This project involves performing security audits, ensuring compliance with industry security standards, and preparing a vulnerable web application for secure deployment. Various security tools and best practices were applied, including OWASP ZAP, Nikto, and Lynis for security audits, Docker security for deployment, and final penetration testing using Burp Suite and Metasploit.

## Tools & Technologies Used
- **OWASP ZAP**: For dynamic application security testing.
- **Nikto**: A web server scanner to detect vulnerabilities.
- **Lynis**: A security auditing tool for Unix-based systems.
- **Docker**: For containerized application deployment.
- **Burp Suite**: For manual and automated penetration testing.
- **Metasploit**: For testing exploits and vulnerabilities.

## Steps to Set Up and Run the Application

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Week6_Security_Audit_Project.git
cd Week6_Security_Audit_Project

### 2. Install Dependencies
For a Node.js application:
```bash
npm install

### 3. Running the Application Locally
```bash
node server.js

### 4. Dockerized Deployment
To deploy the application using Docker:

```bash
docker build -t my-app .
docker run -p 80:80 my-app

## Security Audits Performed
1. OWASP ZAP Scan
OWASP ZAP was used to identify common web vulnerabilities like missing security headers, XSS issues, and weak session management.

2. Nikto Scan
Nikto scanned for common web server vulnerabilities such as outdated software and directory listing enabled.

3. Lynis Audit
Lynis was run to audit system security, discovering weak firewall settings and SSH configuration issues.

4. Compliance with OWASP Top 10
We assessed the application against the OWASP Top 10 and made necessary fixes:
..A1: Injection - Fixed SQL Injection vulnerabilities.
..A2: Broken Authentication - Improved session management.
..A5: Security Misconfiguration - Apache server was updated, and root login for SSH was disabled.

### Security Improvements Implemented
-HTTPS enabled using Let’s Encrypt.
-Security Headers configured in server settings.
-Session Management improvements for authentication.
-Docker Security Best Practices:
   -Used minimal base images.
   -Set up user permissions correctly.
   -Scanned Docker images for vulnerabilities.

### Penetration Testing Results
-Burp Suite: A minor XSS vulnerability was identified and fixed by sanitizing user input.
-Metasploit: No critical vulnerabilities were found after applying the necessary security patches.

## Final Security Audit Report
The full Security Audit Report with detailed findings and fixes is available here.

## Future Enhancements
-Implementing multi-factor authentication (MFA).
-Further hardening of server configurations.
-Continuous monitoring for security patches and vulnerabilities.

License
This project is licensed under the MIT License - see the LICENSE file for details.









