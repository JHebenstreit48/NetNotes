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
