import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { NavyPlaceholder } from "@/components/ui-mb";
import { whatsappLink } from "@/config/site";
import { categorias } from "@/data/categorias";
import { useReveal } from "@/hooks/use-reveal";

export function Produtos() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="produtos" ref={ref} className="section-y bg-soft">
      <div className="container-mb">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 data-anim className="h2-mb text-ink">Materiais para cada esquadria ganhar forma.</h2>
            <p data-anim className="mt-4 text-ink-soft">Conheça algumas das linhas de produtos da MB.</p>
          </div>
          <a data-anim href={whatsappLink("Olá! Gostaria de conhecer todos os produtos da MB.")} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-bold text-blue-600">
            Ver todos os produtos <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((c, i) => (
            <li key={c.titulo} data-anim>
              <a href={whatsappLink(`Olá! Quero saber mais sobre ${c.titulo}.`)} target="_blank" rel="noopener noreferrer" className="group relative block aspect-[4/3.4] overflow-hidden rounded-lg">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  {c.imagem ? (
                    <img src={c.imagem} alt={c.titulo} loading="lazy" className="h-full w-full object-cover" />
                  ) : (
                    <NavyPlaceholder label={c.titulo} className="h-full w-full" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-card" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-400">{String(i + 1).padStart(2, "0")} / Categorias</p>
                    <h3 className="mt-2 text-2xl text-primary-foreground">{c.titulo}</h3>
                  </div>
                  <ArrowUpRight className="size-6 shrink-0 text-primary-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
