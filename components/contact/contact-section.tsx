import { ContactDetails } from '@/components/contact/contact-details';
import { ContactForm } from '@/components/contact/contact-form';
import { Container } from '@/components/ui/container';

export function ContactSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <ContactDetails />
        <ContactForm />
      </Container>
    </section>
  );
}
