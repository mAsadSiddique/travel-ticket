import Link from "next/link";
import type { LegalSection } from "@/content/legal-types";

type LegalDocumentProps = {
  title: string;
  intro: string[];
  sections: LegalSection[];
};

function LegalBlock({
  heading,
  paragraphs,
  list,
  listIntro,
}: LegalSection["blocks"][number]) {
  return (
    <div className="mt-4 space-y-4 first:mt-0">
      {heading && (
        <h3 className="font-display text-xl font-semibold text-ink">{heading}</h3>
      )}

      {paragraphs?.map((paragraph) => (
        <p key={paragraph} className="text-base leading-relaxed text-ink/70">
          {paragraph}
        </p>
      ))}

      {listIntro && (
        <p className="mt-4 text-base leading-relaxed text-ink/70">{listIntro}</p>
      )}

      {list && (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-ink/70">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function LegalDocument({ title, intro, sections }: LegalDocumentProps) {
  return (
    <main className="bg-cloud pb-24 pt-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-ink/50">
            <li>
              <Link href="/" className="transition-colors hover:text-kingfisher">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink/70">{title}</li>
          </ol>
        </nav>

        <header className="mb-12 border-b border-ink/10 pb-10">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-ink">
                {section.title}
              </h2>

              {section.blocks.map((block, index) => (
                <LegalBlock key={`${section.id}-${index}`} {...block} />
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
