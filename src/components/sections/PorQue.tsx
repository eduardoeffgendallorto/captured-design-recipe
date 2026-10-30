import { Building2, Headset, Package, ShieldCheck, Truck } from "lucide-react";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui-mb";
import { useReveal } from "@/hooks/use-reveal";

const itens = [
  { icon: Package, t: "Variedade de produtos", d: "Perfis e componentes para diferentes tipos de esquadria." },
  { icon: Headset, t: "Atendimento próximo", d: "Equipe preparada para ouvir seu projeto." },
  { icon: ShieldCheck, t: "Alumínio de qualidade", d: "Resistência que o tempo não corrói." },
  { icon: Truck, t: "Entregas programadas", d: "Terças e quintas, consulte as condições." },
  { icon: Building2, t: "Grandes empreendimentos", d: "Excelência em alumínio para grandes obras." },
];

export function PorQue() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="section-y bg-background">
      <div className="container-mb">
        <Eyebrow>Por que a MB</Eyebrow>
        <h2 data-anim className="h2-mb mt-5 max-w-3xl text-ink">Mais do que materiais. Soluções para seguir em frente.</h2>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {itens.map(({ icon: Icon, t, d }) => (
            <li key={t} data-anim className="border-t border-border pt-6">
              <Icon className="size-8 text-navy-700" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-5 text-lg text-ink">{t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
