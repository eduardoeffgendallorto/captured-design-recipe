import { Clock, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import { Eyebrow, MbButton } from "@/components/ui-mb";
import { enderecoCompleto, mapsEmbed, mapsLink, site, whatsappLink } from "@/config/site";
import { useReveal } from "@/hooks/use-reveal";

export function Contato() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section id="contato" ref={ref} className="section-y bg-background">
      <div className="container-mb grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Eyebrow>Onde estamos</Eyebrow>
          <h2 data-anim className="h2-mb mt-5 text-ink">Mais perto do seu projeto.</h2>
          <p data-anim className="mt-6 text-ink-soft">Venha conhecer a MB em Santa Inês, Vila Velha. Nossa equipe está pronta para ajudar você a encontrar o que o projeto precisa.</p>
          <ul data-anim className="mt-8 space-y-5">
            <li className="flex gap-4 rounded-lg bg-soft p-5">
              <Clock className="size-6 shrink-0 text-blue-600" aria-hidden />
              <p className="text-ink"><strong>Horário de atendimento:</strong> {site.horarioLongo}</p>
            </li>
            <li className="flex gap-4 px-5">
              <MapPin className="size-6 shrink-0 text-blue-600" aria-hidden />
              <p className="text-ink">{enderecoCompleto}</p>
            </li>
            <li className="flex gap-4 px-5">
              <Phone className="size-6 shrink-0 text-blue-600" aria-hidden />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-bold text-ink hover:text-blue-600">{site.telefone}</a>
            </li>
          </ul>
          <div data-anim className="mt-8"><MbButton href={mapsLink} external variant="outline">Como chegar</MbButton></div>
        </div>
        <div data-anim className="min-h-[360px] overflow-hidden rounded-lg border border-border">
          <iframe title={`Mapa: ${site.nome}`} src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[360px] w-full border-0" />
        </div>
      </div>
    </section>
  );
}
