import * as Accordion from "@radix-ui/react-accordion";

interface FAQProps {
  items: Array<{ question: string; answer: string }>;
}

export default function FAQ({ items }: FAQProps) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="border-b border-border"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left font-medium text-foreground transition-colors hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span>{item.question}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="pb-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.answer }} />
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
