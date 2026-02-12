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
    slug: 'estrategia-posicionamento-digital',
    title: 'Estratégia e Posicionamento: Por que sua Marca não Vende Mais?',
    category: 'Estratégia',
    excerpt: 'Descubra os pilares fundamentais para posicionar sua marca no digital e parar de brigar por preço.',
    content: `
      <p>Muitas marcas sofrem do que chamamos de "invisibilidade estratégica". Elas têm bons produtos, bons serviços, mas se comunicam de forma genérica.</p>
      <p>O primeiro passo para mudar isso é entender seu <strong>Posicionamento Único</strong>. O que você faz que ninguém mais faz? Como você resolve o problema do cliente de uma forma que ele valorize?</p>
      <h3>Os 3 Pilares da Autoridade</h3>
      <ul>
        <li><strong>Clareza:</strong> Seu cliente entende o que você vende em 3 segundos?</li>
        <li><strong>Consistência:</strong> Você fala a mesma língua em todos os canais?</li>
        <li><strong>Prova:</strong> Você mostra resultados reais ou apenas promessas?</li>
      </ul>
      <p>Sem esses pilares, qualquer tráfego que você comprar será desperdiçado em um "balde furado".</p>
    `,
    date: '2026-02-12',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop',
    localKeywords: ['Posicionamento', 'Estratégia Digital', 'Branding'],
    metaDescription: 'Entenda como posicionar sua marca corretamente e sair da guerra de preços no digital.'
  },
  {
    id: '2',
    slug: 'funil-de-vendas-alta-conversao',
    title: 'Anatomia de um Funil de Vendas de Alta Conversão',
    category: 'Funis',
    excerpt: 'Não basta ter um site. Você precisa de um caminho claro que transforme visitantes em clientes pagantes.',
    content: `
      <p>Um funil de vendas não é mágica, é engenharia. É conduzir o cliente por uma jornada lógica de convencimento.</p>
      <p>Se você joga tráfego direto para o WhatsApp sem qualificar, você vira um "tirador de dúvidas" e não um vendedor.</p>
      <h3>Fases do Funil</h3>
      <ol>
        <li><strong>Topo:</strong> Consciência do problema.</li>
        <li><strong>Meio:</strong> Consideração da solução.</li>
        <li><strong>Fundo:</strong> Decisão de compra.</li>
      </ol>
      <p>Pare de tentar vender casamento no primeiro encontro. Construa o relacionamento e a venda virá naturalmente.</p>
    `,
    date: '2026-02-11',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bbbda536ad79?q=80&w=2070&auto=format&fit=crop',
    localKeywords: ['Funil de Vendas', 'Conversão', 'Marketing Digital'],
    metaDescription: 'Aprenda a estruturar um funil de vendas que qualifica leads e aumenta sua conversão.'
  },
  {
    id: '3',
    slug: 'trafego-pago-alem-do-botao-impulsionar',
    title: 'Tráfego Pago: Pare de Queimar Dinheiro no Botão Impulsionar',
    category: 'Tráfego Pago',
    excerpt: 'O botão impulsionar é a forma mais rápida de perder dinheiro. Veja como profissionais escalam campanhas.',
    content: `
      <p>O botão impulsionar existe para o dono da plataforma ficar rico, não você. Ele busca engajamento, não vendas.</p>
      <p>Para ter ROI (Retorno sobre Investimento), você precisa usar o Gerenciador de Anúncios e segmentar com inteligência.</p>
      <p>Não anuncie para todo mundo. Anuncie para quem tem a dor que você resolve e o dinheiro para pagar pela solução.</p>
      <blockquote>"Tráfego sem oferta validada é apenas uma forma rápida de descobrir que seu produto é ruim."</blockquote>
    `,
    date: '2026-02-10',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    localKeywords: ['Tráfego Pago', 'Facebook Ads', 'Google Ads'],
    metaDescription: 'Descubra a diferença entre impulsionar e gerenciar tráfego profissionalmente.'
  },
  {
    id: '4',
    slug: 'copywriting-palavras-que-vendem',
    title: 'Copywriting: Como Escrever Textos que Vendem Sozinhos',
    category: 'Conversão',
    excerpt: 'A diferença entre um texto bonito e um texto que vende está na psicologia aplicada. Aprenda os gatilhos certos.',
    content: `
      <p>Ninguém lê textão? Mentira. As pessoas leem o que interessa a elas. Se seu texto fala sobre a dor delas, elas vão ler até o final.</p>
      <p>Copywriting é a arte de vender com palavras. É entender as objeções do cliente antes mesmo dele falar.</p>
      <h3>Estrutura AIDA</h3>
      <ul>
        <li><strong>Atenção:</strong> O título deve parar o scroll.</li>
        <li><strong>Interesse:</strong> Fale do problema.</li>
        <li><strong>Desejo:</strong> Apresente a solução irresistível.</li>
        <li><strong>Ação:</strong> Diga o que fazer agora.</li>
      </ul>
    `,
    date: '2026-02-09',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop',
    localKeywords: ['Copywriting', 'Vendas', 'Persuasão'],
    metaDescription: 'Técnicas de copywriting para transformar leitores em compradores recorrentes.'
  },
  {
    id: '5',
    slug: 'inteligencia-artificial-nos-negocios',
    title: 'Inteligência Artificial: O Fim do Amadorismo no Marketing',
    category: 'Tecnologia',
    excerpt: 'Como usar IA para acelerar sua produção de conteúdo e análise de dados, deixando seus concorrentes para trás.',
    content: `
      <p>A IA não veio para substituir o estrategista, mas para substituir o executor mediano. Quem souber usar, vai voar.</p>
      <p>Use IA para:</p>
      <ul>
        <li>Analisar grandes volumes de dados de clientes.</li>
        <li>Gerar ideias de conteúdo infinitas.</li>
        <li>Otimizar campanhas em tempo real.</li>
      </ul>
      <p>O futuro pertence a quem combina estratégia humana com velocidade de máquina.</p>
    `,
    date: '2026-02-08',
    author: 'Rodrigo Rodrigues',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    localKeywords: ['Inteligência Artificial', 'Automação', 'Produtividade'],
    metaDescription: 'Como a IA está revolucionando o marketing e como você pode aproveitar essa onda.'
  }
];
