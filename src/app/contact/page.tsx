import type { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact | Afka Digital Institute",
  description:
    "Contact Afka Digital Institute for research partnerships, media requests, institutional inquiries, and platform engagement."
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Contact Afka."
          body="Research partnerships, media requests, platform engagement, and institutional inquiries."
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
