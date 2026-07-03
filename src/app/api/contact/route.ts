import { NextResponse } from "next/server";
import { parseContactFormPayload, sendContactEmail } from "@/utils/contact-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseContactFormPayload(body);

    if (!payload) {
      return NextResponse.json(
        { error: "Please fill in all required fields with valid details." },
        { status: 400 }
      );
    }

    await sendContactEmail(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);

    const message =
      error instanceof Error ? error.message : "Failed to send contact email";

    let userMessage =
      "We couldn't send your message right now. Please try again or contact us by phone or email.";

    if (message.includes("RESEND_API_KEY")) {
      userMessage =
        "Email service is not configured. Please add RESEND_API_KEY to your environment.";
    } else if (message.includes("domain is not verified")) {
      userMessage =
        "Email could not be sent because getaticket.co.uk is not verified in Resend yet.";
    } else if (message.includes("only allows delivery to your Resend account email")) {
      userMessage =
        "Email testing is limited until getaticket.co.uk is verified in Resend. Please verify your domain to deliver enquiries to info@getaticket.co.uk.";
    }

    return NextResponse.json({ error: userMessage }, { status: 500 });
  }
}
