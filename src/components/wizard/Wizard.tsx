import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import {
  genres,
  initialData,
  maskPhone,
  moods,
  occasions,
  recipients,
  relationsFemale,
  relationsMale,
  storyPrompts,
  SURPRISE,
  type Option,
  type WizardData,
} from "./data";

const TOTAL_STEPS = 9;
const MIN_STORY = 50;

function SelectCard({
  option,
  selected,
  onSelect,
}: {
  option: Option;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "relative flex flex-col items-center justify-center gap-1 rounded-2xl border-2 bg-card px-3 py-4 text-center transition-all",
        selected
          ? "border-violet shadow-glow"
          : "border-border hover:border-violet/40 hover:shadow-soft",
      )}
    >
      {option.emoji && <span className="text-2xl">{option.emoji}</span>}
      <span className="text-sm font-semibold leading-tight">{option.label}</span>
      {selected && (
        <span className="absolute right-2 top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand text-[11px] text-primary-foreground">
          ✓
        </span>
      )}
    </button>
  );
}

function SurpriseButton({ selected, onSelect }: { selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "mt-5 w-full rounded-2xl border-2 border-dashed px-4 py-4 text-sm font-bold transition-colors",
        selected
          ? "border-violet bg-accent text-accent-foreground"
          : "border-border text-muted-foreground hover:border-violet/50 hover:text-foreground",
      )}
    >
      ✨ {SURPRISE}
    </button>
  );
}

function MicButton({ onText }: { onText: (t: string) => void }) {
  const [listening, setListening] = useState(false);

  const start = () => {
    const w = window as unknown as {
      webkitSpeechRecognition?: new () => any;
      SpeechRecognition?: new () => any;
    };
    const Ctor = w.SpeechRecognition ?? w.webkitSpeechRecognition;
    if (!Ctor) {
      alert("Seu navegador não suporta ditado por voz. Você pode digitar normalmente.");
      return;
    }
    const rec = new Ctor();
    rec.lang = "pt-BR";
    rec.interimResults = false;
    rec.continuous = false;
    rec.onresult = (e: any) => onText(String(e.results[0][0].transcript));
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    setListening(true);
    rec.start();
  };

  return (
    <Button
      type="button"
      variant={listening ? "brand" : "soft"}
      size="sm"
      className="rounded-full"
      onClick={start}
    >
      🎤 {listening ? "Ouvindo..." : "Falar"}
    </Button>
  );
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: React.ReactNode;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-step-in">
      <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </div>
  );
}

export function Wizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<WizardData>({ ...initialData });
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof WizardData>(key: K, value: WizardData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const name = data.recipientName.trim() || "essa pessoa";
  const progress = Math.round((step / TOTAL_STEPS) * 100);

  const canContinue = useMemo(() => {
    switch (step) {
      case 1:
        return !!data.recipient;
      case 2:
        return data.recipientName.trim().length >= 2;
      case 3:
        return !!data.myRelation;
      case 4:
        return !!data.occasion;
      case 5:
        return data.story.trim().length >= MIN_STORY;
      case 6:
        return !!data.genre;
      case 7:
        return !!data.mood;
      case 8:
        return data.nameInSong.trim().length >= 2;
      case 9:
        return data.whatsapp.replace(/\D/g, "").length >= 12;
      default:
        return false;
    }
  }, [step, data]);

  const next = () => {
    if (step === 8 && !data.nameInSong) set("nameInSong", data.recipientName);
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const handleSubmit = async () => {
    const { error } = await supabase.from("quiz_submissions").insert({
      recipient: data.recipient,
      recipient_name: data.recipientName,
      my_relation: data.myRelation,
      occasion: data.occasion,
      story: data.story,
      moments: data.moments,
      genre: data.genre,
      mood: data.mood,
      name_in_song: data.nameInSong,
      special_phrase: data.specialPhrase,
      whatsapp: data.whatsapp,
    });
    if (error) console.error("Erro ao salvar respostas:", error.message);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-md animate-step-in px-4 py-24 text-center">
        <div className="text-5xl">🎵</div>
        <h1 className="mt-4 text-2xl font-extrabold">Tudo pronto!</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Recebemos a sua história. Assim que o pagamento for confirmado, enviamos a música de{" "}
          {data.nameInSong || name} no WhatsApp {data.whatsapp}.
        </p>
        <Button asChild variant="cta" size="xl" className="mt-8">
          <Link to="/">Voltar ao início</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/50 pb-32">
      <div className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto w-full max-w-2xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <span className="text-xs font-bold text-muted-foreground">{progress}%</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-bold text-muted-foreground">
            <span>
              Passo {step} de {TOTAL_STEPS}
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-brand transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-2xl px-4 py-10">
        {step === 1 && (
          <StepShell
            title="Quem vai RECEBER a música?"
            subtitle="Escolha a pessoa que será homenageada — é para ela que a letra será escrita"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {recipients.map((r) => (
                <SelectCard
                  key={r.label}
                  option={r}
                  selected={data.recipient === r.label}
                  onSelect={() => set("recipient", r.label)}
                />
              ))}
            </div>
          </StepShell>
        )}

        {step === 2 && (
          <StepShell
            title="Qual o nome de quem vai RECEBER a música?"
            subtitle="Coloque o nome ou apelido de quem vai receber a homenagem. Esse nome vai aparecer na letra da música."
          >
            <Input
              autoFocus
              value={data.recipientName}
              onChange={(e) => set("recipientName", e.target.value)}
              placeholder="Ex: Ana"
              maxLength={40}
              className="h-16 rounded-2xl text-center text-xl font-bold"
            />
          </StepShell>
        )}

        {step === 3 && (
          <StepShell
            title="Qual seu parentesco com essa pessoa?"
            subtitle="Selecione quem é VOCÊ em relação a quem vai receber a música"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-bold">🧑 Eu sou o...</p>
                <div className="grid gap-2">
                  {relationsMale.map((r) => (
                    <SelectCard
                      key={r}
                      option={{ label: r }}
                      selected={data.myRelation === r}
                      onSelect={() => set("myRelation", r)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-bold">👩 Eu sou a...</p>
                <div className="grid gap-2">
                  {relationsFemale.map((r) => (
                    <SelectCard
                      key={r}
                      option={{ label: r }}
                      selected={data.myRelation === r}
                      onSelect={() => set("myRelation", r)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button
                type="button"
                variant={data.myRelation === "Outro" ? "brand" : "soft"}
                size="pill"
                onClick={() => set("myRelation", "Outro")}
              >
                Outro
              </Button>
            </div>
          </StepShell>
        )}

        {step === 4 && (
          <StepShell title="Qual a ocasião?" subtitle="Escolha o momento que você quer eternizar">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {occasions.map((o) => (
                <SelectCard
                  key={o.label}
                  option={o}
                  selected={data.occasion === o.label}
                  onSelect={() => set("occasion", o.label)}
                />
              ))}
            </div>
          </StepShell>
        )}

        {step === 5 && (
          <StepShell
            title={`Conte a história de você e a ${name}`}
            subtitle="Quanto mais detalhes, mais especial será a música"
          >
            <div className="flex flex-wrap gap-2">
              {storyPrompts.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() =>
                    set("story", `${data.story ? `${data.story.trim()}\n` : ""}${p}: `)
                  }
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition-colors hover:border-violet/50"
                >
                  {p}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <label htmlFor="story" className="text-sm font-bold">
                  Sua história
                </label>
                <MicButton onText={(t) => set("story", `${data.story} ${t}`.trim())} />
              </div>
              <Textarea
                id="story"
                value={data.story}
                maxLength={2000}
                onChange={(e) => set("story", e.target.value)}
                placeholder="Ex: A gente se conheceu no trabalho, ela ria de todas as minhas piadas ruins e um dia me esperou na chuva só para dizer boa noite..."
                className="mt-3 min-h-40 resize-none rounded-xl"
              />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span
                  className={cn(
                    data.story.trim().length < MIN_STORY && "font-semibold text-destructive",
                  )}
                >
                  Mínimo 50 caracteres
                </span>
                <span>{data.story.length}/2000</span>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <label htmlFor="moments" className="text-sm font-bold">
                  Momentos especiais para mencionar
                </label>
                <MicButton onText={(t) => set("moments", `${data.moments} ${t}`.trim())} />
              </div>
              <Textarea
                id="moments"
                value={data.moments}
                maxLength={800}
                onChange={(e) => set("moments", e.target.value)}
                placeholder="Ex: primeiro encontro no parque, viagem para a praia, pedido de casamento..."
                className="mt-3 min-h-24 resize-none rounded-xl"
              />
            </div>
          </StepShell>
        )}

        {step === 6 && (
          <StepShell
            title="Gênero musical"
            subtitle="Escolha o estilo que combina com a homenagem"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {genres.map((g) => (
                <SelectCard
                  key={g}
                  option={{ label: g }}
                  selected={data.genre === g}
                  onSelect={() => set("genre", g)}
                />
              ))}
            </div>
            <SurpriseButton
              selected={data.genre === SURPRISE}
              onSelect={() => set("genre", SURPRISE)}
            />
          </StepShell>
        )}

        {step === 7 && (
          <StepShell title="Clima da música" subtitle="Como você quer que a música soe?">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {moods.map((m) => (
                <SelectCard
                  key={m.label}
                  option={m}
                  selected={data.mood === m.label}
                  onSelect={() => set("mood", m.label)}
                />
              ))}
            </div>
            <SurpriseButton
              selected={data.mood === SURPRISE}
              onSelect={() => set("mood", SURPRISE)}
            />
          </StepShell>
        )}

        {step === 8 && (
          <StepShell
            title="Detalhes finais"
            subtitle="Últimos ajustes antes de criarmos sua música"
          >
            <div className="space-y-5">
              <div className="rounded-2xl border border-border bg-card p-5">
                <label htmlFor="nameInSong" className="text-sm font-bold">
                  Nome que vai aparecer na música
                </label>
                <p className="mt-1 text-xs text-muted-foreground">
                  Pode ser diferente do nome real — um apelido carinhoso, por exemplo.
                </p>
                <Input
                  id="nameInSong"
                  value={data.nameInSong}
                  maxLength={40}
                  onChange={(e) => set("nameInSong", e.target.value)}
                  placeholder={data.recipientName || "Ex: Aninha"}
                  className="mt-3 h-12 rounded-xl"
                />
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <label htmlFor="phrase" className="text-sm font-bold">
                  Frase especial para incluir na música{" "}
                  <span className="font-normal text-muted-foreground">(opcional)</span>
                </label>
                <Textarea
                  id="phrase"
                  value={data.specialPhrase}
                  maxLength={300}
                  onChange={(e) => set("specialPhrase", e.target.value)}
                  placeholder="Ex: uma frase que só vocês entendem, uma promessa, algo marcante que você quer garantir que apareça na letra"
                  className="mt-3 min-h-24 resize-none rounded-xl"
                />
              </div>
            </div>
          </StepShell>
        )}

        {step === 9 && (
          <StepShell
            title="Revisão"
            subtitle="Confira tudo antes de criarmos a sua música. Você pode voltar e editar."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Para quem", data.recipient],
                ["Nome", data.recipientName],
                ["Eu sou", data.myRelation],
                ["Ocasião", data.occasion],
                ["Gênero", data.genre],
                ["Clima", data.mood],
                ["Nome na música", data.nameInSong || data.recipientName],
                ["Frase especial", data.specialPhrase || "—"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-2xl border border-border bg-card p-4">
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                Sua história
              </p>
              <p className="mt-1 whitespace-pre-line text-sm">{data.story}</p>
              {data.moments && (
                <p className="mt-3 text-sm text-muted-foreground">Momentos: {data.moments}</p>
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <label htmlFor="whats" className="text-sm font-bold">
                Seu WhatsApp para receber a música
              </label>
              <Input
                id="whats"
                inputMode="tel"
                value={data.whatsapp}
                onChange={(e) => set("whatsapp", maskPhone(e.target.value))}
                placeholder="+55 (11) 91234-5678"
                className="mt-3 h-12 rounded-xl"
              />
            </div>

            <div className="mt-6 rounded-3xl bg-gradient-brand p-[2px] shadow-glow">
              <div className="rounded-3xl bg-card p-6 text-center">
                <p className="font-display text-4xl font-extrabold">R$ 37,90</p>
                <p className="mt-1 text-sm text-muted-foreground">pagamento único</p>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              🔒 Pagamento seguro · Entrega em minutos
            </p>
          </StepShell>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-4 backdrop-blur">
        <div className="mx-auto flex w-full max-w-2xl items-center gap-3">
          {step > 1 ? (
            <Button variant="soft" size="pill" onClick={() => setStep((s) => s - 1)}>
              Voltar
            </Button>
          ) : (
            <Button asChild variant="soft" size="pill">
              <Link to="/">Voltar</Link>
            </Button>
          )}
          {step < TOTAL_STEPS ? (
            <Button
              variant="cta"
              size="pill"
              className="flex-1"
              disabled={!canContinue}
              onClick={next}
            >
              Continuar
            </Button>
          ) : (
            <Button
              variant="cta"
              size="pill"
              className="flex-1"
              disabled={!canContinue}
              onClick={handleSubmit}
            >
              Finalizar e criar minha música 🎵
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
