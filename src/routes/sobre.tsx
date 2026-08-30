import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter, WhatsAppFab } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

const title = "Sobre Nós | AmorCantado";
const description =
  "Somos um estúdio digital que transforma histórias de afeto em músicas personalizadas, com letra, voz e produção profissional.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl px-4 py-32">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Sobre o AmorCantado</h1>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>
            O AmorCantado nasceu de uma ideia simples: presentes se perdem, mas uma música fica.
            Reunimos escrita, produção musical e inteligência artificial para transformar
            histórias reais em canções que só existem por causa de quem as inspirou.
          </p>
          <p>
            Cada música é criada a partir dos detalhes que você conta — nomes, memórias, o tom
            certo — e entregue com letra completa, áudio profissional e link para compartilhar.
          </p>
        </div>
        <Button asChild variant="cta" size="xl" className="mt-8">
          <Link to="/criar">🎵 Criar minha música</Link>
        </Button>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
