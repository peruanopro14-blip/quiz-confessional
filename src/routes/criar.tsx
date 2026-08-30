import { createFileRoute } from "@tanstack/react-router";
import { Wizard } from "@/components/wizard/Wizard";

const title = "Criar minha música | AmorCantado";
const description =
  "Conte a sua história em poucos passos e receba uma música personalizada com letra, voz e produção profissional.";

export const Route = createFileRoute("/criar")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CriarPage,
});

function CriarPage() {
  return <Wizard />;
}
