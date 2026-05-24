import type { Metadata } from "next";
import { LegalContactNote, LegalContent } from "@/components/legal-content";
import { PageHero } from "@/components/page-hero";
import { site, siteEmail } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your personal data.`,
};

const lastUpdated = "24 May 2026";

const sections = [
  {
    title: "Who we are",
    paragraphs: [
      `${site.name} Ltd (“we”, “us”, or “our”) is registered in England and Wales (Company No. 14582033). Our registered office is at ${site.address}.`,
      `For data protection enquiries, contact us at ${siteEmail} or ${site.emails[1]}.`,
    ],
  },
  {
    title: "What we collect",
    paragraphs: [
      "We may collect information you provide when you contact us, request information, subscribe to updates, or use our website — including your name, email address, telephone number, organisation, and the content of your messages.",
      "We automatically collect limited technical data when you visit our site, such as IP address, browser type, device information, and pages viewed, through cookies and similar technologies where applicable.",
    ],
  },
  {
    title: "How we use your data",
    paragraphs: [
      "We use personal data to respond to enquiries, provide advisory and related services, improve our website, send relevant communications (where permitted), and meet legal or regulatory obligations.",
      "Our lawful bases under UK GDPR may include consent, contractual necessity, legitimate interests in operating and developing our business, and compliance with legal duties.",
    ],
  },
  {
    title: "Sharing and retention",
    paragraphs: [
      "We do not sell your personal data. We may share it with trusted service providers who assist our operations (for example hosting or email), subject to appropriate safeguards, or where required by law.",
      "We retain personal data only for as long as needed for the purposes described above, unless a longer period is required by law.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "Under UK data protection law, you may have rights to access, rectify, erase, restrict or object to processing, data portability, and to withdraw consent where processing is based on consent.",
      "You may lodge a complaint with the Information Commissioner’s Office (ICO). We encourage you to contact us first so we can address your concerns.",
    ],
  },
  {
    title: "Security and international transfers",
    paragraphs: [
      "We implement appropriate technical and organisational measures to protect personal data. No method of transmission over the internet is completely secure.",
      "If we transfer data outside the UK, we will ensure appropriate safeguards are in place as required by applicable law.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this privacy policy from time to time. The “Last updated” date at the top of this page will reflect any changes. Continued use of our website after changes constitutes acceptance of the updated policy.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy."
        intro="How we collect, use, and protect personal information when you interact with our website and services."
      />
      <LegalContent lastUpdated={lastUpdated} sections={sections} />
      <LegalContactNote>
        Questions about this policy? Email{" "}
        <a
          href={`mailto:${siteEmail}`}
          className="font-medium text-ink underline underline-offset-[6px] decoration-rule hover:decoration-accent decoration-2 transition-colors"
        >
          {siteEmail}
        </a>
        .
      </LegalContactNote>
    </>
  );
}
