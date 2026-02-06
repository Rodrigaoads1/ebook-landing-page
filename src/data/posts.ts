export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    coverImage: string;
    localKeywords: string[];
    metaDescription: string;
}

export const posts: BlogPost[] = [
    {
        id: '1',
        slug: 'agencia-de-marketing-em-campo-grande-rj-seo-local',
        title: 'Agência de Marketing em Campo Grande RJ: O Segredo para Dominar o Google no Bairro',
        excerpt: 'Sua empresa em Campo Grande está invisível? Descubra como o SEO Local e o posicionamento estratégico podem atrair mais clientes qualificados para o seu negócio na Zona Oeste.',
        content: `
      <p>Se você é empresário em <strong>Campo Grande, RJ</strong>, sabe que a concorrência no bairro é acirrada. Mas você já se perguntou por que seus concorrentes aparecem no topo do Google e você não?</p>
      
      <h3>A Realidade do Marketing em Campo Grande</h3>
      <p>Muitas agências focam em métricas de vaidade. Na Migração Digital, focamos em <strong>resultado real</strong>. Campo Grande é um polo comercial gigante, e estar bem posicionado no Google Meu Negócio e nas buscas locais não é mais opcional, é sobrevivência.</p>
      
      <h3>Como o SEO Local Transforma seu Negócio</h3>
      <p>Quando alguém pesquisa por "Agência de Marketing em Campo Grande RJ" ou pelo serviço específico que você oferece, sua empresa precisa ser a primeira opção. Nossa metodologia foca em:</p>
      <ul>
        <li>Otimização Google Meu Negócio para o bairro.</li>
        <li>Palavras-chave de alta intenção de compra na Zona Oeste.</li>
        <li>Landing Pages de alta conversão.</li>
      </ul>
      
      <h3>Por que escolher a Migração Digital?</h3>
      <p>Nós não apenas criamos posts. Nós criamos <strong>máquinas de vendas</strong>. Se você quer parar de perder clientes para a concorrência na Cesário de Melo ou na Estrada do Monteiro, você precisa de uma estratégia de elite.</p>
      
      <p><strong>Quer dominar as buscas em Campo Grande?</strong> Agende seu diagnóstico agora.</p>
    `,
        date: '2026-02-06',
        author: 'Rodrigo Rodrigues',
        coverImage: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&q=80',
        localKeywords: ['Agência de Marketing em Campo Grande RJ', 'SEO Local Campo Grande', 'Marketing Digital Zona Oeste'],
        metaDescription: 'Procurando uma Agência de Marketing em Campo Grande RJ? Domine o SEO local e atraia mais clientes qualificados para o seu negócio com a Migração Digital.'
    }
];
