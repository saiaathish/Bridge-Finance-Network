import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Who can join Bridge Finance Network?",
    answer:
      "BFN is open to motivated high school and college students interested in finance. We welcome members at all experience levels — what matters most is your commitment to learning and contributing to the community.",
  },
  {
    question: "How does the application process work?",
    answer:
      "Apply through our online form, share a bit about your interests and goals, and our team reviews each application. Approved members get access to curated opportunities, resources, and the wider network.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "No. BFN is a student-led nonprofit and membership is free. Our mission is to make credible finance opportunities accessible to every motivated student.",
  },
  {
    question: "What do members get access to?",
    answer:
      "Members get curated internships and programs, competition and deadline tracking, learning resources, published research, and the ability to join or lead a local chapter.",
  },
  {
    question: "Can I start a chapter at my school?",
    answer:
      "Yes. Students can apply to launch a chapter, build a leadership team, and host local sessions while staying connected to the national network. Reach out and our team will help you get started.",
  },
  {
    question: "How can I get involved beyond membership?",
    answer:
      "Members can take on leadership roles, contribute research, mentor newer members, help organize events, or lead a chapter. There are many paths to grow within the network.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ADA996] to-[#F2F2F2] rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-black" />
            <span className="text-xs text-black uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="font-sans text-5xl font-normal mb-6 text-balance">Frequently asked questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Bridge Finance Network. Can&apos;t find your answer? Reach out to our team.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-foreground/30"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
