import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { EsquadriaSection } from "@/components/sections/EsquadriaSection";
import { Sobre } from "@/components/sections/Sobre";
import { Produtos } from "@/components/sections/Produtos";
import { PorQue } from "@/components/sections/PorQue";
import { Servicos } from "@/components/sections/Servicos";
import { CtaFaixa } from "@/components/sections/CtaFaixa";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";
import { WhatsappFloat } from "@/components/sections/WhatsappFloat";
import { MOSTRAR_ESQUADRIA_3D, site } from "@/config/site";

const title = "MB Acessórios e Alumínios | Perfis e componentes para esquadrias em Vila Velha, ES";
const description =
  "Perfis de alumínio e componentes para esquadrias de alumínio e vidro em Vila Velha, ES. Atendimento próximo e entregas programadas. Peça seu orçamento pelo WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.nome,
  telephone: site.telefoneE164,
  sameAs: [site.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.endereco.rua,
    addressLocality: site.endereco.cidade,
    addressRegion: site.endereco.uf,
    postalCode: site.endereco.cep,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-background focus:p-3">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Diferenciais />
        {MOSTRAR_ESQUADRIA_3D && <EsquadriaSection />}
        <Sobre />
        <Produtos />
        <PorQue />
        <Servicos />
        <CtaFaixa />
        <Contato />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
