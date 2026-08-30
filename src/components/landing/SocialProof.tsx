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
