import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter, WhatsAppFab } from "@/components/SiteFooter";

const title = "Política de Privacidade | AmorCantado";
const description =
  "Como o AmorCantado coleta, usa e protege os dados enviados na criação da sua música personalizada.";

export const Route = createFileRoute("/privacidade")({
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
  component: Privacidade,
});

function Privacidade() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl px-4 py-32">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Política de Privacidade</h1>
        <div className="mt-6 space-y-4 text-sm text-muted-foreground">
          <p>
            Coletamos apenas as informações necessárias para criar e entregar a sua música: os
            dados preenchidos no funil de criação e o número de WhatsApp informado.
          </p>
          <p>
            As histórias enviadas são usadas exclusivamente na produção da sua música e não são
            compartilhadas publicamente nem vendidas a terceiros.
          </p>
          <p>
            Você pode solicitar a exclusão dos seus dados a qualquer momento pelo nosso suporte no
            WhatsApp.
          </p>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
