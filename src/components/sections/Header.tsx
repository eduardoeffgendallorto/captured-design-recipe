import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/logomb.webp";
import { menu, site, whatsappLink } from "@/config/site";
import { MbButton } from "@/components/ui-mb";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      let current = "home";
      for (const m of menu) {
        const el = document.getElementById(m.id);
        if (el && el.getBoundingClientRect().top < 160) current = m.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy-900 text-xs font-bold text-primary-foreground">
        <div className="container-mb flex h-9 items-center justify-center md:justify-between">
          <span className="hidden items-center gap-2 md:flex"><MapPin className="size-3.5 text-blue-400" aria-hidden />{site.localCurto}</span>
          <span className="hidden items-center gap-2 md:flex"><Clock className="size-3.5 text-blue-400" aria-hidden />{site.horarioCurto}</span>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
            <Phone className="size-3.5 text-blue-400" aria-hidden />{site.telefone}
          </a>
        </div>
      </div>
      <div className={cn("bg-background transition-shadow", scrolled && "shadow-header")}>
        <div className="container-mb flex h-[84px] items-center justify-between gap-6">
          <a href="#home" aria-label={`${site.nome} — início`}>
            <img src={logo} alt={site.nome} width={60} height={60} className="size-[60px] rounded-md" />
          </a>
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex gap-8">
              {menu.map((m) => (
                <li key={m.id}>
                  <a href={`#${m.id}`} className={cn("text-sm font-bold transition-colors hover:text-blue-600", active === m.id ? "text-blue-600" : "text-ink")}>
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <MbButton href={whatsappLink()} external className="hidden lg:inline-flex">Solicitar orçamento</MbButton>
          <button className="p-2 text-navy-700 lg:hidden" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <Menu className="size-7" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-navy-900 text-primary-foreground lg:hidden">
          <div className="container-mb flex h-[84px] items-center justify-between">
            <img src={logo} alt={site.nome} className="size-[60px] rounded-md" />
            <button aria-label="Fechar menu" className="p-2" onClick={() => setOpen(false)}><X className="size-7" /></button>
          </div>
          <nav aria-label="Menu móvel" className="container-mb flex flex-1 flex-col justify-center gap-6">
            {menu.map((m) => (
              <a key={m.id} href={`#${m.id}`} onClick={() => setOpen(false)} className={cn("text-3xl font-extrabold", active === m.id && "text-blue-400")}>
                {m.label}
              </a>
            ))}
            <MbButton href={whatsappLink()} external className="mt-6 self-start">Solicitar orçamento</MbButton>
          </nav>
        </div>
      )}
    </header>
  );
}
