"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState, type FormEvent, type ReactNode, useEffect } from "react";
import { CheckCircle2, Clock3, Info, Mail, MapPin, Phone } from "lucide-react";
import { BlurFade } from "@/components/elements/blur-fade";
import { Button } from "@/components/elements/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/elements/dialog";
import { Input } from "@/components/elements/input";
import { Textarea } from "@/components/elements/textarea";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/constant/contact";
import { ROUTES } from "@/constant/routes";
import { cn } from "@/utils/utils";
import {
  buildEnquiryMessage,
  buildEnquirySubject,
  parseFlightSearchEnquiry,
} from "@/utils/contact-redirect";
import { useHydrated } from "@/hooks/use-hydrated";

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

const CONTACT_SUCCESS_MESSAGE =
  "Thank you for your contact. Our team will get back to you shortly.";

function ContactSuccessModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-6 px-8 py-10 text-center sm:max-w-md">
        <DialogHeader className="items-center gap-4 pr-0 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-kingfisher/10 text-kingfisher ring-8 ring-kingfisher/5">
            <CheckCircle2 className="h-8 w-8" strokeWidth={1.75} />
          </span>
          <DialogTitle className="text-center text-2xl font-semibold tracking-tight">
            Message received
          </DialogTitle>
          <DialogDescription className="max-w-sm text-center text-base leading-relaxed text-ink/65">
            {CONTACT_SUCCESS_MESSAGE}
          </DialogDescription>
        </DialogHeader>

        <p className="text-sm text-ink/45">
          We aim to reply within one working day.
        </p>

        <Button
          type="button"
          variant="primary"
          size="lg"
          className="h-11 w-full rounded-xl"
          onClick={() => onOpenChange(false)}
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
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
  const hydrated = useHydrated();
  const searchParams = useSearchParams();
  const searchEnquiry = useMemo(
    () => parseFlightSearchEnquiry(searchParams),
    [searchParams]
  );
  const showSearchBanner = hydrated && Boolean(searchEnquiry);

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!searchEnquiry) return;
    setSubject(buildEnquirySubject(searchEnquiry));
    setMessage(buildEnquiryMessage(searchEnquiry));
  }, [searchEnquiry]);

  function resetForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setConsent(false);
    setSubject(searchEnquiry ? buildEnquirySubject(searchEnquiry) : "");
    setMessage(searchEnquiry ? buildEnquiryMessage(searchEnquiry) : "");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    resetForm();
    setSuccessModalOpen(true);
    setIsSubmitting(false);

    void fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  return (
    <main className="relative overflow-hidden bg-cloud pb-24 pt-28">
      <AmbientBackground />

      <ContactSuccessModal
        open={successModalOpen}
        onOpenChange={setSuccessModalOpen}
      />

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

        {showSearchBanner && (
          <BlurFade delay={0.04}>
            <div
              className="mt-8 flex gap-4 rounded-2xl border border-kingfisher/20 bg-gradient-to-r from-kingfisher/[0.08] via-white to-kingfisher/[0.04] p-5 sm:p-6"
              role="status"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kingfisher/10 text-kingfisher ring-1 ring-kingfisher/15">
                <Info className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  Online route search is not available yet
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">
                  The route you searched for is not currently available to book online. Please
                  contact us with your travel details and our team will help you find the best
                  options for your trip.
                </p>
              </div>
            </div>
          </BlurFade>
        )}

        <div className={cn("grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:gap-10", showSearchBanner ? "mt-8" : "mt-12")}>
          <BlurFade delay={0.05}>
            <section className="rounded-[1.75rem] border border-line bg-white p-6 shadow-[0_20px_60px_-40px_rgba(12,40,71,0.35)] sm:p-8">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Fill in the form below and we&apos;ll respond to your enquiry promptly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="First Name" htmlFor="firstName">
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
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
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
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
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
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
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </FormField>
                </div>

                <FormField label="Subject" htmlFor="subject">
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    placeholder="Subject"
                  />
                </FormField>

                <FormField label="Your Message" htmlFor="message">
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Message"
                  />
                </FormField>

                <div className="flex flex-col gap-5 border-t border-line/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-start gap-3 text-sm text-ink/70">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={consent}
                      onChange={(event) => setConsent(event.target.checked)}
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
