export const posts = [
    {
        id: 1,
        title: "Migrando de Monolito para Microserviços: Lições Aprendidas",
        excerpt: "Como realizamos a migração gradual de uma aplicação monolítica legada para uma arquitetura de microserviços, os desafios encontrados e as soluções implementadas.",
        content: `
            <h2>O Início da Jornada</h2>
            <p>A decisão de migrar de uma arquitetura monolítica para microserviços não foi tomada de ânimo leve. O sistema original, embora funcional, apresentava crescentes desafios de manutenção, escalabilidade e implantação. Cada pequena alteração exigia um novo build e deploy de toda a aplicação, um processo arriscado e demorado.</p>
            <h3>Os Primeiros Passos</h3>
            <p>Começamos identificando os domínios de negócio mais isolados e com menor acoplamento. O primeiro candidato foi o módulo de notificações, que era responsável por enviar e-mails e SMSs. A ideia era extraí-lo para um serviço independente, com sua própria base de dados e API.</p>
            <h2>Desafios e Soluções</h2>
            <p>A migração trouxe consigo uma série de desafios técnicos e culturais. A comunicação entre serviços, a gestão de dados distribuídos e a necessidade de uma nova cultura de DevOps foram os principais pontos de atenção.</p>
            <h3>Comunicação Síncrona vs. Assíncrona</h3>
            <p>Optamos por uma abordagem mista. Para operações que exigiam uma resposta imediata, utilizamos comunicação síncrona via APIs REST. Para processos mais longos e que poderiam ser executados em background, como o processamento de relatórios, adotamos a comunicação assíncrona com filas de mensagens (RabbitMQ).</p>
            <h4>Garantindo a Consistência dos Dados</h4>
            <p>A consistência dos dados foi um dos maiores desafios. Adotamos o padrão Saga para orquestrar transações que envolviam múltiplos serviços, garantindo que, em caso de falha em um dos passos, toda a operação fosse revertida.</p>
        `,
        date: "15 Jan 2024",
        readTime: "8 min de leitura",
        tags: ["Arquitetura", "DevOps", "Docker"],
        image: "/projects/1-erp.jpg",
    },
    {
        id: 2,
        title: "Otimizando Performance em React: Do Bundle ao Runtime",
        excerpt: "Técnicas avançadas para otimizar aplicações React em produção, desde code splitting até lazy loading e memoização eficiente.",
        content: "Técnicas avançadas para otimizar aplicações React em produção, desde code splitting até lazy loading e memoização eficiente.",
        date: "10 Jan 2024",
        readTime: "12 min de leitura",
        tags: ["React", "Performance", "Frontend"],
        image: "/projects/1-erp.jpg",
    },
    {
        id: 3,
        title: "n8n + IA: Automatizando Processos com Inteligência",
        excerpt: "Como integrar workflows n8n com modelos de IA para criar automações inteligentes que aprendem e se adaptam.",
        content: "Como integrar workflows n8n com modelos de IA para criar automações inteligentes que aprendem e se adaptam.",
        date: "05 Jan 2024",
        readTime: "10 min de leitura",
        tags: ["n8n", "IA", "Automação"],
        image: "/projects/1-erp.jpg",
    }
];
