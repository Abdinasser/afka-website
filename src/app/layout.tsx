import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afka Digital Institute | Digital Harm Research in the Somali-Speaking World",
  description:
    "Afka Digital Institute studies platform accountability, information ecosystems, and digital rights across Somali online spaces.",
  openGraph: {
    title: "Afka Digital Institute | Digital Harm Research in the Somali-Speaking World",
    description:
      "Afka Digital Institute studies platform accountability, information ecosystems, and digital rights across Somali online spaces.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
