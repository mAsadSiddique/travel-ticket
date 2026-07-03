"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { BlurFade } from "@/components/elements/blur-fade";
import { Button } from "@/components/elements/button";
import { Input } from "@/components/elements/input";
import { Textarea } from "@/components/elements/textarea";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/constant/contact";
import { ROUTES } from "@/constant/routes";
import { cn } from "@/utils/utils";

function FormField({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Address",
    value: ADDRESS,
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Clock3,
    label: "Response time",
    value: "We aim to reply within one working day.",
    href: undefined,
  },
] as const;

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] overflow-hidden">
      <div className="absolute -top-32 right-[-8%] h-80 w-80 rounded-full bg-kingfisher/12 blur-3xl" />
      <div className="absolute top-12 left-[-6%] h-64 w-64 rounded-full bg-kingfisher-light/25 blur-3xl" />
    </div>
  );
}

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Failed to send your message.");
      }

      setSubmitted(true);
      form.reset();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Failed to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative overflow-hidden bg-cloud pb-24 pt-28">
      <AmbientBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <BlurFade static>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-ink/50">
              <li>
                <Link href={ROUTES.home} className="transition-colors hover:text-kingfisher">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink/70">Contact Us</li>
            </ol>
          </nav>
        </BlurFade>

        <BlurFade static>
          <header className="max-w-3xl">
            <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink/65 sm:text-lg">
              Have a question about flights, holidays, or travel plans? Send us a message and our
              UK team will get back to you as soon as possible.
            </p>
            <div className="route-rule mt-7 max-w-md" />
          </header>
        </BlurFade>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:gap-10">
          <BlurFade delay={0.05}>
            <section className="rounded-[1.75rem] border border-line bg-white p-6 shadow-[0_20px_60px_-40px_rgba(12,40,71,0.35)] sm:p-8">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Fill in the form below and we&apos;ll respond to your enquiry promptly.
              </p>

              {submitted ? (
                <div
                  className="mt-8 rounded-2xl border border-kingfisher/20 bg-kingfisher/5 px-5 py-4 text-sm leading-relaxed text-ink/75"
                  role="status"
                >
                  Thank you for contacting Get A Ticket. We&apos;ve received your message and will
                  be in touch shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {error && (
                    <div
                      className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm leading-relaxed text-red-700"
                      role="alert"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="First Name" htmlFor="firstName">
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        placeholder="First Name"
                      />
                    </FormField>
                    <FormField label="Last Name" htmlFor="lastName">
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        placeholder="Last Name"
                      />
                    </FormField>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Email Address" htmlFor="email">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Email Address"
                      />
                    </FormField>
                    <FormField label="Phone Number" htmlFor="phone">
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="Phone Number"
                      />
                    </FormField>
                  </div>

                  <FormField label="Subject" htmlFor="subject">
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Subject"
                    />
                  </FormField>

                  <FormField label="Your Message" htmlFor="message">
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Message"
                    />
                  </FormField>

                  <div className="flex flex-col gap-5 border-t border-line/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <label className="flex items-start gap-3 text-sm text-ink/70">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-0.5 h-4 w-4 rounded border-line text-kingfisher focus:ring-kingfisher/30"
                      />
                      <span>I confirm the information provided is accurate.</span>
                    </label>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="h-11 min-w-[10.5rem] rounded-xl px-6 sm:ml-auto"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </section>
          </BlurFade>

          <BlurFade delay={0.1}>
            <aside className="space-y-4">
              <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-[0_20px_60px_-40px_rgba(12,40,71,0.35)] sm:p-7">
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                  Get in touch
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  Prefer to reach us directly? Use any of the details below.
                </p>

                <ul className="mt-6 space-y-5">
                  {CONTACT_DETAILS.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kingfisher/10 text-kingfisher ring-1 ring-kingfisher/10">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-ink/75">
                            {item.value}
                          </span>
                        </span>
                      </>
                    );

                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="flex gap-3 transition-colors hover:text-kingfisher [&_span]:hover:text-kingfisher"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex gap-3">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-kingfisher/15 bg-gradient-to-br from-kingfisher/[0.08] via-white to-cloud p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold text-ink">Need help booking?</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  Call our team for flight and holiday enquiries — we&apos;re here to help you find
                  the right option.
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-kingfisher transition-colors hover:text-kingfisher-light"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </aside>
          </BlurFade>
        </div>
      </div>
    </main>
  );
}
