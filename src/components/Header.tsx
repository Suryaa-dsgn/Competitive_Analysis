import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDown, Printer } from "@phosphor-icons/react";

interface NavItem {
  label: string;
  href: string;
  /** Section ids that make this item active. */
  sections: string[];
}

const primary: NavItem[] = [
  { label: "Overview", href: "#overview", sections: ["overview"] },
  { label: "Comparison", href: "#landscape", sections: ["landscape", "comparison", "sales"] },
  { label: "Opportunities", href: "#implications", sections: ["implications"] },
];

const more: NavItem[] = [
  { label: "Company intelligence", href: "#companies", sections: ["companies"] },
  { label: "Customer proof", href: "#proof", sections: ["proof"] },
  { label: "Founder discussion", href: "#discussion", sections: ["discussion"] },
  { label: "Sources", href: "#sources", sections: ["sources"] },
];

const allSectionIds = [...primary, ...more].flatMap((i) => i.sections);

/** Tracks which report section is under the sticky header. */
function useActiveSection() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const onScroll = () => {
      // The section whose top most recently passed under the header wins.
      let current = allSectionIds[0];
      let best = -Infinity;
      for (const id of allSectionIds) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= 120 && top > best) {
          best = top;
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

export function Header() {
  const active = useActiveSection();
  const moreActive = more.some((i) => i.sections.includes(active));

  const linkClass = (isActive: boolean) =>
    `rounded-md px-3 py-1.5 text-[13.5px] font-medium transition-colors ${
      isActive ? "bg-accent-soft text-accent-ink" : "text-muted hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur print:hidden">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center gap-4 px-5 lg:px-8">
        <a href="#overview" className="flex shrink-0 items-center gap-2 text-[15px] font-semibold tracking-tight text-ink">
          <span aria-hidden className="grid size-6 place-items-center rounded-md bg-accent text-[11px] font-bold text-white">
            Q
          </span>
          Quickflows.AI
        </a>

        <nav aria-label="Report sections" className="flex flex-1 items-center justify-center gap-1">
          {primary.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.sections.includes(active) ? "true" : undefined}
              className={`hidden sm:inline-block ${linkClass(item.sections.includes(active))}`}
            >
              {item.label}
            </a>
          ))}

          <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger
              className={`inline-flex items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-accent-line ${linkClass(moreActive)}`}
            >
              <span className="sm:hidden">Sections</span>
              <span className="hidden sm:inline">More</span>
              <CaretDown className="size-3.5" aria-hidden />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="center"
                sideOffset={8}
                className="z-40 min-w-52 rounded-lg border border-line bg-white p-1 shadow-lg shadow-slate-900/5"
              >
                {[...primary.map((i) => ({ ...i, mobileOnly: true })), ...more.map((i) => ({ ...i, mobileOnly: false }))].map(
                  (item) => (
                    <DropdownMenu.Item key={item.href} asChild>
                      <a
                        href={item.href}
                        className={`${item.mobileOnly ? "sm:hidden" : ""} block rounded-md px-3 py-2 text-[13.5px] outline-none data-[highlighted]:bg-subtle ${
                          item.sections.includes(active) ? "font-medium text-accent-ink" : "text-body"
                        }`}
                      >
                        {item.label}
                      </a>
                    </DropdownMenu.Item>
                  ),
                )}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </nav>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-line-strong bg-white px-3 py-1.5 text-[13px] font-medium text-ink transition-colors hover:border-accent hover:text-accent-ink"
        >
          <Printer className="size-4" aria-hidden />
          <span className="hidden sm:inline">Print / PDF</span>
        </button>
      </div>
    </header>
  );
}
