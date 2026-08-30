import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter, WhatsAppFab } from "@/components/SiteFooter";
import { Hero } from "@/components/landing/Hero";
import { Problem, Solution, Differentials, HowItWorks } from "@/components/landing/Story";
import { OccasionsAndExamples, ForWho } from "@/components/landing/Occasions";
import { Testimonials, Forever } from "@/components/landing/SocialProof";
import { Pricing, Faq, FinalCta, Reviews } from "@/components/landing/Pricing";

const title = "AmorCantado | Música personalizada para quem você ama";
const description =
  "Transforme a sua história de amor em uma música personalizada com letra, voz e produção profissional. Pronta em minutos por R$ 37,90.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Differentials />
        <HowItWorks />
        <OccasionsAndExamples />
        <ForWho />
        <Testimonials />
        <WhatsAppProof />
        <Forever />
        <Pricing />
        <Faq />
        <FinalCta />
        <Reviews />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
