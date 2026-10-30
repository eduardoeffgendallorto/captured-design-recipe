import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui-mb";
import { whatsappLink } from "@/config/site";
import { useReveal } from "@/hooks/use-reveal";
import orcamentoImg from "@/assets/orcamento.jpg";
import galpaoImg from "@/assets/entregamod.jpg";

const servicos = [
  { 
    t: "Entregas programadas", 
    d: "Entregamos toda terça e quinta-feira em Vila Velha, Vitória e Cariacica. Consulte as condições e programe seu pedido.",
    imagem: galpaoImg // Imagem do galpão/caminhão
  },
  { 
    t: "Orçamento com nossos vendedores", 
    d: "Conte com uma equipe preparada para atender você e montar o orçamento do seu projeto.",
    imagem: orcamentoImg // Imagem da atendente
  },
];

export function Servicos() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="servicos" ref={ref} className="section-y bg-navy-700 text-primary-foreground">
      <div className="container-mb">
        <Eyebrow dark>Serviços que facilitam</Eyebrow>
        <h2 data-anim className="h2-mb mt-5 max-w-3xl">Seu projeto merece um caminho mais simples.</h2>
        <p data-anim className="mt-4 max-w-2xl text-primary-foreground/85">Apoio para encontrar soluções e cuidar do que realmente importa: fazer acontecer.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {servicos.map((s) => (
            <article key={s.t} data-anim className="overflow-hidden rounded-lg bg-card text-card-foreground">
              {/* Exibe a imagem de forma limpa mantendo a proporção */}
              <div className="aspect-[16/8] w-full overflow-hidden">
                <img 
                  src={s.imagem} 
                  alt={s.t} 
                  loading="lazy" 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl text-ink">{s.t}</h3>
                <p className="mt-3 text-ink-soft">{s.d}</p>
                <a href={whatsappLink(`Olá! Quero saber mais sobre: ${s.t}.`)} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-2 font-bold text-blue-600">
                  Saiba mais <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
