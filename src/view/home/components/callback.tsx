"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/elements/button";
import { Input } from "@/components/elements/input";
import { BlurFade } from "@/components/elements/blur-fade";

const CALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop";

export function Callback() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="callback" className="bg-cloud px-6 pt-4 pb-12 lg:px-10 lg:pt-5 lg:pb-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-line/70 bg-ink shadow-[0_32px_80px_-48px_rgba(12,40,71,0.42)]">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="relative min-h-[16rem] lg:min-h-[32rem]">
            <Image
              src={CALLBACK_IMAGE}
              alt="Travel planner reviewing destinations"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover object-center"
              priority={false}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-ink/25 via-ink/55 to-ink lg:from-transparent lg:via-ink/35 lg:to-ink"
            />
          </div>

          <BlurFade className="flex items-center">
            <div className="w-full px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
              <p className="board-text text-xs font-semibold uppercase tracking-[0.22em] text-kingfisher-light">
                Personal travel support
              </p>
              <h2 className="mt-4 max-w-md font-display text-3xl leading-tight tracking-tight text-cloud sm:text-4xl lg:text-[2.35rem]">
                Fill the form for a call back
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-amber-light/90 sm:text-base">
                Share your route and dates — a UK planner will call you back within
                one working hour. No bots, no hold music.
              </p>

              {submitted ? (
                <div
                  className="mt-10 rounded-2xl border border-kingfisher/30 bg-kingfisher/10 px-5 py-4 text-sm leading-relaxed text-cloud/85"
                  role="status"
                >
                  Thanks — we&apos;ve got your details. A Skyward planner will be
                  in touch shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 max-w-md space-y-4">
                  <Input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="h-12 rounded-xl border-white/12 bg-white/5 text-cloud placeholder:text-cloud/40 focus-visible:border-kingfisher focus-visible:bg-white/8"
                  />
                  <Input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="h-12 rounded-xl border-white/12 bg-white/5 text-cloud placeholder:text-cloud/40 focus-visible:border-kingfisher focus-visible:bg-white/8"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Enter your phone"
                    className="h-12 rounded-xl border-white/12 bg-white/5 text-cloud placeholder:text-cloud/40 focus-visible:border-kingfisher focus-visible:bg-white/8"
                  />
                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="h-11 min-w-[9.5rem] rounded-xl px-6"
                    >
                      Send details
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
