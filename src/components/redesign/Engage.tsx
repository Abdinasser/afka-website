import Link from "next/link";

import { MotionSection } from "@/components/Motion";
import { contactEmail } from "@/data/site";

const engagementPaths = [
  {
    label: "Partner with Afka",
    body:
      "Co-author research, host a collaborative review, or build a joint accountability project with civil society or academic partners.",
    action: "Open a conversation",
    href: `mailto:${contactEmail}?subject=Partnership%20inquiry`
  },
  {
    label: "Commission research",
    body:
      "Brief Afka on a specific question of platform behaviour, moderation, or AI governance in Somali-speaking spaces.",
    action: "Send a brief",
    href: `mailto:${contactEmail}?subject=Commissioned%20research`
  },
  {
    label: "Share evidence",
    body:
      "Refer cases, send tip-offs, or pass on documentation. Submissions are treated confidentially and reviewed by named researchers.",
    action: "Share a case",
    href: `mailto:${contactEmail}?subject=Case%20referral`
  },
  {
    label: "Follow the work",
    body:
      "Track Afka's research as it is released. We do not run a marketing list — only research outputs and short notes.",
    action: "Get research updates",
    href: `mailto:${contactEmail}?subject=Research%20updates`
  }
];

export function Engage() {
  return (
    <MotionSection
      id="engage"
      aria-labelledby="redesign-engage-heading"
      className="redesign-section redesign-section-engage"
    >
      <div className="redesign-section-rule redesign-section-rule-dark" aria-hidden="true" />
      <div className="redesign-container">
        <header className="redesign-section-head redesign-section-head-dark">
          <p className="redesign-section-mark redesign-section-mark-dark">
            <span className="redesign-roman">VI.</span>
            <span>Engage</span>
          </p>
          <h2
            id="redesign-engage-heading"
            className="redesign-section-title font-serif-display"
          >
            Four ways to work with Afka.
          </h2>
          <p className="redesign-section-body redesign-section-body-dark">
            Afka is an independent research institute. Engagement is editorial:
            we accept research questions, evidence, and partnerships — and we
            decline anything that would compromise our independence.
          </p>
        </header>

        <div className="redesign-engage-grid">
          {engagementPaths.map((item, index) => (
            <article key={item.label} className="redesign-engage-card">
              <span className="redesign-engage-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="redesign-engage-title font-serif-display">
                {item.label}
              </h3>
              <p className="redesign-engage-body">{item.body}</p>
              <a className="redesign-engage-action focus-ring" href={item.href}>
                <span>{item.action}</span>
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="redesign-engage-coda">
          <p className="redesign-engage-coda-eyebrow">Direct line</p>
          <a
            className="redesign-engage-coda-mail focus-ring font-serif-display"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>
          <p className="redesign-engage-coda-note">
            For collaboration, case referrals, media inquiries, and policy
            conversations.
          </p>
          <Link
            href="/"
            className="redesign-engage-coda-link focus-ring"
          >
            Return to the current live site
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
