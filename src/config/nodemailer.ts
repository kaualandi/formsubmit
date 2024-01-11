import 'dotenv/config';
import nodemailer from 'nodemailer';

export default nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 465,
  secure: Boolean(process.env.MAIL_SECURE),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
