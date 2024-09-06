# VirtualLinac



# Serve Files Locally Over HTTPS

This guide explains how to serve HTML files locally over HTTPS using `http-server` and self-signed certificates. This setup allows you to test AR features on mobile devices that require HTTPS.

## Prerequisites

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
