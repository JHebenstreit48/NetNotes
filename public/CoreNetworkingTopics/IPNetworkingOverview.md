# IP Networking Overview

---

## What is Networking?

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

## Core Networking Devices

- <span class="emphasis">Switches</span>: <span class="emphasis">Connect</span> devices in the same <span class="secondEmphasis">local network</span> (Layer 2).
- <span class="emphasis">Routers</span>: <span class="emphasis">Connect</span> different <span class="secondEmphasis">networks</span> and direct <span class="secondEmphasis">traffic</span> between them (Layer 3).
- <span class="emphasis">Firewalls</span>: <span class="emphasis">Protect</span> networks by filtering <span class="secondEmphasis">traffic</span> based on <span class="secondEmphasis">security rules</span>.

---

## TCP/IP Model

### Overview
The **TCP/IP Model** is the primary model used in networking, consisting of four layers:

1. **Network Access Layer** (combines the Physical and Data Link layers from OSI)
2. **Internet Layer** (equivalent to the Network layer in OSI)
3. **Transport Layer**
4. **Application Layer**

---

## Application Layer

The **Application Layer** enables user applications to interact with the network through specific protocols.

### Application Layer Protocols
- **HTTP/HTTPS**: Used for web communication.
- **DNS**: Resolves domain names to IP addresses.

---

## Transport Layer

The **Transport Layer** provides end-to-end communication and ensures the delivery of data between applications.

### Transport Layer Protocols
- **TCP (Transmission Control Protocol)**:
  - Reliable communication with error checking and retransmission.
- **UDP (User Datagram Protocol)**:
  - Faster communication without error checking.

---

## Internet Layer (Network Layer)

The **Internet Layer** is responsible for addressing and routing packets across networks.

### Layer 3 Header
- The **Layer 3 Header** contains:
  - <span class="emphasis">Source Address</span>: Where the packet originates.
  - <span class="emphasis">Destination Address</span>: Where the packet is going.
- These addresses enable proper packet routing across networks.

### Addressing Analogies
- A **network address** is like a <span class="secondEmphasis">street name</span>, providing a general location.
- A **host address** is like a <span class="secondEmphasis">house number</span>, uniquely identifying a device.
- **Example IPv4 Address**:
  - **Street Name**: <span class="examples">10.10.0</span>
  - **House Number**: <span class="examples">.50</span>
  - **Full Address**: <span class="examples">10.10.0.50</span>

### IPv4 and IPv6
- **IPv4**:
  - Most common format: <span class="examples">xxx.xxx.xxx.xxx</span> (e.g., <span class="examples">192.168.1.1</span>).
- **IPv6**:
  - Newer format: Uses eight groups of hexadecimal numbers.

---

## Networking Commands

### Verifying IP Address
- How to verify the local IP address:
  - **Windows**: Use the <span class="examples">ipconfig</span> command in the Command Prompt.
  - **Mac**: Go to System Preferences > Network or use the <span class="examples">ifconfig</span> command in Terminal.
  - **Linux/Ubuntu**: Use the <span class="examples">ip addr</span> or <span class="examples">ifconfig</span> command in Terminal.

### Subnet Mask and Default Gateway
- **Subnet Mask**:
  - Defines which part of an IP address represents the network and which part represents the host.
  - Example: <span class="examples">255.255.255.0</span>.
- **Default Gateway**:
  - Often referred to as the router. Directs packets to other networks.
  - Example: If the device’s IP is <span class="examples">192.168.1.10</span>, the Default Gateway might be <span class="examples">192.168.1.1</span>.

### ipconfig /flushdns
- Clears the DNS resolver cache to remove outdated or incorrect entries.

### ipconfig /displaydns
- Displays cached DNS records, including:
  - **Domain Name**: <span class="examples">example.com</span>
  - **A (Host) Records**: Multiple IPs may be shown for redundancy or load balancing.

### ping
- Tests network connectivity by sending packets to a destination.
- Example:
  - <span class="examples">ping google.com</span>: Sends packets to <span class="examples">google.com</span> to verify reachability.

---
