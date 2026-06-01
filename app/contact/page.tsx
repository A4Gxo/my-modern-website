// src/app/contact/page.tsx
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Gyanaranjan Moharana",
  description: "Get in touch for job opportunities or freelance projects.",
};

export default function Contact() {
  return (
    // We add a little padding (py-12) so it isn't completely squished against the Navbar
    <main className="min-h-screen py-12">
      <ContactForm />
    </main>
  );
}