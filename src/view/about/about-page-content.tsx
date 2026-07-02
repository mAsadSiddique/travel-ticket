"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Check,
  Eye,
  FileText,
  Headphones,
  Mail,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BlurFade } from "@/components/elements/blur-fade";
import { BentoGrid, BentoGridItem } from "@/components/elements/bento-grid";
import { SectionHeader } from "@/components/elements/section-header";
import { aboutUs, SERVICE_ITEMS, WHY_CHOOSE_ITEMS } from "@/constant/content/about-us";
import { PHONE_DISPLAY, PHONE_TEL } from "@/constant/contact";
import { ROUTES } from "@/constant/routes";
import { cn } from "@/utils/utils";

function WhyChooseSection() {
  return (
    <section id="why-choose-us" className="mt-16 scroll-mt-28">
      <BlurFade>
        <SectionHeader
          title="Why Choose Get A Ticket?"
          description="Travel assistance built around clarity, choice, and support you can actually reach."
          className="max-w-none"
        />
      </BlurFade>
      <BlurFade delay={0.08}>
        <BentoGrid className="md:auto-rows-auto">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <BentoGridItem
                key={item.title}
                title={item.title}
                description={item.description}
                icon={
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-kingfisher/10 text-kingfisher ring-1 ring-kingfisher/10">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                }
                className={item.className}
              />
            );
          })}
        </BentoGrid>
      </BlurFade>
    </section>
  );
}

const COMMITMENT_ITEMS = aboutUs.sections.find((s) => s.id === "our-commitment")!.list!;

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] overflow-hidden">
      <div className="absolute -top-32 right-[-8%] h-80 w-80 rounded-full bg-kingfisher/12 blur-3xl" />
      <div className="absolute top-12 left-[-6%] h-64 w-64 rounded-full bg-kingfisher-light/25 blur-3xl" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.28]"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M-50 420 C 250 320, 450 500, 720 320 S 1250 180, 1500 260"
          fill="none"
          stroke="#1e93d8"
          strokeWidth="1.2"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function ServiceCard({
  label,
  description,
  icon: Icon,
  index,
}: {
  label: string;
  description: string;
  icon: typeof Plane;
  index: number;
}) {
  return (
    <BlurFade delay={0.04 * index} yOffset={20}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-line/80 bg-white/80 p-5 shadow-[0_12px_40px_-28px_rgba(12,40,71,0.45)] backdrop-blur-sm"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-kingfisher/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-kingfisher/10 text-kingfisher ring-1 ring-kingfisher/10 transition-colors duration-300 group-hover:bg-kingfisher group-hover:text-cloud">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <p className="relative mt-4 text-sm font-semibold leading-snug text-ink">{label}</p>
        <p className="relative mt-2 text-sm leading-relaxed text-ink/55">{description}</p>
      </motion.div>
    </BlurFade>
  );
}

const COMMITMENT_ICONS = [FileText, Headphones, Sparkles, BadgeCheck, Eye] as const;

function CommitmentSupportSection({
  commitmentItems,
  supportTitle,
  supportParagraphs,
}: {
  commitmentItems: string[];
  supportTitle: string;
  supportParagraphs: string[];
}) {
  return (
    <section className="mt-16 scroll-mt-28">
      <div className="grid w-full overflow-hidden rounded-[1.75rem] border border-line shadow-[0_24px_70px_-40px_rgba(12,40,71,0.35)] lg:grid-cols-2">
        <BlurFade delay={0.05} className="h-full">
          <div
            id="our-commitment"
            className="h-full scroll-mt-28 bg-gradient-to-br from-white via-white to-cloud/80 p-8 sm:p-10 lg:p-12"
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Our Commitment
            </h2>
            <p className="mt-3 text-base text-ink/60">We are committed to:</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {commitmentItems.map((item, i) => {
                const Icon = COMMITMENT_ICONS[i] ?? ShieldCheck;
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className={cn(
                      "group flex gap-3 rounded-2xl border border-line/80 bg-white/70 p-4 transition-all duration-300 hover:border-kingfisher/25 hover:shadow-[0_12px_32px_-24px_rgba(30,147,216,0.45)]",
                      i === commitmentItems.length - 1 && commitmentItems.length % 2 !== 0
                        ? "sm:col-span-2"
                        : undefined
                    )}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kingfisher/10 text-kingfisher ring-1 ring-kingfisher/10 transition-colors group-hover:bg-kingfisher group-hover:text-cloud">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="pt-1.5 text-sm leading-relaxed text-ink/80 sm:text-[0.9375rem]">
                      {item}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </BlurFade>

        <BlurFade delay={0.1} className="h-full">
          <div
            id="customer-support"
            className="relative flex h-full min-h-full scroll-mt-28 flex-col justify-between overflow-hidden bg-ink p-8 text-cloud sm:p-10 lg:p-12"
          >
            <div
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-kingfisher/60 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-kingfisher/10 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-kingfisher/15 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-kingfisher/15 text-kingfisher-light ring-1 ring-kingfisher/25">
                <Headphones className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-kingfisher-light">
                Here to help
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-cloud sm:text-3xl">
                {supportTitle}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-cloud/70">
                {supportParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Travel enquiries", "Booking support", "Itinerary help"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-cloud/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@skyward.co.uk"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-cloud transition-colors hover:border-kingfisher-light/40 hover:bg-white/10 sm:flex-none"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
              <motion.a
                href={`tel:${PHONE_TEL}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2.5 rounded-full bg-kingfisher px-6 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(30,147,216,0.8)] transition-colors hover:bg-kingfisher-light sm:flex-none"
              >
                <Phone className="h-4 w-4" strokeWidth={2.25} />
                {PHONE_DISPLAY}
              </motion.a>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

const CONTACT_TRUST_ITEMS = [
  "UK-based travel support",
  "No obligation enquiry",
  "Friendly specialist guidance",
] as const;

function ContactSection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section id="contact-us" className="mt-16 scroll-mt-28">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink px-6 py-14 text-center shadow-[0_32px_80px_-40px_rgba(12,40,71,0.65)] sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-kingfisher/70 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-kingfisher/12 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-kingfisher/10 blur-3xl"
          aria-hidden
        />

        <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-kingfisher-light">
          Let&apos;s talk
        </p>

        <h2 className="relative mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.75rem]">
          <span className="block text-cloud">Turn your travel plans into</span>
          <span className="mt-1 block text-kingfisher-light">trips that take off</span>
        </h2>

        <p className="relative mx-auto mt-6 max-w-lg text-base leading-relaxed text-cloud/55 sm:text-lg">
          {paragraphs[0] ??
            "If you have questions about flights, holidays, or travel arrangements, our team is here to help."}
        </p>

        <motion.a
          href={`tel:${PHONE_TEL}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative mt-10 inline-flex w-full max-w-md items-center justify-center gap-2.5 rounded-full bg-kingfisher px-8 py-4 text-base font-semibold text-white shadow-[0_0_48px_-10px_rgba(30,147,216,0.85)] transition-colors hover:bg-kingfisher-light sm:w-auto"
        >
          Contact us
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
        </motion.a>

        <ul className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-2">
          {CONTACT_TRUST_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-cloud/50"
            >
              <Check className="h-4 w-4 shrink-0 text-kingfisher-light" strokeWidth={2.5} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AboutPageContent() {
  const importantInfo = aboutUs.sections.find((s) => s.id === "important-information");
  const customerSupport = aboutUs.sections.find((s) => s.id === "customer-support");
  const whatWeDo = aboutUs.sections.find((s) => s.id === "what-we-do");
  const contactUs = aboutUs.sections.find((s) => s.id === "contact-us");

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
              <li className="text-ink/70">{aboutUs.title}</li>
            </ol>
          </nav>
        </BlurFade>

        <BlurFade static>
          <header className="flex w-full flex-col items-start gap-6 sm:gap-7">
            <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {aboutUs.title}
            </h1>
            <div className="w-full space-y-4 text-base leading-relaxed text-ink/65 sm:text-lg">
              {aboutUs.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="route-rule w-full max-w-md" />
          </header>
        </BlurFade>

        <section id="what-we-do" className="mt-16 scroll-mt-28">
          <BlurFade>
            <SectionHeader
              title={whatWeDo!.title}
              description={whatWeDo!.listIntro!}
              className="max-w-none"
            />
          </BlurFade>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_ITEMS.map((item, index) => (
              <ServiceCard key={item.label} {...item} index={index} />
            ))}
          </div>

          {whatWeDo!.paragraphs?.map((paragraph, i) => (
            <BlurFade key={paragraph} delay={0.1 + i * 0.05}>
              <p className="mt-8 text-base leading-relaxed text-ink/65 sm:text-lg">
                {paragraph}
              </p>
            </BlurFade>
          ))}
        </section>

        <CommitmentSupportSection
          commitmentItems={COMMITMENT_ITEMS}
          supportTitle={customerSupport!.title}
          supportParagraphs={customerSupport!.paragraphs ?? []}
        />

        <WhyChooseSection />

        {importantInfo && (
          <BlurFade delay={0.06}>
            <section
              id="important-information"
              className="mt-16 scroll-mt-28 overflow-hidden rounded-3xl border border-kingfisher/20 bg-gradient-to-r from-kingfisher/[0.08] via-white/80 to-kingfisher/[0.05] p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kingfisher/10 text-kingfisher ring-1 ring-kingfisher/15">
                  <AlertCircle className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {importantInfo.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/70">
                    {importantInfo.paragraphs!.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </BlurFade>
        )}

        <BlurFade delay={0.08}>
          <ContactSection paragraphs={contactUs!.paragraphs ?? []} />
        </BlurFade>
      </div>
    </main>
  );
}
