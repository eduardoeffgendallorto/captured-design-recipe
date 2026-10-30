import perfisAluImg from "@/assets/perfisalu.webp";
import componentesAluImg from "@/assets/componentesalu.webp";
import acessoriosAluImg from "@/assets/acessoriosalu.webp";

// Categorias de produtos. Para usar uma foto, preencha `imagem` com a URL.
export type Categoria = { titulo: string; imagem?: string };

export const categorias: Categoria[] = [
  { titulo: "Perfis de alumínio", imagem: perfisAluImg },
  { titulo: "Componentes para esquadrias", imagem: componentesAluImg },
  { titulo: "Acessórios e ferragens", imagem: acessoriosAluImg },
];