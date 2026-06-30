"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { DestinationSearchModal } from "@/components/ui/destination-search-modal";
import { destinations, type Destination } from "@/data/travel";

function DestinationCarouselCard({
  destination,
  onSelect,
}: {
  destination: Destination;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group relative block aspect-[3/4] w-56 shrink-0 cursor-pointer overflow-hidden rounded-2xl text-left sm:w-64 md:w-72"
    >
      <Image
        src={destination.image}
        alt={`${destination.name}, ${destination.country}`}
        fill
        sizes="(max-width:768px) 224px, 288px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-90" />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-shadow duration-500 group-hover:ring-kingfisher/50" />

      <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
        {destination.tag}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-cloud">
        <div>
          <h3 className="font-display text-xl">{destination.name}</h3>
          <p className="text-xs text-cloud/70">{destination.country}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="board-text text-lg font-semibold text-kingfisher-light">
            £{destination.price}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-cloud/60">
            from <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </button>
  );
}

export function DestinationsCarousel() {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openSearchModal = (destination: Destination) => {
    setSelectedDestination(destination);
    setModalOpen(true);
  };

  const items = destinations.map((destination) => (
    <DestinationCarouselCard
      key={destination.name}
      destination={destination}
      onSelect={() => openSearchModal(destination)}
    />
  ));

  const handleModalOpenChange = (open: boolean) => {
    setModalOpen(open);
    if (!open) setSelectedDestination(null);
  };

  return (
    <>
      <Carousel items={items} />
      <DestinationSearchModal
        open={modalOpen}
        onOpenChange={handleModalOpenChange}
        destination={selectedDestination}
      />
    </>
  );
}
