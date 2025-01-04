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

## Core Networking Devices

- <span class="emphasis">Switches</span>: <span class="emphasis">Connect</span> devices in the same <span class="secondEmphasis">local network</span> (Layer 2).
- <span class="emphasis">Routers</span>: <span class="emphasis">Connect</span> different <span class="secondEmphasis">networks</span> and direct <span class="secondEmphasis">traffic</span> between them (Layer 3).
- <span class="emphasis">Firewalls</span>: <span class="emphasis">Protect</span> networks by filtering <span class="secondEmphasis">traffic</span> based on <span class="secondEmphasis">security rules</span>.

---

## TCP/IP Model Overview

The TCP/IP model includes the following layers:
1. **Application** (Handles software applications, HTTP/HTTPS, and DNS.)
2. **Transport** (Handles TCP/UDP communication protocols.)
3. **Internet** (Layer 3, responsible for routing and addressing.)
4. **Network Access** (Layers 1 and 2, Physical and Data Link Layers.)

---

## Application Layer

- Handles **application-level protocols** such as:
  - **HTTP/HTTPS**: For web communication.
  - **DNS**: Resolves domain names to IP addresses.

---

## Transport Layer (Layer 4)

The **Transport Layer** ensures reliable or fast communication depending on the protocol:
- **TCP**: Transmission Control Protocol. Reliable, ordered delivery of data.
- **UDP**: User Datagram Protocol. Faster but less reliable.

---

## Internet Layer (Layer 3: Network Layer)

The **Internet Layer** is responsible for addressing and routing data across networks.

### Layer 3 Header
- The **Layer 3 Header** contains:
  - <span class="emphasis">Source Address</span>: Where the packet originates.
  - <span class="emphasis">Destination Address</span>: Where the packet is going.
- These addresses enable proper packet routing across networks.

### Addressing Analogies
- **Network Address**: Like a <span class="secondEmphasis">street name</span>, providing a general location.
- **Host Address**: Like a <span class="secondEmphasis">house number</span>, uniquely identifying a device.
- Example IPv4 Address:
  - <span class="examples">10.10.0.50</span> (Street: <span class="examples">10.10.0</span>, House: <span class="examples">.50</span>)

### IPv4 and IPv6
- **IPv4**:
  - Most common format: <span class="examples">xxx.xxx.xxx.xxx</span> (e.g., <span class="examples">192.168.1.1</span>).
- **IPv6**:
  - Newer format: Uses eight groups of hexadecimal numbers.

### Verifying IP Address
- How to verify the local IP address:
  - **Windows**: Use the <span class="examples">ipconfig</span> command in the Command Prompt.
  - **Mac**: Use the <span class="examples">ifconfig</span> command in Terminal.
  - **Linux/Ubuntu**: Use the <span class="examples">ip addr</span> or <span class="examples">ifconfig</span> command in Terminal.

### Subnet Mask and Default Gateway
- **Subnet Mask**:
  - Defines which part of an IP address represents the network and which part represents the host.
  - Example: <span class="examples">255.255.255.0</span>.
- **Default Gateway**:
  - Often referred to as the router. Directs packets to other networks.
  - Example: If the device’s IP is <span class="examples">192.168.1.10</span>, the Default Gateway might be <span class="examples">192.168.1.1</span>.

### DNS Commands
- **ipconfig /flushdns**:
  - Clears the DNS resolver cache to remove outdated or incorrect entries.
- **ipconfig /displaydns**:
  - Displays cached DNS records, including:
    - **Domain Name**: <span class="examples">example.com</span>
    - **A (Host) Records**: Multiple IPs may be shown for redundancy or load balancing.

### ping
- Tests network connectivity by sending packets to a destination.
- Example:
  - <span class="examples">ping google.com</span>: Sends packets to <span class="examples">google.com</span> to verify reachability.

---

## Layer 2: Data Link Layer

### **What is Layer 2?**
   - Layer 2 is known as the **Data Link Layer** in the TCP/IP stack.

### **Primary Role of Layer 2**
   - The main component handled at Layer 2 is the **source and destination MAC addresses**.
   - These addresses are essential for the frame that will be sent out from the **Network Interface Card (NIC)**.

### **Physical Connections**
   - Layer 2 deals with physical connections between devices, such as:
     - **Devices hard-wired to a switch.**
     - **Devices connected wirelessly** to a network.

### **Network Interface Card (NIC)**
   - The **Network Interface Card (NIC)** is the hardware component that allows a device to communicate with the internet.

### **Burned-In Address**
   - Every NIC has its own **burned-in address**, which is assigned by the manufacturer or factory.
   - These burned-in addresses are **unique** for each NIC.

### **Alternative Names for the Burned-In Address**
   - The burned-in address is also referred to as:
     - **MAC Address**
     - **Ethernet Address**
     - **Physical Address**
     - **Layer 2 (L2) Address**
     - **Burned-In Address (BIA)**

### **Burned-In Address Format**
   - The burned-in address:
     - Is **12 digits long**.
     - Written in **hexadecimal format**.
     - Each pair of digits is separated by a **colon** (e.g., 12:34:56:78:9A:BC).

### **Burned-In Address Bit Length**
   - The burned-in address represents a **48-bit address**.

### **Unique Addresses**
   - It is the responsibility of the manufacturer to ensure all burned-in addresses are **unique**.

### **Layer 2 Responsibilities**
   - **Framing:** Encapsulates data into frames for transmission.
   - **Error Detection:** Uses mechanisms like **Cyclic Redundancy Check (CRC)** to detect transmission errors.
   - **Flow Control:** Manages data flow between devices to prevent data loss.

### **Layer 2 Protocols**
   - **Ethernet (Wired):** The most common Layer 2 protocol for wired connections.
   - **Wi-Fi (802.11):** A widely used protocol for wireless connections.

### **Role in Packet Delivery**
   - Layer 2 ensures the delivery of frames between devices within the **same local network** (e.g., within the same subnet).
   - For packets destined for devices outside the local network, Layer 2 forwards the data to the **default gateway (router)**.

### **Layer 2 Header Information**
   - Before a computer or device sends traffic onto the network, the **Layer 2 Header** includes:
     - The **source Layer 2 address** of the device sending the data.
     - The **destination Layer 2 address** of the next device the data packet needs to be forwarded to.

### **Viewing Layer 2 Addresses (MAC Addresses)**
   - **Windows:**
     - Use ipconfig /all or ipconfig -all to view:
       - NIC information.
       - Layer 3 information (e.g., IP address).
       - Layer 2 burned-in (MAC) address.
   - **Linux/Ubuntu:**
     - Use ip link show or ifconfig -a to view:
       - Network interface details.
       - MAC address labeled as link/ether or ether.
   - **macOS:**
     - Use ifconfig in the Terminal to view:
       - Network interface details.
       - MAC address labeled as ether.

### **Address Resolution Protocol (ARP)**
   - **ARP Overview:**
     - ARP stands for **Address Resolution Protocol**.
     - It is considered the **Layer 2 equivalent of DNS**, responsible for mapping IP addresses to MAC addresses.
   - **Viewing ARP Cache:**
     - **Windows:**
       - Use arp -a to display all cached ARP entries.
       - Typing arp alone displays the available ARP options.
     - **Linux/Ubuntu:**
       - Use ip neigh show or arp -n to display the ARP table.
       - Typing arp without arguments typically displays usage instructions or an error message.
     - **macOS:**
       - Use arp -a to display the ARP table.
       - Typing arp without arguments displays usage information.
   - **Other ARP Commands:**
     - **Windows:**
       - arp -d [IP address]: Deletes a specific ARP entry.
       - arp -s [IP address] [MAC address]: Adds a static ARP entry.
     - **Linux/Ubuntu:**
       - arp -d [IP address] or ip neigh del [IP address] dev [interface]: Deletes an ARP entry.
     - **macOS:**
       - arp -d [IP address]: Deletes an ARP entry.
       - arp -s [IP address] [MAC address]: Adds a static ARP entry.

### **Analogy: Community Mailbox and Burned-In Addresses**
   - **Street and Houses:**
     - Imagine a street with houses having unique host addresses (e.g., .51, .52, .53).
   - **Community Mailbox:**
     - All houses share a mailbox, and each slot corresponds to a specific house.
     - Mapping determines which slot matches which house.
   - **Burned-In Addresses:**
     - Slots in the mailbox represent the burned-in addresses (e.g., MAC addresses).
---

## Layer 1: Physical Layer

### Representation of Layer 1
Layer 1 represents the actual **connectors**, **signals**, and the **media** used to forward traffic.

### Standards of Communication
- **Ethernet Standards**: Copper and fiber optics are common media.
- **Wireless Standards**: Many devices now also use **wireless communication**, where the **air (airwaves)** acts as the medium for data communication into the network.

### Interaction with Other Layers
- When information enters the network through **Layer 1** and reaches a **Layer 2 switch**, the switch examines the **Layer 2 header** for:
  - **Source Layer 2 Address**.
  - **Destination Layer 2 Address**.
  - **Forwarding Decision**: The switch uses these addresses to forward data based on the **MAC (Media Access Control)** address or **Physical Address**.

- **Layer 3 (Network Layer)**: A **router** receives the data, examines the **Layer 3 header** for:
  - **Source IP Address**.
  - **Destination IP Address**.
  - **Routing Decision**: The router forwards data based on the destination IP address. Once routed, the information reaches the **firewall**, which further processes and forwards it to the appropriate **server**.

### Units of Data at Each Layer
- **Application Layer to Layer 4 (Transport Layer)**: The data is referred to as a **segment** or **datagram**.
- **Layer 3 (Network Layer)**: The data is referred to as a **packet**.
- **Layer 2 (Data Link Layer)**: The data is referred to as a **frame**.
- **Layer 1 (Physical Layer)**: The data is transmitted as **bits**, sent one at a time and at very high speeds.

### The Process of Encapsulation
- **Encapsulation**:
  - Begins at the **Application Layer** and continues downward through:
    1. **Transport Layer (Layer 4)**.
    2. **Network Layer (Layer 3)**.
    3. **Data Link Layer (Layer 2)**.
    4. **Physical Layer (Layer 1)**.
  - Each layer adds its own **header** or **information** to the data.
  - This process happens when a **client** or **device** makes a request.

### The Process of De-encapsulation
- **De-encapsulation**:
  - Happens in reverse when the **traffic** is delivered to the **server**.
  - Starts at **Layer 1** and moves upward through:
    1. **Data Link Layer (Layer 2)**.
    2. **Network Layer (Layer 3)**.
    3. **Transport Layer (Layer 4)**.
    4. **Application Layer**.
  - The **server** removes each layer's **header** or **information** as the traffic moves up the stack.

- After **de-encapsulation**, the **server** can process the **request** and send a **response** to the **client**.
