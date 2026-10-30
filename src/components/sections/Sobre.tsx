import { useRef } from "react";
<<<<<<< HEAD
import { Eyebrow, MbButton } from "@/components/ui-mb";
import sobre from "../../assets/sobre.webp";
=======
import { Eyebrow, MbButton, NavyPlaceholder } from "@/components/ui-mb";
>>>>>>> 5b9e2f5a3b8883a64bf7211216bcf3969b6b385b
import { whatsappLink } from "@/config/site";
import { useReveal } from "@/hooks/use-reveal";

export function Sobre() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="sobre" ref={ref} className="section-y bg-background">
      <div className="container-mb grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div data-anim className="relative">
<<<<<<< HEAD
          <img src={sobre} alt="Interior da loja MB Acessórios e Alumínios com perfis de alumínio em estoque" loading="lazy" className="aspect-[1/0.95] w-full rounded-lg object-cover" />
=======
          <NavyPlaceholder label="Imagem da MB Acessórios e Alumínios" className="aspect-[1/0.95] rounded-lg" />
>>>>>>> 5b9e2f5a3b8883a64bf7211216bcf3969b6b385b
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
