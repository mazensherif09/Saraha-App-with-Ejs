import nodemailer from 'nodemailer';
import { emailTemplate } from './emailTemplate.js';

 const sendEmail = async (email) => {

    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: "mazzensherif09@gmail.com",
          pass: "oxhbcvnvpuxmiwfp",
        },
      });

     const info = await transporter.sendMail({
        from: " 'Mazen Sherif' <mazzensherif09@gmail.com>",
        to: email,
        subject: "done",
        html: emailTemplate(email),
      });
      console.log("Message sent: %s", info.messageId);
}

export default sendEmail;

