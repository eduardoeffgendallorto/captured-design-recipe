// Edite aqui contatos, horários, links e textos fixos do site.
export const MOSTRAR_ESQUADRIA_3D = false;

const mensagemPadrao =
  "Olá! Vim pelo site da MB Acessórios e Alumínios e gostaria de um orçamento.";

export const site = {
  nome: "MB Acessórios e Alumínios",
  slogan: "Qualidade, atendimento e confiança para você.",
  telefone: "(27) 99739-5532",
  telefoneE164: "+5527997395532",
  whatsappNumero: "5527997395532",
  mensagemPadrao,
  instagram: "https://www.instagram.com/mb.acessorios.aluminios/",
  instagramUser: "@mb.acessorios.aluminios",
  endereco: {
    rua: "Rua Joaquim Manuel de Macedo, nº 102",
    bairro: "Santa Inês",
    cidade: "Vila Velha",
    uf: "ES",
    cep: "29108-038",
  },
  horarioCurto: "Seg a Sex 7h30 às 17h30",
  horarioLongo: "segunda a sexta, 7h30 às 17h30",
  localCurto: "Vila Velha · Espírito Santo",
};

export const enderecoCompleto = `${site.endereco.rua}, ${site.endereco.bairro}, ${site.endereco.cidade} - ${site.endereco.uf}, CEP ${site.endereco.cep}`;

export const whatsappLink = (msg: string = mensagemPadrao) =>
  `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(msg)}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoCompleto)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(enderecoCompleto)}&output=embed`;

export const menu = [
  { label: "Home", id: "home" },
  { label: "Sobre", id: "sobre" },
  { label: "Produtos", id: "produtos" },
  { label: "Serviços", id: "servicos" },
  { label: "Contato", id: "contato" },
];
