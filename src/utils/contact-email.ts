import { Resend } from "resend";
import { EMAIL } from "@/constant/contact";
import { SITE_NAME } from "@/constant/site-meta-data";

export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function parseContactFormPayload(body: unknown): ContactFormPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const fields = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
  };

  for (const value of Object.values(fields)) {
    if (typeof value !== "string" || !value.trim()) return null;
  }

  const firstName = fields.firstName as string;
  const lastName = fields.lastName as string;
  const email = (fields.email as string).trim();
  const phone = fields.phone as string;
  const subject = fields.subject as string;
  const message = fields.message as string;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;

  return {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email,
    phone: phone.trim(),
    subject: subject.trim(),
    message: message.trim(),
  };
}

function buildContactEmailHtml(payload: ContactFormPayload) {
  const rows = [
    ["Name", `${payload.firstName} ${payload.lastName}`],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Subject", payload.subject],
    ["Message", payload.message],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;color:#0c2847;vertical-align:top;width:120px;">
            ${label}
          </td>
          <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#334155;white-space:pre-wrap;">
            ${value}
          </td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0c2847;max-width:640px;">
      <h2 style="margin:0 0 16px;font-size:22px;">New contact form submission</h2>
      <p style="margin:0 0 20px;color:#475569;">
        A visitor submitted the contact form on ${SITE_NAME}.
      </p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  `;
}

export async function sendContactEmail(payload: ContactFormPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const to = process.env.CONTACT_TO_EMAIL || EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL || `${SITE_NAME} <onboarding@resend.dev>`;

  const resend = new Resend(apiKey);
  const fullName = `${payload.firstName} ${payload.lastName}`;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `[Contact Form] ${payload.subject}`,
    text: [
      `New contact form submission from ${SITE_NAME}`,
      "",
      `Name: ${fullName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Subject: ${payload.subject}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
    html: buildContactEmailHtml(payload),
  });

  if (error) {
    if (error.message.includes("domain is not verified")) {
      throw new Error(
        "The sender domain is not verified in Resend. Verify getaticket.co.uk at https://resend.com/domains, then use an address like noreply@getaticket.co.uk."
      );
    }

    if (error.message.includes("only send testing emails to your own email address")) {
      throw new Error(
        "Resend test mode only allows delivery to your Resend account email. Verify getaticket.co.uk in Resend to send enquiries to info@getaticket.co.uk."
      );
    }

    throw new Error(error.message);
  }
}
