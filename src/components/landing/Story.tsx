import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const pains = [
  "São todos iguais",
  "São esquecidos em uma semana",
  "Acabam no fundo da gaveta",
];

const solutionItems = [
  { icon: "🫶", label: "Os nomes de vocês" },
  { icon: "📖", label: "A história de vocês" },
  { icon: "✍️", label: "As suas palavras" },
  { icon: "🎚️", label: "O tom certo" },
];

const differentials = [
  {
    icon: "📝",
    title: "Escrita sobre a sua história",
    text: "Cada palavra nasce dos detalhes que você conta",
  },
  {
    icon: "🎭",
    title: "Com o seu tom",
    text: "Romântico, divertido, profundo... você escolhe, nós criamos",
  },
  {
    icon: "🎧",
    title: "Áudio profissional",
    text: "Qualidade de estúdio, mistura e masterização incluídas",
  },
  {
    icon: "💝",
    title: "Pronta para emocionar",
    text: "Link, áudio, download — como você preferir",
  },
];

const steps = [
  {
    title: "Escolha a ocasião",
    text: "Casamento, aniversário, formatura... ou qualquer momento especial",
  },
  { title: "Conte a história", text: "Nomes, histórias, memórias, o tom que você quer" },
  {
    title: "Receba a música",
    text: "Áudio profissional, letra completa, pronta para surpreender",
  },
];

export function Problem() {
  return (
    <section className="bg-background px-4 py-20">
      <div className="mx-auto w-full max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Já reparou que presente não emociona mais ninguém?
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p}
              className="rounded-2xl border border-border bg-card p-6 text-left shadow-soft"
            >
              <span className="text-2xl text-destructive">❌</span>
              <p className="mt-3 font-semibold">{p}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-lg text-muted-foreground">
          E quando chega um momento que importa de verdade, você percebe que não tem nada à
          altura.
        </p>
        <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-gradient-brand p-[1.5px] shadow-glow">
          <div className="rounded-3xl bg-card px-6 py-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gradient-brand">
              ✨ A verdade ✨
            </span>
            <p className="mt-4 text-xl font-bold leading-snug sm:text-2xl">
              As pessoas não se lembram do que você deu. Lembram de como você as fez sentir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Solution() {
  return (
    <section className="bg-rose-surface px-4 py-20">
      <div className="mx-auto w-full max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          E se, em vez de um presente, você desse uma emoção?
        </h2>
        <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-soft">
          <h3 className="text-xl font-bold sm:text-2xl">
            🎵 A resposta: <span className="text-gradient-brand">uma música escrita só para eles</span>
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutionItems.map((i) => (
              <div key={i.label} className="rounded-2xl bg-muted px-4 py-6">
                <div className="text-3xl">{i.icon}</div>
                <p className="mt-2 text-sm font-semibold">{i.label}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-lg text-muted-foreground">
          Uma música que não existia antes e que nunca mais vai existir igual.
        </p>
      </div>
    </section>
  );
}

export function Differentials() {
  return (
    <section className="bg-accent/40 px-4 py-20">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
          Não é uma música qualquer
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="text-3xl">{d.icon}</div>
              <h3 className="mt-4 text-lg font-bold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-background px-4 py-20">
      <div className="mx-auto w-full max-w-2xl">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Como funciona</h2>
        <ol className="relative mt-12 space-y-10 pl-14">
          <span
            className="absolute left-[22px] top-3 h-[calc(100%-2rem)] w-[2px] bg-gradient-brand"
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-14 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand font-display text-lg font-extrabold text-primary-foreground shadow-soft">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-center text-xl font-bold">
          Você conta a história. <span className="text-gradient-brand">Nós transformamos em música.</span>
        </p>
        <div className="mt-8 text-center">
          <Button asChild variant="cta" size="xl">
            <Link to="/criar">Começar agora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
