"use server";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
} | null;


export async function submitContactForm(
  data: z.infer<typeof ContactFormSchema>
): Promise<{ success: boolean; message: string; errors?: any }> {
  const validatedFields = ContactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would send an email or save to a database here.
  // For example, using Nodemailer or an email service API.
  // console.log("Contact form submitted:", validatedFields.data);

  // Simulate network delay
  // await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error
  // if (validatedFields.data.name === "Error") {
  //   return {
  //     success: false,
  //     message: "An unexpected error occurred while sending the message.",
  //   };
  // }

  return {
    success: true,
    message: "Thank you! Your message has been sent successfully.",
  };
}
