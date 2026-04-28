import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afka Digital Institute | Digital Harm Research in the Somali-Speaking World",
  description:
    "Afka Digital Institute documents digital harm, platform accountability failures, AI moderation gaps, and online rights issues affecting Somali-speaking communities.",
  openGraph: {
    title: "Afka Digital Institute | Digital Harm Research in the Somali-Speaking World",
    description:
      "Afka Digital Institute documents digital harm, platform accountability failures, AI moderation gaps, and online rights issues affecting Somali-speaking communities.",
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
