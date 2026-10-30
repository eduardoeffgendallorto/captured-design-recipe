import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import fachada from "@/assets/fachada.jpg.asset.json";
import { whatsappLink } from "@/config/site";
import { BrandCurves, Eyebrow, MbButton } from "@/components/ui-mb";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-hero]", { opacity: 0, y: 24, duration: 0.9, ease: "power3.out", stagger: 0.14, delay: 0.1 });
    },
    { scope: ref },
  );

  return (
    <section id="home" ref={ref} className="relative isolate flex min-h-[calc(100vh-120px)] items-center overflow-hidden bg-navy-900">
      <img src={fachada.url} alt="Fachada da loja MB Acessórios e Alumínios em Vila Velha" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]" />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <BrandCurves className="-right-10 -bottom-10 h-[420px] w-[420px] text-blue-400 opacity-40" />
      <div className="container-mb py-20 text-primary-foreground">
        <div data-hero><Eyebrow dark>Excelência em alumínio</Eyebrow></div>
        <h1 data-hero className="h1-mb mt-6 max-w-4xl">
          Alumínio com excelência.<br />Esquadrias com confiança.
        </h1>
        <p data-hero className="mt-6 max-w-[600px] text-lg font-medium text-primary-foreground/90">
          Na MB você encontra perfis de alumínio e componentes para esquadrias, com equipe preparada para atender e entregas programadas para o seu projeto.
        </p>
        <div data-hero className="mt-10 flex flex-col gap-3 sm:flex-row">
          <MbButton href="#produtos">Conheça nossos produtos</MbButton>
          <MbButton href={whatsappLink()} external variant="white">Fale com um especialista</MbButton>
        </div>
      </div>
      <p className="absolute right-6 bottom-6 hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground/85 md:flex">
        <span aria-hidden className="h-0.5 w-6 bg-blue-400" />MB Acessórios e Alumínios · Vila Velha, ES
      </p>
    </section>
  );
}
