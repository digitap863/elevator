import nodemailer from 'nodemailer';

export async function sendContactEmail(data) {
  const { name, contact, email, service, location, message } = data;

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;

  if (!host || !user || !pass) {
    console.warn('⚠️ SMTP settings (SMTP_HOST, SMTP_USER, SMTP_PASS) not fully configured in environment variables. Email notification skipped.');
    return { sent: false, reason: 'SMTP credentials missing' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #C10510; padding: 20px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 22px;">New Contact Submission</h2>
          <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Reliant Elevators Website Inquiry</p>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555; width: 140px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Contact No:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111;"><a href="tel:${contact}" style="color: #C10510; text-decoration: none;">${contact}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111;"><a href="mailto:${email}" style="color: #C10510; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Service:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111;">${service || 'General Inquiry'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Location:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; color: #111;">${location || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #111; line-height: 1.5;">${message ? message.replace(/\n/g, '<br/>') : '<em>No message provided</em>'}</td>
            </tr>
          </table>
        </div>
        <div style="background-color: #f9f9f9; padding: 15px; text-align: center; color: #888; font-size: 12px; border-top: 1px solid #eee;">
          Sent automatically from Reliant Elevators Contact Form
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Reliant Elevators Website" <${user}>`,
      to: receiver,
      replyTo: email,
      subject: `[New Inquiry] ${name} - ${service || 'Contact Form'}`,
      html: htmlContent,
    });

    return { sent: true };
  } catch (error) {
    console.error('❌ Error sending contact notification email:', error);
    return { sent: false, error: error.message };
  }
}
