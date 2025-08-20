export const projects = [{
    id: 1,
    title: "ERP de Conciliação de Pagamentos",
    description: "Sistema completo de conciliação automatizada para 12 filiais, substituindo processos manuais em Excel/Access. Hoje processa mais de 7 milhões de registros.",
    content: "## Contexto / Caso\n" +
        "Em 2015, a Associação SOS Família realizava a conciliação de pagamentos de suas 12 filiais usando processos manuais com Excel e Microsoft Access. Isso gerava alto risco de erro humano, além de um tempo de execução muito elevado.\n" +
        "\n" +
        "Fui responsável por desenvolver e implantar um sistema robusto e escalável para otimizar esse processo, reduzir custos operacionais e oferecer às filiais um acompanhamento claro e em tempo real.\n" +
        "\n" +
        "Comecei com um **MVP** desenvolvido em **PHP, MySQL e jQuery**, hospedado em servidor próprio. Configurei todo o ambiente, incluindo o redirecionamento de domínio para um servidor interno, instalação e configuração de um servidor Linux com Apache e demais dependências.\n" +
        "\n" +
        "Também implementei **níveis de acesso granulares**, que permitiam definir exatamente quais menus e funcionalidades cada usuário poderia acessar.\n" +
        "\n" +
        "## Problemas Enfrentados\n" +
        "- **Performance do banco de dados**: logo ficou claro que o crescimento de registros seria exponencial. Desenvolvi otimizações na modelagem e consultas que sustentaram a escalabilidade. Hoje, o banco MySQL contém mais de **7 milhões de registros**.\n" +
        "- **Escalabilidade da arquitetura**: à medida que novas funcionalidades eram solicitadas, percebi a importância de uma arquitetura sólida. Anos depois, ao estudar padrões de projeto (GoF), constatei que várias soluções que adotei estavam alinhadas a boas práticas consagradas.\n" +
        "\n" +
        "## Benefícios\n" +
        "Antes:\n" +
        "- 2 colaboradores para realizar a conciliação\n" +
        "- Processo levava **3h30**\n" +
        "\n" +
        "Depois:\n" +
        "- Apenas 1 colaborador\n" +
        "- Processo concluído em **menos de 30 minutos**\n" +
        "\n" +
        "Outros ganhos:\n" +
        "- Acompanhamento das conciliações em tempo real pelas filiais, permitindo resolução imediata de inconsistências.\n" +
        "- Maior confiabilidade, preservando doações e evitando perdas.\n" +
        "- Redução de custos operacionais e aumento da eficiência geral.\n" +
        "\n" +
        "## Resultados e Evoluções\n" +
        "Após validar o MVP, iniciei um ciclo de melhorias que incluiu:\n" +
        "- **Gestão de brindes** mensais via Correios, baseada na conciliação do mês anterior.\n" +
        "- **Relatórios gerenciais** com insights valiosos para as filiais.\n" +
        "- **Otimização contínua**, como atualização automática de cartões de crédito expirados ou cancelados.\n" +
        "- **Gestão de campanhas semestrais de fundraising** para leads ativos.\n" +
        "- **Repasse automatizado e preciso** dos valores correspondentes a cada filial.\n" +
        "\n" +
        "Por fim, migrei partes críticas do sistema para **Laravel**, garantindo maior escalabilidade, manutenção simplificada e longevidade do projeto.\n",
    featured: true,
    tech: ["PHP", "Laravel", "MySQL", "jQuery", "Linux", "VPS", "Rest API", "Git"],
    highlights: ["Redução de 3h30 para <30min no processo", "De 2 colaboradores para apenas 1", "Bando de dados com 7+ milhões de registros", "Gestão automatizada de brindes e campanhas"],
    image: "/projects/1-erp.png",
    duration: "2016-2021",
    team: "1 pessoa",
    role: "full cycle",
    liveUrl: null
}, {
    id: 2,
    title: "Sistema de Abaixo-Assinado Escalável",
    description: "Liderança técnica na reconstrução total de sistema que colapsou com tráfego viral. Arquitetura preparada para milhões de acessos simultâneos.",
    content: "Quando fui contratado, o sistema de abaixo-assinado online já havia passado por diversos freelancers e estava repleto de problemas: código fragmentado, funcionalidades duplicadas e sérios gargalos de escalabilidade. Em um episódio marcante, dois Youtubers divulgaram um abaixo-assinado e o site saiu do ar devido ao excesso de acessos.  \n" +
        "\n" +
        "A solução foi pivotar o projeto. Junto ao cliente, identifiquei e reaproveitei o que funcionava, descartando o que comprometia a performance. Trabalhei lado a lado com um desenvolvedor sênior de PHP, assumindo o papel de **líder técnico** e responsável pelo front-end.  \n" +
        "\n" +
        "No **back-end**, ele reescreveu toda a base em **Laravel**, já preparada para escalabilidade.  \n" +
        "No **front-end**, desenvolvi tudo do zero usando **Next.js** e estratégias de **Static Site Generation (SSG)**, permitindo que o site absorvesse picos de tráfego sem sobrecarregar o servidor.  \n" +
        "\n" +
        "### **Minhas responsabilidades como líder técnico**\n" +
        "- Conduzir e preparar todas as reuniões semanais;  \n" +
        "- Traduzir os pedidos do cliente em **features claras** e **documentação técnica**;  \n" +
        "- Elaborar o **esboço inicial do banco de dados** e dos **contratos da API**;  \n" +
        "- Mapear e priorizar tarefas, identificando **gargalos de performance** e escalonando ou adiando processos não críticos (ex.: filas de integração com outros apps);  \n" +
        "- Estudar a documentação de APIs externas e propor um **plano de ação integrado**;  \n" +
        "- Intermediar com a equipe de designers externos a definição de **UI/UX**.  \n" +
        "\n" +
        "### **Resultados alcançados**\n" +
        "- O sistema nunca mais apresentou problemas de performance, mesmo em grandes campanhas;  \n" +
        "- Fluxo de leads para o CRM com **100% de confiabilidade**;  \n" +
        "- Experiência do usuário final significativamente aprimorada;  \n" +
        "- Base de código sólida e escalável, pronta para evoluir de forma coesa.  \n",
    featured: true,
    tech: ["Next.js", "React", "TypeScript", "Rest API", "Vercel", "Chakra UI", "Git", "Postman", "Figma"],
    highlights: ["Liderança técnica do projeto", "Arquitetura para tráfego viral", "100% de confiabilidade em leads", "Documentação técnica completa"],
    image: "/projects/2-peticoes.png",
    duration: "2021",
    team: "2 pessoas",
    role: "tech lead",
    liveUrl: null
}];
