const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "arnabdutta8584@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});




let htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(90deg, #4f46e5, #6366f1); padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0;">✨ Welcome to Our Service!</h1>
        </div>
        <div style="padding: 20px; background: #fafafa;">
          <p style="font-size: 16px; color: #333;">
            Hello <b>User</b>,<br><br>
            We’re excited to have you onboard 🎉. Here’s a quick summary:
          </p>
          <ul style="color: #444; font-size: 15px;">
            <li>✔ Access to exclusive features</li>
            <li>✔ Weekly updates</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://your-website.com" style="background: #4f46e5; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 16px;">
              Get Started
            </a>
          </div>
          <p style="font-size: 14px; color: #777;">
            If you didn’t sign up, please ignore this email.
          </p>
        </div>
        <div style="background: #f3f4f6; text-align: center; padding: 15px; font-size: 13px; color: #666;">
          &copy; 2025 Your Company. All rights reserved.
        </div>
      </div>
    `;
    
// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from: 'arnabdutta8584@gmail.com',
    to: "arnabduttaspam@gmail.com",
    subject: "Hello ✔",
    text: "HIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii hhhhhhhhhhhhhhhhhhhhhhh ggggggggggggggggggggg", // plain‑text body
    html: htmlContent, // HTML body
  });

  console.log("Message sent:", info.messageId);
})();