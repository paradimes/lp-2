import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z
    .string()
    .min(10)
    .refine((value) => value.length > 10, {
      message: "Please provide some more detail",
      path: ["."],
    }),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;
