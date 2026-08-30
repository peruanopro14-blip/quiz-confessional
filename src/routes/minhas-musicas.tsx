import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter, WhatsAppFab } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

const title = "Minhas Músicas | AmorCantado";
const description = "Acesse as músicas personalizadas que você criou no AmorCantado.";

export const Route = createFileRoute("/minhas-musicas")({
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
  component: MinhasMusicas,
});

function MinhasMusicas() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl px-4 py-32 text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Minhas Músicas</h1>
        <p className="mt-4 text-muted-foreground">
          Suas músicas são enviadas pelo WhatsApp assim que ficam prontas. Em breve você poderá
          ouvir todas por aqui também.
        </p>
        <Button asChild variant="cta" size="xl" className="mt-8">
          <Link to="/criar">🎵 Criar minha música</Link>
        </Button>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
