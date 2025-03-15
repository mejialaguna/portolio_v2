import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().email({ message: "Email is required" }),
  subject: z
    .string()
    .trim()
    .min(10, { message: "Subject is required or Subject is to small" })
    .max(100),
  message: z
    .union([z.literal(""), z.string().trim().max(1000)])
    .refine((value) => value !== "", {
      message: "this is required to be able to contact me.",
    }),
});

export type TContactForm = z.infer<typeof contactFormSchema>;
