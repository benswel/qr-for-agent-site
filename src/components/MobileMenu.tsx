import { useState } from "react";

interface MobileMenuProps {
  links: Array<{ label: string; href: string }>;
  cta?: { text: string; href: string };
}

export default function MobileMenu({ links, cta }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center text-foreground"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-background">
          <nav className="flex flex-col gap-1 px-4 py-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[var(--radius-md)] px-4 py-3 text-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
            {cta && (
              <a
                href={cta.href}
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {cta.text}
              </a>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
