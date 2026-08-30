import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

const mainLinks = [
  { label: "Minhas Músicas", to: "/minhas-musicas" as const },
  { label: "Sobre Nós", to: "/sobre" as const },
  { label: "Privacidade", to: "/privacidade" as const },
  { label: "Termos de Uso", to: "/termos" as const },
];

const seoLinks = [
  "Dia dos Pais",
  "Aniversário",
  "Namorado(a)",
  "Pedido de casamento",
  "Música com nome",
  "Quanto custa",
  "Blog",
  "Instagram",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/60 px-4 py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              Transformando histórias em música
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {mainLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-6">
          {seoLinks.map((l) => (
            <span key={l} className="text-xs text-muted-foreground">
              {l}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-1 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AmorCantado — Todos os direitos reservados.</p>
          <p>Feito com ❤️ no Brasil</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/4797273194"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com o suporte no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-glow transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.3 4.8 4.93-1.29A9.9 9.9 0 1 0 12.04 2Zm0 1.9a8 8 0 1 1-4.08 14.88l-.29-.17-2.92.76.78-2.85-.19-.3A8 8 0 0 1 12.04 3.9Zm4.6 10.1c-.25-.13-1.46-.72-1.69-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.96-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.23-.74-.65-1.24-1.46-1.38-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.24 1.02.39 1.37.5.58.18 1.1.16 1.52.1.46-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z" />
      </svg>
    </a>
  );
}
