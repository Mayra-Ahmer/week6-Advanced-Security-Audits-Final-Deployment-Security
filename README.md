# Week 6: Advanced Security Audits & Final Deployment Security

## Project Overview
This project involves performing security audits, ensuring compliance with industry security standards, and preparing a vulnerable web application for secure deployment. Various security tools and best practices were applied, including OWASP ZAP, Nikto, Lynis for security audits, Docker security for deployment, and final penetration testing using Burp Suite and Metasploit.

## Tools & Technologies Used
- **OWASP ZAP**: For dynamic application security testing.
- **Nikto**: A web server scanner to detect vulnerabilities.
- **Lynis**: A system and server security auditing tool.
- **Docker**: For containerized application deployment.
- **Burp Suite**: For manual and automated penetration testing.
- **Metasploit**: For vulnerability testing and exploitation.
- **Node.js**: Backend application environment.

## Steps to Set Up and Run the Application

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Week6_Security_Audit_Project.git
cd Week6_Security_Audit_Project
```

### 2. Install Dependencies
For a Node.js application:
```bash
npm install
```

### 3. Running the Application Locally
```bash
node server.js
```

### 4. Dockerized Deployment
To deploy the application using Docker:
```bash
docker build -t my-app .
docker run -p 80:80 my-app
```

---

## Security Audits Performed

### 1. OWASP ZAP Scan
Identified missing security headers and session management issues.

### 2. Nikto Scan
Detected outdated server software and insecure HTTP configurations.

### 3. Lynis Audit
Highlighted system-level vulnerabilities such as weak firewall rules and SSH configurations.

### 4. OWASP Top 10 Compliance Check
- **Injection**: Fixed
- **Broken Authentication**: Improved
- **Sensitive Data Exposure**: HTTPS configured
- **Security Misconfiguration**: Corrected outdated components

---

## Security Improvements Implemented
- Enforced **HTTPS** with Let's Encrypt.
- Added **security headers** (Content Security Policy, X-Frame-Options).
- Improved **session management** and timeout settings.
- Applied **automatic security updates** on the server.
- Implemented **Docker best practices** (minimal base image, non-root user).

---

## Penetration Testing Summary
- **Burp Suite** testing led to the detection and fixing of minor XSS vulnerabilities.
- **Metasploit** confirmed no critical vulnerabilities after improvements.

---

## Final Deliverables
- [x] Final security audit report ([View Report](docs/Week6_Security_Audit_Report.md))
- [x] Fully secured and deployed application
- [x] Updated codebase with security fixes

---

## Future Enhancements
- Implementing Multi-Factor Authentication (MFA).
- Adding Web Application Firewall (WAF).
- Real-time monitoring and threat detection setup.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.





