# IP Networking Overview

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

## Network Models

To better understand complex networking concepts, we often use <span class="emphasis">models</span> to break them down into smaller, easy-to-digest parts. These models help us understand how <span class="secondEmphasis">IP networking</span> works by organizing it into layers.

### OSI Model

The <span class="emphasis">OSI Model</span> is a conceptual framework with seven ordered layers, where each layer depends on the one below it to function. It is often used for learning and understanding network processes.

#### OSI Layers:
1. <span class="emphasis">Physical Layer</span>: Layer 1
2. <span class="emphasis">Data Link Layer</span>: Layer 2
3. <span class="emphasis">Network Layer</span>: Layer 3
4. <span class="emphasis">Transport Layer</span>: Layer 4
5. <span class="emphasis">Session Layer</span>: Layer 5
6. <span class="emphasis">Presentation Layer</span>: Layer 6
7. <span class="emphasis">Application Layer</span>: Layer 7

---

### TCP/IP Model

The <span class="emphasis">TCP/IP Model</span> simplifies networking layers into four main categories and is widely used in real-world applications.

#### TCP/IP Layers:
1. <span class="emphasis">Network Access</span>: Combines Layers 1 and 2 (Physical + Data Link)
2. <span class="emphasis">Internet</span>: Layer 3 (Network)
3. <span class="emphasis">Transport</span>: Layer 4
4. <span class="emphasis">Application</span>: Combines Layers 5, 6, and 7 (Session + Presentation + Application)

---

#### Application and Transport Layers

- **Application Layer Protocols**:
  - <span class="emphasis">HTTP/HTTPS</span>: Used for web communication.
  - <span class="emphasis">DNS</span>: Translates domain names (e.g., `example.com`) into IP addresses.
- **Transport Layer Protocols**:
  - <span class="emphasis">TCP</span>: Provides reliable communication (e.g., HTTP/HTTPS).
  - <span class="emphasis">UDP</span>: Enables faster communication without guarantees (e.g., DNS).

---

**DNS Analogy**:
- The **DNS system** acts like a directory for translating domain names into IP addresses:
  - Similar to looking up a phone number in an **old-school phonebook**.
  - Comparable to using your phone to find a destination’s address.

---

## Clearing the DNS Cache

- A device’s DNS resolver cache can be cleared to ensure updated or corrected DNS records.
- The command to perform this is: <span class="emphasis">ipconfig /flushdns</span> (on Windows systems).
- This command is useful for:
  - Fixing issues caused by outdated or incorrect DNS entries.
  - Forcing the system to re-query DNS information from authoritative sources.

---

## How Roles Work in a Network

When a device requests a <span class="secondEmphasis">service</span> (like loading a webpage or retrieving <span class="secondEmphasis">data</span>), it becomes a <span class="emphasis">client</span>. Examples:
- Your <span class="emphasis">computer</span> is a <span class="emphasis">client</span> when it requests a <span class="secondEmphasis">webpage</span>.
- A <span class="emphasis">server</span> storing <span class="secondEmphasis">login credentials</span> acts as a <span class="emphasis">server</span> when verifying <span class="secondEmphasis">login details</span>.

<span class="secondEmphasis">Dynamic Roles:</span> Devices can switch roles based on their actions:
- A <span class="emphasis">printer server</span> provides <span class="secondEmphasis">printing services</span> (<span class="emphasis">server</span> role) but might act as a <span class="emphasis">client</span> when downloading a <span class="secondEmphasis">software update</span>.

---

## Key Takeaways

- Networking enables the sharing of <span class="emphasis">data</span> and <span class="secondEmphasis">resources</span> between devices.
- Network models simplify how we understand the structure and function of networks.
- The <span class="emphasis">TCP/IP Model</span> and <span class="emphasis">Actual Network Model</span> are the most practical for modern networking.
- Devices dynamically switch between the roles of <span class="emphasis">client</span> and <span class="emphasis">server</span> based on their tasks.
