## IP Networking Overview

### What is Networking?

<span class="emphasis">Networking</span> is the practice of connecting devices to share <span class="emphasis">data</span> and <span class="emphasis">resources</span>. Devices in a network can act as either:

- <span class="emphasis">Clients</span>: Request services or data.
- <span class="emphasis">Servers</span>: Provide services or data.

### Core Concepts

<span class="secondEmphasis">1. Client-Server Model:</span>
- A <span class="emphasis">client</span> is any device that initiates communication by sending requests.
- A <span class="emphasis">server</span> is any device that responds by providing the requested data or resources.
- Devices can take on <span class="emphasis">dynamic roles</span> depending on the context. For example:
  - **Server A** acts as a client when it requests data from **Server B**, which serves as a database.

<span class="secondEmphasis">2. Core Network Devices:</span>
- <span class="emphasis">Switches</span>: Operate at Layer 2 (Data Link Layer) and enable communication between devices in the same network.
- <span class="emphasis">Routers</span>: Operate at Layer 3 (Network Layer) and connect different networks.
- <span class="emphasis">Firewalls</span>: Provide network security by filtering traffic based on predefined rules.

### How Devices Function in a Network

When a <span class="emphasis">device</span> requests a service over an IP network, it assumes the role of a <span class="emphasis">client</span>. Common client actions include:

- Retrieving a webpage from a web server.
- Accessing a shared file from a file server.
- Querying a database from a database server.

### Dynamic Role Assignment
Devices are not restricted to one role:
- A <span class="emphasis">printer server</span> is typically a server but may act as a <span class="emphasis">client</span> when requesting updates.
- A single device can function as both a client and server, depending on the situation.
