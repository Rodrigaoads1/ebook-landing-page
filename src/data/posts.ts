export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  localKeywords: string[];
  metaDescription: string;
}

export const posts: BlogPost[] = [
  {
    id: '1',
    slug: 'como-dominar-google-ads-para-negocios-locais',
    title: 'Google Ads: O Guia Definitivo para Dominar as Buscas de Alta Intenção',
    category: 'Tráfego Pago',
    excerpt: 'Aprenda como configurar campanhas de Google Ads que realmente convertem e pare de jogar dinheiro fora com cliques desqualificados.',
    content: `
      <p>O Google Ads é a ferramenta mais poderosa para capturar clientes que já estão procurando pelo seu serviço. Se você não está lá, seu concorrente está.</p>
      <h3>Estratégias de Palavras-Chave Fundo de Funil</h3>
      <p>Muitos empresários cometem o erro de anunciar para termos muito genéricos. O segredo está em focar em termos de <strong>intenção de compra direta</strong>.</p>
      <blockquote>"O Google Ads não é sobre quem paga mais por clique, mas sobre quem entrega a melhor solução para o problema do usuário."</blockquote>
      <p>Nosso checklist detalha exatamente como estruturar essas campanhas para ROI de 8x.</p>
    `,
    date: '2026-02-06',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bbbda536ad79?auto=format&fit=crop&q=80',
    localKeywords: ['Google Ads', 'Tráfego Pago', 'Gestão de Tráfego'],
    metaDescription: 'Guia definitivo de Google Ads para atrair clientes prontos para comprar.'
  },
  {
    id: '2',
    slug: 'seo-local-para-agencias-de-marketing-rj',
    title: 'SEO Local: Como ser o Primeiro em Campo Grande RJ e Região',
    category: 'SEO Local',
    excerpt: 'Descubra como otimizar seu Google Meu Negócio e site para dominar as buscas locais em bairros específicos do Rio de Janeiro.',
    content: `<p>SEO Local é a arte de aparecer quando alguém pesquisa por serviços "perto de mim". Para negócios em Campo Grande, isso é vital.</p>`,
    date: '2026-02-05',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    localKeywords: ['SEO Local', 'Campo Grande RJ', 'Marketing Digital'],
    metaDescription: 'Domine o SEO local em Campo Grande RJ e atraia clientes da sua região.'
  },
  {
    id: '3',
    slug: 'meta-ads-estrategias-de-escala-vendas',
    title: 'Meta Ads: Transformando Instagram e Facebook em Máquinas de Vendas',
    category: 'Meta Ads',
    excerpt: 'As estratégias de escala que usamos para gerar centenas de leads diários para nossos clientes usando criativos disruptivos.',
    content: `<p>O segredo do Meta Ads não está mais na segmentação, mas nos <strong>criativos</strong>. Se sua imagem não para o scroll, seu dinheiro é desperdiçado.</p>`,
    date: '2026-02-04',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80',
    localKeywords: ['Meta Ads', 'Instagram Ads', 'Vendas Online'],
    metaDescription: 'Como escalar suas vendas usando tráfego pago no Instagram e Facebook.'
  },
  {
    id: '4',
    slug: 'guia-google-analytics-ga4-para-empresarios',
    title: 'Google Analytics (GA4): O que Você Realmente Precisa Medir',
    category: 'GA4',
    excerpt: 'Não se perca em dados inúteis. Aprenda as métricas que realmente indicam se o seu marketing está gerando lucro ou prejuízo.',
    content: `<p>O GA4 pode ser intimidador, mas focar em <strong>eventos de conversão</strong> é o que separa amadores de profissionais.</p>`,
    date: '2026-02-03',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bbbda536ad79?auto=format&fit=crop&q=80',
    localKeywords: ['GA4', 'Analytics', 'Métricas de Marketing'],
    metaDescription: 'Mensure o que importa no seu marketing com o Google Analytics GA4.'
  },
  {
    id: '5',
    slug: 'landing-pages-de-alta-conversao-checklist',
    title: 'Landing Pages: A Anatomia de uma Página que Vende Sozinha',
    category: 'Landing Pages',
    excerpt: 'Onde o tráfego se torna lucro. Descubra os elementos psicológicos essenciais para uma landing page de alta autoridade.',
    content: `<p>Uma Landing Page sem uma oferta clara e prova social forte é apenas um panfleto digital desperdiçado.</p>`,
    date: '2026-02-02',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    localKeywords: ['Landing Page', 'Cro', 'Conversão'],
    metaDescription: 'Aprenda a criar páginas de vendas que convertem visitantes em clientes.'
  },
  {
    id: '6',
    slug: 'instagram-organico-posicionamento-de-elite',
    title: 'Instagram Orgânico: Como Criar Autoridade sem Depender apenas de Ads',
    category: 'Instagram Orgânico',
    excerpt: 'O jogo do conteúdo estratégico. Como se posicionar como especialista e atrair clientes premium através do seu perfil.',
    content: `<p>Seu perfil do Instagram é seu cartão de visitas digital de elite. Ele passa confiança ou amadorismo?</p>`,
    date: '2026-02-01',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80',
    localKeywords: ['Instagram Orgânico', 'Conteúdo Estratégico', 'Social Media'],
    metaDescription: 'Estratégias de conteúdo para crescer autoridade no Instagram organicamente.'
  },
  {
    id: '7',
    slug: 'como-escolher-a-melhor-agencia-de-marketing',
    title: 'Como Escolher a Agência de Marketing Certa (e Fugir de Amadores)',
    category: 'Escolha de Agência',
    excerpt: 'X sinais de que você está contratando uma agência que só vai queimar seu dinheiro. O guia do empresário inteligente.',
    content: `<p>Fuja de agências que prometem "curtidas" ou "seguidores". Você precisa de faturamento no bolso.</p>`,
    date: '2026-01-31',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&q=80',
    localKeywords: ['Agência de Marketing', 'Consultoria Digital', 'Parceiro Estratégico'],
    metaDescription: 'O que observar antes de contratar uma agência de marketing para seu negócio.'
  },
  {
    id: '8',
    slug: 'remarketing-a-estrategia-para-fechar-vendas-perdidas',
    title: 'Remarketing: O Segredo para "Perseguir" e Converter Clientes Indecisos',
    category: 'Remarketing',
    excerpt: 'A maioria das vendas não acontece no primeiro contato. Aprenda como o remarketing multicanal recupera lucros perdidos.',
    content: `<p>O Remarketing é onde a mágica da conversão acontece. Não deixe seus leads esquecerem de você.</p>`,
    date: '2026-01-30',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    localKeywords: ['Remarketing', 'Conversão', 'Funil de Vendas'],
    metaDescription: 'Recupere vendas perdidas com estratégias de remarketing inteligentes.'
  }
];

