import type { Metadata } from "next";
import { LegalContactNote, LegalContent } from "@/components/legal-content";
import { PageHero } from "@/components/page-hero";
import { site, siteEmail } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${site.name} website and services.`,
};

const lastUpdated = "24 May 2026";

const sections = [
  {
    title: "Agreement",
    paragraphs: [
      `These terms and conditions (“Terms”) govern your use of the website operated by ${site.name} Ltd (“we”, “us”, or “our”). By accessing or using this website, you agree to these Terms.`,
      "If you engage us for advisory, training, digital products, or other services, separate contractual terms will apply to that engagement and will prevail where they conflict with these Terms.",
    ],
  },
  {
    title: "Use of the website",
    paragraphs: [
      "You may use this website for lawful purposes only. You must not attempt to gain unauthorised access to our systems, introduce malware, scrape content without permission, or use the site in any way that could harm us or third parties.",
      "We aim to keep information on this site accurate and current but do not warrant that content is complete, error-free, or suitable for every purpose. Professional advice should be sought before acting on general information published here.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      `Unless otherwise stated, all content on this website — including text, graphics, logos, and design — is owned by or licensed to ${site.name} Ltd and protected by intellectual property laws.`,
      "You may view and download content for personal, non-commercial use. You may not reproduce, distribute, modify, or exploit our content without our prior written consent.",
    ],
  },
  {
    title: "Products and services",
    paragraphs: [
      "Descriptions of our services, products, and digital offerings on this site are for general information. Availability, scope, fees, and delivery terms will be confirmed in a proposal, statement of work, or purchase agreement.",
      "Nothing on this website constitutes a binding offer until we have agreed terms in writing with you.",
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, we exclude liability for indirect, consequential, or special loss arising from your use of this website.",
      "Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under English law.",
    ],
  },
  {
    title: "Third-party links",
    paragraphs: [
      "Our website may link to third-party sites. We are not responsible for their content, policies, or practices. Accessing linked sites is at your own risk.",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "These Terms are governed by the laws of Abuja, Nigeria. The courts of Abuja have exclusive jurisdiction over disputes arising from or relating to these Terms and use of this website, subject to any mandatory rights you may have under applicable consumer law.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "We may revise these Terms at any time by posting an updated version on this page. Your continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & conditions."
        intro="The terms that apply when you use our website and engage with Kane & Scholars."
      />
      <LegalContent lastUpdated={lastUpdated} sections={sections} />
      <LegalContactNote>
        Questions about these terms? Email{" "}
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
