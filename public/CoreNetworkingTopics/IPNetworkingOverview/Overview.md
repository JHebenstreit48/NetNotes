## What is Networking?
---

Networking is about connecting devices to share <span class="emphasis">data</span> and <span class="secondEmphasis">resources</span>. Devices in a network can take on one of two main roles:

- <span class="emphasis">Client</span>: <span class="emphasis">Requests</span> <span class="secondEmphasis">services</span> or <span class="secondEmphasis">data</span>.
- <span class="emphasis">Server</span>: <span class="emphasis">Provides</span> <span class="secondEmphasis">services</span> or <span class="secondEmphasis">data</span>.

---
## The Client-Server Model

1. <span class="emphasis">Clients</span>: <span class="emphasis">Initiate</span> <span class="secondEmphasis">communication</span> by making <span class="secondEmphasis">requests</span> (e.g., opening a <span class="secondEmphasis">webpage</span> or sending a <span class="secondEmphasis">login request</span>).
2. <span class="emphasis">Servers</span>: <span class="emphasis">Respond</span> to these <span class="secondEmphasis">requests</span>, providing <span class="secondEmphasis">data</span> or <span class="secondEmphasis">resources</span> (e.g., delivering the <span class="secondEmphasis">webpage</span> or verifying a <span class="secondEmphasis">username and password</span>).

**Example:**
- <span class="emphasis">Server A</span> hosts a <span class="secondEmphasis">website</span> and serves it to <span class="emphasis">clients</span> requesting it.
- <span class="emphasis">Server B</span> functions as a <span class="emphasis">database server</span>, storing and verifying <span class="secondEmphasis">data</span> like <span class="emphasis">usernames</span> and <span class="secondEmphasis">passwords</span>.
- When a user logs in:
  - The <span class="emphasis">computer</span> functions as a <span class="emphasis">client</span>, requesting the webpage from <span class="emphasis">Server A</span>.
  - <span class="emphasis">Server A</span> acts as a <span class="emphasis">client</span> when it requests <span class="secondEmphasis">data</span> from <span class="emphasis">Server B</span> to verify login credentials.
  - <span class="emphasis">Server B</span> responds to <span class="emphasis">Server A</span> with the verification result, fulfilling its role as a <span class="emphasis">server</span>.

---
## The Internet as a Global Network
---
- **The internet is not owned by any individual or group.**  
- The internet is a **worldwide collection of interconnected networks** that cooperate using common standards to exchange data.  
- Through **telephone wires, fiber-optic cables, wireless transmissions, and satellite links**, users can share information globally.  

### Real-World Internet Applications:
- **Social media, email, and news platforms** operate across interconnected networks.
- **Online gaming** allows thousands of players to interact in real-time.
- **Video conferencing** enables instant global communication.
- **Phones & mobile devices** connect people across different countries.

---
## Local Networks
---
A <span class="emphasis">local network</span> is a private network that connects devices within a defined geographic area.

### **Types of Local Networks**
---

#### **Small Home Networks**
- Connects a few computers and smart devices within a home.
- Uses a router or modem to provide internet access.

#### **Small Office/Home Office (SOHO) Networks**
- Supports small businesses or remote workers.
- Provides shared access to <span class="secondEmphasis">printers, files, and the internet</span>.

#### **Medium to Large Networks**
- Found in <span class="emphasis">corporations, universities, and large organizations</span>.
- Can span multiple buildings with <span class="secondEmphasis">hundreds or thousands of interconnected hosts</span>.

#### **World Wide Networks**
- The internet is a <span class="emphasis">global network of interconnected local networks</span>.
- Enables worldwide access to digital resources, cloud services, and real-time communication.

---
## Devices in Modern Networking
---

### **Mobile Devices**
Mobile devices can connect to the internet from almost anywhere. Examples include:

- **Smartphones** – Combine telephone, camera, GPS, media player, and computing functions.
- **Tablets** – Larger screens for media consumption, reading, and productivity.
- **Smartwatches** – Connect to smartphones for alerts, messaging, and health tracking.
- **Smart Glasses** – Wearable computers with HUD-like displays (e.g., Google Glass).

### **Connected Home Devices**
Many home devices now connect to the internet for <span class="secondEmphasis">remote monitoring and automation</span>:

- **Security Systems** – Allow remote monitoring of cameras and alarms.
- **Smart Appliances** – Internet-connected refrigerators, ovens, and dishwashers provide <span class="secondEmphasis">real-time status updates</span>.
- **Smart TVs** – Stream content, browse the web, and access apps.
- **Gaming Consoles** – Connect online to download games and enable multiplayer gaming.

### **Other Connected Devices**
Internet-connected devices exist beyond homes:

- <span class="emphasis">Smart Cars</span> – Use internet access for maps, navigation, and security alerts.
- <span class="emphasis">RFID Tags</span> – Track objects using radio frequency identification.
- **Sensors and Actuators** – Monitor and automate environmental conditions (e.g., temperature, humidity, and soil moisture).
- **Medical Devices** – Pacemakers, insulin pumps, and hospital monitors transmit real-time health data.

---
## Core Networking Devices
---

- <span class="emphasis">Switches</span>: <span class="emphasis">Connect</span> devices in the same <span class="secondEmphasis">local network</span> (Layer 2).
- <span class="emphasis">Routers</span>: <span class="emphasis">Connect</span> different <span class="secondEmphasis">networks</span> and direct <span class="secondEmphasis">traffic</span> between them (Layer 3).
- <span class="emphasis">Firewalls</span>: <span class="emphasis">Protect</span> networks by filtering <span class="secondEmphasis">traffic</span> based on <span class="secondEmphasis">security rules</span>.

---
## Overview of Networking Models
---
Networking models define how data moves between devices.

### **TCP/IP Model**
- **Application Layer** – Manages software-based communication (e.g., HTTP, DNS).
- **Transport Layer** – Ensures reliable data transmission (e.g., TCP, UDP).
- **Internet Layer** – Handles routing and addressing (e.g., IP).
- **Network Access Layer** – Defines physical and data link communication.

### **OSI Model**
- A <span class="emphasis">7-layer model</span> used to conceptualize networking.
- **Comparison with TCP/IP**:
  - OSI separates <span class="secondEmphasis">Application, Presentation, and Session layers</span>, while TCP/IP combines them into a single **Application layer**.
  - OSI divides <span class="secondEmphasis">Physical and Data Link layers</span>, while TCP/IP merges them into **Network Access**.

---
