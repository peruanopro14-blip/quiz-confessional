import { useState } from "react";
import { cn } from "@/lib/utils";

const occasionCards = [
  { emoji: "💕", title: "Dia dos Namorados", text: "Uma declaração que toca em cheio" },
  { emoji: "🥰", title: "Aniversários de casal", text: "A história de vocês virando refrão" },
  { emoji: "💌", title: "Declarações de amor", text: "O que você sente, finalmente dito" },
];

const examples = [
  {
    genre: "Sertanejo",
    title: "Desde Aquele Olhar",
    occasion: "Pedido de casamento",
    text: "Viola, sanfona e uma história que começou num churrasco de família.",
    color: "bg-flame/15 text-flame",
    progress: 38,
  },
  {
    genre: "Pop",
    title: "Nosso Ritmo",
    occasion: "Aniversário de namoro",
    text: "Refrão grudento para dançar na sala de casa.",
    color: "bg-pink/15 text-pink",
    progress: 62,
  },
  {
    genre: "MPB",
    title: "Raízes do Coração",
    occasion: "Homenagem à mãe",
    text: "Violão dedilhado, letra em versos de saudade boa.",
    color: "bg-violet/15 text-violet",
    progress: 24,
  },
  {
    genre: "Gospel",
    title: "Luz que Guia",
    occasion: "Nascimento",
    text: "Uma bênção cantada para o primeiro dia de vida.",
    color: "bg-success/15 text-success",
    progress: 51,
  },
];

function PlayerCard({ item }: { item: (typeof examples)[number] }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className={cn(
              "inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
              item.color,
            )}
          >
            {item.genre}
          </span>
          <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
          <p className="text-xs font-semibold text-muted-foreground">{item.occasion}</p>
        </div>
        <button
          type="button"
          aria-label={playing ? `Pausar ${item.title}` : `Tocar ${item.title}`}
          onClick={() => setPlaying((p) => !p)}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-soft transition-transform hover:scale-105"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          )}
        </button>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{item.text}</p>
      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-brand transition-all duration-500"
          style={{ width: `${playing ? item.progress : 0}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-[11px] font-semibold text-muted-foreground">
        <span>0:00</span>
        <span>2:48</span>
      </div>
    </div>
  );
}

export function OccasionsAndExamples() {
  return (
    <section className="bg-background px-4 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-5 sm:grid-cols-3">
          {occasionCards.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-border bg-card p-7 text-center shadow-soft"
            >
              <div className="text-4xl">{c.emoji}</div>
              <h3 className="mt-3 font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xl font-bold">
          Se é um momento que importa, <span className="text-gradient-brand">merece a sua música.</span>
        </p>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ouça exemplos por estilo</h2>
          <p className="mt-3 text-muted-foreground">
            Músicas reais criadas para nossos clientes. Cada estilo tem sua magia.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {examples.map((e) => (
            <PlayerCard key={e.title} item={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

const forWho = [
  "Quer dizer algo que as palavras sozinhas não conseguem expressar",
  "Quer dar um presente que ninguém vai esquecer",
  "Quer ver alguém genuinamente emocionado até as lágrimas",
  "Quer deixar uma memória que dure anos — não dias",
];

export function ForWho() {
  return (
    <section className="bg-background px-4 pb-20">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Para quem é</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {forWho.map((t) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-sm text-success">
                ✓
              </span>
              <p className="text-sm font-medium">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
