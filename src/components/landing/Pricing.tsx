import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const included = [
  "Letra escrita a partir da sua história",
  "Voz realista e profissional",
  "Produção, mistura e masterização incluídas",
  "Entrega em minutos",
  "Perfeita — mesmo em cima da hora",
];

const faq = [
  {
    q: "Posso escolher o estilo musical?",
    a: "Sim. Você escolhe entre sertanejo, forró, pagode, pop, gospel, MPB, rock e outros. Se estiver em dúvida, é só clicar em “Não sei — escolham por mim” e a gente indica o estilo que mais combina com a sua história.",
  },
  {
    q: "Preciso me cadastrar para criar?",
    a: "Não. Você preenche o funil de criação, informa seu WhatsApp no final e recebe a música por lá. Sem senha, sem cadastro demorado.",
  },
  {
    q: "Quanto tempo demora para ficar pronta?",
    a: "Na maioria dos casos a música fica pronta em poucos minutos após o pagamento. Em horários de pico pode levar um pouco mais.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Pix, cartão de crédito e boleto. O pagamento é único, de R$ 29,90, sem assinatura nem cobrança recorrente.",
  },
  {
    q: "Posso pedir alterações depois de pronta?",
    a: "Sim. Se algum detalhe da história não ficou como você imaginou, é só falar com o suporte no WhatsApp que ajustamos a letra e geramos uma nova versão.",
  },
  {
    q: "Em que formato eu recebo?",
    a: "Você recebe um link para ouvir e compartilhar, o arquivo de áudio para download e a letra completa em texto.",
  },
  {
    q: "A música é só minha?",
    a: "Sim. Cada música é gerada exclusivamente a partir da sua história e não é reaproveitada para ninguém.",
  },
];

export function Pricing() {
  return (
    <section id="precos" className="bg-rose-surface px-4 py-20">
      <div className="mx-auto w-full max-w-lg text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Crie sua música hoje</h2>
        <div className="mt-10 rounded-3xl bg-gradient-brand p-[2px] shadow-glow">
          <div className="rounded-3xl bg-card p-8">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-accent-foreground">
              🎵 Música Personalizada
            </span>
            <div className="mt-6">
              <span className="font-display text-5xl font-extrabold">R$ 29,90</span>
              <p className="mt-1 text-sm text-muted-foreground">pagamento único</p>
            </div>
            <ul className="mt-8 space-y-3 text-left">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-xs text-success">
                    ✓
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <Button asChild variant="cta" size="xl" className="mt-8 w-full">
              <a
                href="https://checkoutseguro.info/checkout/cmtf59ns10cp101o7ktfz9c61?offer=IH60834"
                target="_blank"
                rel="noopener noreferrer"
              >
                Criar minha música
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="bg-background px-4 py-20">
      <div className="mx-auto w-full max-w-2xl">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="mt-10">
          {faq.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-gradient-brand px-4 py-20 text-center text-primary-foreground">
      <div className="mx-auto w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Os momentos passam. As músicas ficam.
        </h2>
        <p className="mt-4 text-primary-foreground/85">
          Crie algo único, pessoal e eterno para quem mais importa.
        </p>
        <Button
          asChild
          size="xl"
          variant="soft"
          className="mt-8 bg-background text-foreground hover:bg-background/90"
        >
          <Link to="/criar">🎵 Criar minha música</Link>
        </Button>
      </div>
    </section>
  );
}

const reviews = [
  { name: "Camila R.", text: "Chorei junto quando ela ouviu. Valeu cada centavo." },
  { name: "Rodrigo P.", text: "Chegou em 15 minutos e ficou melhor do que eu esperava." },
  { name: "Juliana M.", text: "A letra tinha detalhes que só nós dois sabíamos." },
  { name: "Anderson L.", text: "Usei no aniversário da minha mãe. Foi o momento da festa." },
  { name: "Patrícia S.", text: "Escolhi sertanejo e ficou com cara de música de rádio." },
  { name: "Thiago F.", text: "Pedi um ajuste na letra e refizeram na hora." },
];

export function Reviews() {
  return (
    <section className="bg-muted/50 px-4 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
          Quem já emocionou alguém com música
        </h2>
        <p className="mt-3 text-center text-sm font-semibold text-muted-foreground">
          ⭐ 4.8 · 5000 avaliações de clientes
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="text-sm text-flame">★★★★★</div>
              <p className="mt-3 text-sm text-muted-foreground">“{r.text}”</p>
              <p className="mt-4 text-sm font-bold">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
