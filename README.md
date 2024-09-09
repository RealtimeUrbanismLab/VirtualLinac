# Open LEARN: Open access linear accelerator education and augmented reality Navigator

## Authors

Parminder S.Basran(1), SungHo Synn(2), Gregory A.Marzano(1), Hyun Maenga(1), Farzin Lotfi-Jam(2)

(1) Department of Clinical Sciences, College of Veterinary Medicine, Cornell University, Ithaca, NY 14853, USA
(2) Department of Architecture, College of Architecture, Art, and Planning, Cornell University, Ithaca, NY 14853, USA

# Abstract
Purpose: To create an open-access Linear Accelerator Education and Augmented Reality Navigator (Open LEARN) via 3D printable objects and interactive augmented reality assets.
Methods: This study describes an augmented reality linear accelerator (linac) model accessible through a QR code and a smartphone to address the challenges of medical physics and radiation oncology trainees in low-to-middle-income countries.
Results: Major components of a generic linear accelerator are modeled as individual objects. These objects can be 3D printed for hands-on learning and used as interactive 3D assets within the augmented reality app. In the AR app, descriptions are displayed to navigate the components spatially and textually. Items modeled include the treatment couch, klystron, circulator, RF waveguides, electron gun, waveguide, beam steering assemblies, target, collimators, multi-leaf collimators, and imaging systems. The linear accelerator is rendered at 50% of its actual size, allowing users to change magnification and view objects from different angles.
Conclusions: The augmented reality linear accelerators and 3D-printed objects make these complex machines easily accessible with smartphones and 3D-printing technologies, facilitating education and training through physical and virtual interaction.

# Keywords
Education, Radiation oncology, Virtual reality, Augmented reality, 3D printing

# Access Online Application

Visit this linke with desktop, table, or smartphone: [Virtual Linac Online App](https://realtimeurbanismlab.github.io/VirtualLinac)

# Serve Files Locally Over HTTPS

This guide explains how to serve HTML files locally over HTTPS using `http-server` and self-signed certificates. This setup allows you to test AR features on mobile devices that require HTTPS.

## Setup and Guidelines
# Prerequisites

1. **Node.js**: Make sure Node.js is installed. [Download Node.js](https://nodejs.org/).
2. **Git Bash** (if you're using Windows).

## Steps to Set Up HTTPS Server

### 1. Install `http-server`

First, you need to install `http-server`, a simple, zero-configuration command-line server that works well for this purpose.

Open a terminal or Git Bash and run:

```bash
npm install -g http-server
```

This will install `http-server` globally on your system.

### 2. Generate Self-Signed Certificates

To serve your files over HTTPS, you need SSL certificates. You can easily generate them using OpenSSL.

In your project directory, run the following command to create a certificate (`cert.pem`) and a private key (`key.pem`):

```bash
openssl req -new -x509 -keyout key.pem -out cert.pem -days 365 -nodes
```

When prompted, you can fill in the details (Country Name, etc.) or just press **Enter** to skip.

### 3. Serve Files via HTTPS

Now, you can serve your files over HTTPS using `http-server`. In the same directory where your `cert.pem` and `key.pem` files are located, run the following command:

```bash
http-server -S -C cert.pem -K key.pem
```

- `-S`: Enables HTTPS.
- `-C`: Specifies the path to the SSL certificate.
- `-K`: Specifies the path to the SSL private key.

By default, the server will run on `https://localhost:8080`.

### 4. Access from Mobile Device

To access the server from your mobile phone:

1. Ensure your computer and mobile device are connected to the same Wi-Fi network.
2. Find your computer's local IP address:
   - On Windows, run `ipconfig` in Command Prompt or Git Bash.
   - On macOS/Linux, run `ifconfig`.
3. Open a browser on your mobile device and go to `https://<your_local_ip>:8080`.
   
   Example: `https://192.168.1.100:8080`

Since you are using a self-signed certificate, you may get a security warning. Bypass it by proceeding to the site.

## Troubleshooting

- **Self-Signed Certificate Warning**: This is expected when using self-signed certificates. You can safely bypass this warning during development.
- **Port Conflicts**: If port `8080` is in use, specify a different port with the `-p` option:

  ```bash
  http-server -S -C cert.pem -K key.pem -p 3000
  ```
