import { useRef } from "react";
import { Eyebrow, MbButton } from "@/components/ui-mb";
import sobre from "../../assets/sobre.webp";
import { whatsappLink } from "@/config/site";
import { useReveal } from "@/hooks/use-reveal";

export function Sobre() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="sobre" ref={ref} className="section-y bg-background">
      <div className="container-mb grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div data-anim className="relative">
          <img src={sobre} alt="Interior da loja MB Acessórios e Alumínios com perfis de alumínio em estoque" loading="lazy" className="aspect-[1/0.95] w-full rounded-lg object-cover" />
          <span aria-hidden className="absolute bottom-0 left-0 h-1.5 w-[150px] bg-blue-400" />
        </div>
        <div>
          <Eyebrow>Prazer, MB</Eyebrow>
          <h2 data-anim className="h2-mb mt-5 text-ink">Tudo o que sua esquadria precisa, em um só lugar.</h2>
          <p data-anim className="mt-6 text-ink-soft">A MB Acessórios e Alumínios oferece perfis de alumínio e componentes para esquadrias, com atendimento próximo e qualidade em cada detalhe.</p>
          <p data-anim className="mt-4 text-ink-soft">Seja qual for o projeto, cada escolha importa. Estamos aqui para ajudar você a encontrar o material certo.</p>
          <div data-anim className="mt-8"><MbButton href={whatsappLink()} external variant="outline">Conheça a MB</MbButton></div>
        </div>
      </div>
    </section>
  );
}
