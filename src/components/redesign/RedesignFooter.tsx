import Image from "next/image";
import Link from "next/link";

import { MotionFooter } from "@/components/Motion";
import { SocialLinks } from "@/components/SocialLinks";
import { contactEmail } from "@/data/site";

const footerSections = [
  {
    label: "Research",
    links: [
      { label: "Mission", href: "#mission" },
      { label: "Focus", href: "#focus" },
      { label: "Outputs", href: "#outputs" }
    ]
  },
  {
    label: "Institute",
    links: [
      { label: "Method", href: "#method" },
      { label: "Audiences", href: "#audiences" },
      { label: "Engage", href: "#engage" }
    ]
  },
  {
    label: "Live site",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Research", href: "/research" }
    ]
  }
];

export function RedesignFooter() {
  return (
    <MotionFooter
      id="site-footer"
      className="redesign-footer"
    >
      <div className="redesign-container">
        <div className="redesign-footer-rule" aria-hidden="true" />

        <div className="redesign-footer-top">
          <div className="redesign-footer-brand">
            <Link
              href="/redesign"
              aria-label="Afka Digital Institute home"
              className="focus-ring inline-flex"
            >
              <Image
                src="/images/afka-wordmark-light.png"
                alt="Afka Digital Institute"
                width={816}
                height={324}
                className="h-auto w-36 sm:w-44"
              />
            </Link>
            <p className="redesign-footer-tagline font-serif-display">
              Evidence on digital harm in the Somali-speaking world.
            </p>
            <p className="redesign-footer-blurb">
              Independent research on platform accountability, Somali-language
              moderation, information integrity, AI governance, online gendered
              harm, and digital rights.
            </p>
          </div>

          <div className="redesign-footer-cols">
            {footerSections.map((section) => (
              <nav
                key={section.label}
                className="redesign-footer-col"
                aria-label={section.label}
              >
                <p className="redesign-footer-col-label">{section.label}</p>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="focus-ring redesign-footer-link"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="redesign-footer-col">
              <p className="redesign-footer-col-label">Contact</p>
              <a
                className="redesign-footer-mail focus-ring"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
              <div className="redesign-footer-social">
                <SocialLinks tone="dark" compact />
              </div>
            </div>
          </div>
        </div>

        <div className="redesign-footer-bottom">
          <p>Afka Digital Institute</p>
          <p>Preview · Concept v2</p>
          <p>© 2026</p>
        </div>
      </div>
    </MotionFooter>
  );
}
