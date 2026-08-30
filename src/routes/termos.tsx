import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter, WhatsAppFab } from "@/components/SiteFooter";

const title = "Termos de Uso | AmorCantado";
const description =
  "Condições de uso, prazos de entrega e política de ajustes das músicas personalizadas do AmorCantado.";

export const Route = createFileRoute("/termos")({
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
  component: Termos,
});

function Termos() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl px-4 py-32">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Termos de Uso</h1>
        <div className="mt-6 space-y-4 text-sm text-muted-foreground">
          <p>
            A música é produzida a partir das informações fornecidas por você. É sua
            responsabilidade garantir que os conteúdos enviados não violem direitos de terceiros.
          </p>
          <p>
            O valor de R$ 29,90 é um pagamento único por música, sem assinatura. A entrega ocorre
            normalmente em minutos após a confirmação do pagamento.
          </p>
          <p>
            Ajustes de letra podem ser solicitados pelo suporte no WhatsApp após a entrega da
            primeira versão.
          </p>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
