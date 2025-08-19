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


async function otpSend(userMail,userName,otp){
    let htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                <!-- Header -->
                <div style="background: linear-gradient(90deg, #4f46e5, #6366f1); padding: 20px; text-align: center; color: white;">
                    <h1 style="margin: 0;">🔑 OTP Verification</h1>
                </div>
    
                <!-- Body -->
                <div style="padding: 20px; background: #fafafa;">
                    <p style="font-size: 16px; color: #333;">
                    Hello <b>${userName}</b>,<br><br>
                    To complete your verification, please use the OTP below:
                    </p>
    
                    <!-- OTP Box -->
                    <div style="text-align: center; margin: 30px 0;">
                    <div style="display: inline-block; background: #ffffff; padding: 15px 30px; border: 2px dashed #4f46e5; border-radius: 8px; font-size: 24px; font-weight: bold; letter-spacing: 4px; color: #4f46e5;">
                        ${otp}
                    </div>
                    </div>
    
                    <p style="font-size: 14px; color: #555; text-align: center;">
                    ⚠️ This OTP will expire in <b>10 minutes</b>. Please do not share it with anyone.
                    </p>
                </div>
    
                <!-- Footer -->
                <div style="background: #f3f4f6; text-align: center; padding: 15px; font-size: 13px; color: #666;">
                    &copy; 2025 Your Company. All rights reserved.
                </div>
            </div>
    
        `;
    const info = await transporter.sendMail({
    from: 'arnabdutta8584@gmail.com',
    to: userMail,
    subject: "Hello ✔",
    text: "HIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii hhhhhhhhhhhhhhhhhhhhhhh ggggggggggggggggggggg", // plain‑text body
    html: htmlContent, // HTML body
  });

  console.log("Message sent:", info.messageId);
}

otpSend("arnabduttaspam@gmail.com", "Arnab Dutta", "545456");
    
