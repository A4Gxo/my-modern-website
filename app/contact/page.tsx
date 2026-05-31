// src/app/contact/page.tsx
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-white px-4 py-8 text-gray-900 lg:py-16">
      <div className="mx-auto max-w-screen-md">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight">
          Contact Us
        </h2>
        <p className="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </p>
        
        {/* Inject our client-side form here */}
        <ContactForm />
      </div>
    </section>
  );
}