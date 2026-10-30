import { Layers, MapPin, Users } from "lucide-react";

const itens = [
  { icon: Layers, texto: "Perfis e acessórios para cada projeto" },
  { icon: Users, texto: "Equipe preparada para atender" },
  { icon: MapPin, texto: "Em Vila Velha, Espírito Santo" },
];

export function Diferenciais() {
  return (
    <section aria-label="Diferenciais" className="bg-blue-600 text-primary-foreground">
      <div className="container-mb grid divide-y divide-primary-foreground/25 md:grid-cols-3 md:divide-x md:divide-y-0">
        {itens.map(({ icon: Icon, texto }) => (
          <div key={texto} className="flex items-center gap-4 py-6 md:px-8 md:first:pl-0">
            <Icon className="size-7 shrink-0 text-blue-400 brightness-150" aria-hidden />
            <p className="font-bold">{texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
