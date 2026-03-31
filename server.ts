import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    console.log("Received contact request:", req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      // Lazy initialization of transporter
      const user = process.env.EMAIL_USER;
      const pass = process.env.EMAIL_PASS;

      console.log("Email config check:", { hasUser: !!user, hasPass: !!pass });

      if (!user || !pass) {
        console.warn("EMAIL_USER or EMAIL_PASS not set. Logging message instead.");
        console.log("Contact Form Submission (Simulated):", { name, email, message });
        return res.json({ 
          success: true, 
          message: "Message received (simulated). Please configure EMAIL_USER and EMAIL_PASS in Settings for real emails." 
        });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
      });

      console.log("Attempting to send email to:", "anoopkaur444@gmail.com");
      
      await transporter.sendMail({
        from: `"${name}" <${user}>`, // Gmail often requires 'from' to be the auth user
        to: "anoopkaur444@gmail.com",
        subject: `New Portfolio Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email
      });

      console.log("Email sent successfully");
      res.json({ success: true, message: "Email sent successfully!" });
    } catch (error: any) {
      console.error("Error in /api/contact:", error);
      res.status(500).json({ 
        error: "Failed to send email", 
        details: error?.message || "Unknown error" 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
