"use server";

import { Resend } from "resend";

import type { TContactForm } from "./validations";
const resend = new Resend(process.env.RESEND_KEY);

export const sendEmail = async (formData: TContactForm) => {
  const { name, email, subject, message } = formData;
  const recipientEmail = process.env.EMAIL_KEY;

  if (!recipientEmail) {
    return { error: "Recipient email is not set in environment variables" };
  }

  try {
    const data = await resend.emails.send({
      to: recipientEmail,
      from: "onboard@resend.dev",
      subject: `${subject}`,
      text: `Sender: ${name} (${email})\n\n${message}`,
    });

    return { data };
  } catch (error) {
    return { error };
  }
};
