import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const occasions = ["Nascimento", "Casamento", "Aniversário", "Dia dos Namorados", "Dia das Mães"];

export function Hero() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="bg-gradient-night px-4 pb-20 pt-28 text-night-foreground sm:pt-32">
      <div className="mx-auto w-full max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-night-foreground/20 bg-night-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
          Música personalizada com IA
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
          O presente que emociona{" "}
          <span className="text-gradient-warm">até as lágrimas.</span>
        </h1>
        <p className="mt-5 text-lg text-night-foreground/75 sm:text-xl">
          Crie uma música para quem você mais ama.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {occasions.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => setSelected(o === selected ? null : o)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                selected === o
                  ? "border-transparent bg-gradient-brand text-primary-foreground shadow-glow"
                  : "border-night-foreground/20 bg-night-foreground/5 text-night-foreground/80 hover:bg-night-foreground/15",
              )}
            >
              {o}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <Button asChild variant="cta" size="xl">
            <Link to="/criar">🎵 Criar minha música</Link>
          </Button>
          <p className="mt-4 text-sm text-night-foreground/60">
            Em poucos minutos. Sem saber nada de música.
          </p>
        </div>
      </div>
    </section>
  );
}
