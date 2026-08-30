const testimonials = [
  {
    quote:
      "Coloquei a música na hora do jantar e todo mundo parou. Meu marido chorou antes do primeiro refrão.",
    name: "Maria, 34",
    occasion: "Aniversário de casamento",
  },
  {
    quote:
      "Tocamos na festa dos meus avós e virou o momento da noite. Todo mundo pediu pra ouvir de novo.",
    name: "Família Santos",
    occasion: "Festa dos avós",
  },
  {
    quote:
      "Entrei na igreja com a nossa música. Nenhuma canção pronta diria o que aquela letra disse.",
    name: "Sofia, 28",
    occasion: "Casamento",
  },
];

const chats = [
  {
    number: "+55 13 991**-**",
    occasion: "Dia das Mães",
    messages: [
      { from: "them", text: "Filha, eu não consigo parar de chorar 😭" },
      { from: "them", text: "Ouvi três vezes seguidas" },
      { from: "me", text: "Fiz pensando em cada coisa que a senhora me ensinou ❤️" },
    ],
  },
  {
    number: "+55 21 987**-**",
    occasion: "Pedido de casamento",
    messages: [
      { from: "me", text: "Aperta o play antes de abrir a caixinha" },
      { from: "them", text: "AMOR" },
      { from: "them", text: "que música é essa?? tem o nosso nome 😍😭" },
    ],
  },
  {
    number: "+55 31 998**-**",
    occasion: "Aniversário",
    messages: [
      { from: "them", text: "melhor presente que eu já recebi na vida, sério" },
      { from: "me", text: "Feliz aniversário 🎂" },
      { from: "them", text: "já mandei pro grupo da família inteira kkk" },
    ],
  },
  {
    number: "+55 47 996**-**",
    occasion: "Nascimento",
    messages: [
      { from: "them", text: "botei pra tocar no quarto dele agora" },
      { from: "them", text: "dormiu ouvindo o nome dele na música 🥹" },
      { from: "me", text: "Vai ser a música dele pra sempre" },
    ],
  },
];

export function Testimonials() {
  return (
    <section className="bg-gradient-night px-4 py-20 text-night-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Emoções reais</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-night-foreground/10 bg-night-card p-7"
            >
              <div className="text-sm text-flame">★★★★★</div>
              <blockquote className="mt-4 rounded-2xl bg-night-foreground/5 p-4 text-sm leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <span className="block font-bold">{t.name}</span>
                <span className="text-xs text-night-foreground/60">{t.occasion}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatsAppProof() {
  return (
    <section className="bg-rose-surface px-4 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
          Mensagens reais de quem recebeu
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Reações espontâneas no WhatsApp — sem filtro, sem edição
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {chats.map((c) => (
            <div
              key={c.number}
              className="overflow-hidden rounded-3xl border border-border shadow-soft"
            >
              <div className="flex items-center gap-3 bg-whatsapp-dark px-4 py-3 text-primary-foreground">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/20 text-sm">
                  👤
                </span>
                <div>
                  <p className="text-sm font-bold">{c.number}</p>
                  <p className="text-[11px] opacity-80">{c.occasion}</p>
                </div>
              </div>
              <div className="space-y-2 bg-muted px-4 py-5">
                {c.messages.map((m, i) => (
                  <div
                    key={i}
                    className={
                      m.from === "me"
                        ? "ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-whatsapp/25 px-3 py-2 text-sm"
                        : "mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-card px-3 py-2 text-sm shadow-soft"
                    }
                  >
                    {m.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          🔒 Conversas reais — nomes e números protegidos
        </p>
      </div>
    </section>
  );
}

const timeline = [
  { tag: "Hoje", title: "Você ouve pela primeira vez", text: "O silêncio na sala, os olhos marejados." },
  { tag: "Anos depois", title: "Aperta o play de novo", text: "E tudo volta exatamente como era." },
  { tag: "Cada vez", title: "Vale mais a cada vez que ouve", text: "Vira a trilha sonora da história de vocês." },
];

export function Forever() {
  return (
    <section className="bg-background px-4 py-20">
      <div className="mx-auto w-full max-w-2xl">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
          Porque uma música fica para sempre
        </h2>
        <ol className="relative mt-12 space-y-10 pl-10">
          <span
            className="absolute left-[7px] top-3 h-[calc(100%-2rem)] w-[2px] bg-gradient-brand"
            aria-hidden="true"
          />
          {timeline.map((t) => (
            <li key={t.tag} className="relative">
              <span className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-gradient-brand ring-4 ring-background" />
              <span className="text-xs font-bold uppercase tracking-widest text-gradient-brand">
                {t.tag}
              </span>
              <h3 className="mt-1 text-lg font-bold">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">Os objetos perdem valor.</p>
          <p className="text-2xl font-extrabold text-gradient-brand sm:text-3xl">
            As emoções crescem.
          </p>
        </div>
      </div>
    </section>
  );
}
