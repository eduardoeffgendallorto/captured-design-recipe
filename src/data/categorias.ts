// Categorias de produtos. Para usar uma foto, preencha `imagem` com a URL.
export type Categoria = { titulo: string; imagem?: string };

export const categorias: Categoria[] = [
  { titulo: "Perfis de alumínio" },
  { titulo: "Componentes para esquadrias" },
  { titulo: "Acessórios e ferragens" },
  { titulo: "Vedação e acabamento" },
  { titulo: "Fixação" },
  { titulo: "Novidades" },
];
