import type { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { getPageMetadata } from "@/data/site";

export const metadata: Metadata = getPageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Research inquiries and institutional contact."
          body="For collaboration, case referrals, media inquiries, and policy conversations."
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
