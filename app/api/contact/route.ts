import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactEnquiryEmailHtml,
  contactEnquirySubject,
} from "@/lib/emails/contact-enquiry";
import { siteEmail } from "@/lib/site-data";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const from = "onboarding@resend.dev";
const to = process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL ?? siteEmail;

export async function POST(request: Request) {
  if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email is not configured. Please contact us directly." },
      { status: 503 },
    );
  }

  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "Website enquiry").trim();
  const message = String(body.message ?? "").trim();
  const organisation = String(body.organisation ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in name, email, and message." },
      { status: 400 },
    );
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: contactEnquirySubject(subject),
    html: contactEnquiryEmailHtml({
      name,
      email,
      subject,
      message,
      organisation: organisation || undefined,
      phone: phone || undefined,
    }),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
