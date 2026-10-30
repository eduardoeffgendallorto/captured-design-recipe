import { useRef } from "react";
import { BrandCurves, Eyebrow, MbButton } from "@/components/ui-mb";
import { whatsappLink } from "@/config/site";
import { useReveal } from "@/hooks/use-reveal";

export function CtaFaixa() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="relative overflow-hidden bg-blue-600 py-16 text-primary-foreground md:py-20">
      <BrandCurves className="-right-16 -top-24 h-[380px] w-[380px] rotate-180 text-primary-foreground opacity-25" />
      <div className="container-mb relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow dark><span className="text-primary-foreground">Vamos conversar?</span></Eyebrow>
          <h2 data-anim className="h2-mb mt-5">Tem um projeto de esquadrias? Conte com a MB.</h2>
          <p data-anim className="mt-4 text-primary-foreground/90">Consulte produtos, disponibilidade e condições de entrega com nossos vendedores.</p>
        </div>
        <div data-anim><MbButton href={whatsappLink()} external variant="white">Solicitar orçamento pelo WhatsApp</MbButton></div>
      </div>
    </section>
  );
}
