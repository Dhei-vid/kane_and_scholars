import { site } from "@/lib/site-data";

export type ContactEnquiryEmail = {
  name: string;
  email: string;
  subject: string;
  message: string;
  organisation?: string;
  phone?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatMultiline(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #e5e0d6;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#7a7568;width:140px;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:12px 0 12px 16px;border-bottom:1px solid #e5e0d6;font-size:15px;line-height:1.5;color:#2a2d35;vertical-align:top;">
        ${value}
      </td>
    </tr>
  `;
}

export function contactEnquiryEmailHtml({
  name,
  email,
  subject,
  message,
  organisation,
  phone,
}: ContactEnquiryEmail) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = formatMultiline(message);
  const year = new Date().getFullYear();

  const optionalRows = [
    organisation ? row("Organisation", escapeHtml(organisation)) : "",
    phone ? row("Phone", escapeHtml(phone)) : "",
  ].join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New enquiry — ${site.name}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f1eb;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f3f1eb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:#faf9f6;border:1px solid #e5e0d6;">
            <!-- Header -->
            <tr>
              <td style="padding:32px 32px 24px;border-bottom:1px solid #e5e0d6;">
                <p style="margin:0 0 10px;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#4f5f3e;font-family:ui-sans-serif,system-ui,sans-serif;">
                  New enquiry
                </p>
                <h1 style="margin:0;font-size:28px;font-weight:400;line-height:1.15;color:#2a2d35;letter-spacing:-0.02em;">
                  ${escapeHtml(site.name)}
                </h1>
              </td>
            </tr>

            <!-- Subject highlight -->
            <tr>
              <td style="padding:24px 32px;background-color:#eef0e8;">
                <p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#7a7568;font-family:ui-sans-serif,system-ui,sans-serif;">
                  Subject
                </p>
                <p style="margin:0;font-size:20px;line-height:1.35;color:#2a2d35;">
                  ${safeSubject}
                </p>
              </td>
            </tr>

            <!-- Contact details -->
            <tr>
              <td style="padding:8px 32px 0;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  ${row("Name", safeName)}
                  ${row("Email", `<a href="mailto:${safeEmail}" style="color:#4f5f3e;text-decoration:underline;">${safeEmail}</a>`)}
                  ${optionalRows}
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding:24px 32px 32px;">
                <p style="margin:0 0 10px;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#7a7568;font-family:ui-sans-serif,system-ui,sans-serif;">
                  Message
                </p>
                <div style="padding:20px;background-color:#ffffff;border:1px solid #e5e0d6;font-size:15px;line-height:1.65;color:#424652;font-family:ui-sans-serif,system-ui,sans-serif;">
                  ${safeMessage}
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px 32px 28px;border-top:1px solid #e5e0d6;background-color:#f3f1eb;">
                <p style="margin:0 0 8px;font-size:13px;line-height:1.5;color:#5c616e;font-family:ui-sans-serif,system-ui,sans-serif;">
                  Reply directly to this email to respond to <strong style="color:#2a2d35;">${safeName}</strong>.
                </p>
                <p style="margin:0;font-size:12px;line-height:1.5;color:#7a7568;font-family:ui-sans-serif,system-ui,sans-serif;">
                  ${escapeHtml(site.name)} · ${escapeHtml(site.address)}<br />
                  © ${year} ${escapeHtml(site.name)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function contactEnquirySubject(subject: string) {
  return `[${site.name}] ${subject}`;
}
