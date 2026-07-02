"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";
import { tours, type Tour } from "@/constant/location-data";
import { BlurFade } from "@/components/elements/blur-fade";
import { SectionHeader } from "@/components/elements/section-header";
import { DestinationSearchModal } from "@/components/elements/destination-search-modal";

export function Tours() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openSearchModal = (tour: Tour) => {
    setSelectedTour(tour);
    setModalOpen(true);
  };

  const handleModalOpenChange = (open: boolean) => {
    setModalOpen(open);
    if (!open) setSelectedTour(null);
  };

  return (
    <section id="tours" className="pt-4 pb-4 lg:pt-5 lg:pb-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <BlurFade>
          <SectionHeader
            title="Amazing tours"
            description="Flights, stays, and guided days bundled into one fare — built by travel planners who've done the route themselves."
          />
        </BlurFade>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t, i) => (
            <BlurFade key={t.name} delay={i * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-[0_24px_45px_-20px_rgba(17,32,58,0.25)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cloud/90 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur-sm">
                    {t.days} days / {t.nights} nights
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg text-ink">{t.name}</h3>
                      <p className="text-xs text-ink/50">{t.location}</p>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-kingfisher/10 px-2 py-1 text-xs font-semibold text-kingfisher">
                      <Star className="h-3 w-3 fill-kingfisher text-kingfisher" /> {t.rating}
                    </span>
                  </div>
                  <div className="route-rule mt-1" />
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-ink/40">from</p>
                      <p className="board-text text-xl font-semibold text-ink">
                        £{t.price}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openSearchModal(t)}
                      className="inline-flex h-7 cursor-pointer items-center justify-center rounded-full px-3 text-[0.8rem] font-medium btn-neo"
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>

      <DestinationSearchModal
        open={modalOpen}
        onOpenChange={handleModalOpenChange}
        tour={selectedTour}
      />
    </section>
  );
}
