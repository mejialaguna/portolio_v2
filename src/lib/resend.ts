'use server';

import { Resend } from 'resend';

import type { TContactForm } from './validations';
const resend = new Resend(process.env.RESEND_KEY);

export const sendEmail = async (formData: TContactForm) => {
  const { name, email, subject, message } = formData;
  const recipientEmail = process.env.EMAIL_KEY;
  const resendEmail = process.env.RESEND_EMAIL;

  if (!recipientEmail || !resendEmail) {
    return {
      error: `${!recipientEmail ? 'Recipient' : 'Resend'} email is not set in environment variables`,
    };
  }

  try {
    const data = await resend.emails.send({
      to: recipientEmail,
      from: resendEmail,
      subject: `${subject}`,
      text: `Sender: ${name} (${email})\n\n${message}`,
    });

    return { data };
  } catch (error) {
    return { error };
  }
};
