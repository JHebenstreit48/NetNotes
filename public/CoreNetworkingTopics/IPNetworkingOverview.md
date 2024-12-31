# IP Networking Overview

## What is Networking?
Networking is about connecting devices to share <span class="emphasis">data</span> and <span class="secondEmphasis">resources</span>. Devices in a network can take on one of two main roles:

- <span class="emphasis">Client</span>: <span class="emphasis">Requests</span> <span class="secondEmphasis">services</span> or <span class="secondEmphasis">data</span>.
- <span class="emphasis">Server</span>: <span class="emphasis">Provides</span> <span class="secondEmphasis">services</span> or <span class="secondEmphasis">data</span>.

---

## The Client-Server Model

1. <span class="emphasis">Clients</span> <span class="emphasis">initiate</span> communication by making <span class="secondEmphasis">requests</span> (e.g., opening a webpage or sending a login request).
2. <span class="emphasis">Servers</span> <span class="emphasis">respond</span> to these <span class="secondEmphasis">requests</span>, providing <span class="secondEmphasis">data</span> or <span class="secondEmphasis">resources</span> (e.g., delivering the webpage or verifying a username and password).

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

## How Roles Work in a Network

When a device requests a <span class="secondEmphasis">service</span> (like loading a webpage or retrieving <span class="secondEmphasis">data</span>), it becomes a <span class="emphasis">client</span>. Examples:
- Your <span class="emphasis">computer</span> is a <span class="emphasis">client</span> when it requests a <span class="secondEmphasis">webpage</span>.
- A <span class="emphasis">server</span> storing <span class="secondEmphasis">login credentials</span> acts as a <span class="emphasis">server</span> when verifying <span class="secondEmphasis">login details</span>.

<span class="secondEmphasis">Dynamic Roles:</span> Devices can switch roles based on their actions:
- A <span class="emphasis">printer server</span> provides <span class="secondEmphasis">printing services</span> (<span class="emphasis">server</span> role) but might act as a <span class="emphasis">client</span> when downloading a <span class="secondEmphasis">software update</span>.

---

## Other Overview Notes

(Add additional notes here as needed to expand on <span class="emphasis">networking concepts</span> or <span class="secondEmphasis">examples</span>.)
