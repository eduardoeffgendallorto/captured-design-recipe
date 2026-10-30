import { Instagram, MapPin, Phone } from "lucide-react";
<<<<<<< HEAD
import logo from "../../assets/logomb.webp";
=======
import logo from "@/assets/logomb.webp.asset.json";
>>>>>>> 5b9e2f5a3b8883a64bf7211216bcf3969b6b385b
import { BrandCurves } from "@/components/ui-mb";
import { enderecoCompleto, menu, site, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 pt-16 pb-8 text-primary-foreground">
      <BrandCurves className="-left-20 -bottom-20 h-[360px] w-[360px] -scale-x-100 text-blue-400 opacity-20" />
      <div className="container-mb relative grid gap-10 md:grid-cols-3">
        <div>
<<<<<<< HEAD
          <img src={logo} alt={site.nome} loading="lazy" className="size-20 rounded-md" />          <p className="mt-5 max-w-xs text-primary-foreground/80">{site.slogan}</p>
=======
          <img src={logo.url} alt={site.nome} loading="lazy" className="size-20 rounded-md" />
          <p className="mt-5 max-w-xs text-primary-foreground/80">{site.slogan}</p>
>>>>>>> 5b9e2f5a3b8883a64bf7211216bcf3969b6b385b
        </div>
        <nav aria-label="Rodapé">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Menu</p>
          <ul className="mt-4 space-y-2">
            {menu.map((m) => (
              <li key={m.id}><a href={`#${m.id}`} className="font-medium text-primary-foreground/85 hover:text-blue-400">{m.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Contato</p>
          <ul className="mt-4 space-y-3 text-primary-foreground/85">
            <li className="flex gap-3"><Phone className="size-5 shrink-0 text-blue-400" aria-hidden /><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">{site.telefone}</a></li>
            <li className="flex gap-3"><MapPin className="size-5 shrink-0 text-blue-400" aria-hidden /><span>{enderecoCompleto}</span></li>
            <li className="flex gap-3"><Instagram className="size-5 shrink-0 text-blue-400" aria-hidden /><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">{site.instagramUser}</a></li>
          </ul>
        </div>
      </div>
      <div className="container-mb relative mt-12 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/70">
        © 2026 {site.nome}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
