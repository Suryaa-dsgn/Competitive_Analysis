import { discussionQuestions } from "../data/research";
import { discussionIcons } from "./icons";
import { Section } from "./primitives";

export function Discussion() {
  return (
    <Section
      id="discussion"
      index="07"
      title="Founder discussion"
      summary="Decisions needed to turn this research into pipeline."
      className="print:pt-6"
    >
      <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 print:grid-cols-4">
        {discussionQuestions.map(({ icon, question }, i) => {
          const Icon = discussionIcons[icon];
          return (
            <li key={question} className="flex items-start gap-4 bg-white px-5 py-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line text-muted">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-0.5 text-[16px] font-medium leading-snug text-ink print:text-[13px]">{question}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
