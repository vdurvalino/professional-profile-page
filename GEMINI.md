# Visão Geral do Projeto

Este projeto é uma página de perfil profissional (portfólio online) moderna e interativa. Foi construído com tecnologias de ponta, como Next.js e React, o que o torna um site rápido, otimizado para SEO e com uma excelente experiência de usuário. O design é limpo, responsivo e possui um tema claro e escuro (dark mode).

O objetivo principal do site é apresentar o perfil de um Desenvolvedor Full Stack com mais de 10 anos de experiência, destacando suas habilidades, projetos, artigos e filosofia de trabalho.

## Público-alvo

O site é estrategicamente desenhado para atrair e informar principalmente Recrutadores e Tech Leads. Cada seção foi pensada para fornecer as informações que este público procura: evidências de experiência técnica (ProjectsSection), domínio de tecnologias (StackSection), e alinhamento cultural e de metodologia (ValuesAndPhilosophySection).

## Estrutura e Componentes Principais

O site é organizado em várias páginas e seções distintas, cada uma com um propósito específico:

### HomePage

### HeaderSection (Cabeçalho)
* É um cabeçalho fixo que permanece no topo da página.
* Exibe o nome do profissional ("Vinícius Durvalino") e a hora atual.
* Contém a navegação principal (Home, Sobre, Projetos, Blog, Contato).
* Inclui botões para acessar o GitHub e LinkedIn, alternar entre o tema claro/escuro e mudar o idioma (Português/Inglês).

#### HeroSection (Seção Principal)
* A primeira coisa que um visitante vê.
* Apresenta o desenvolvedor com o título "Olá, mundo! Desenvolvedor Fullstack".
* Indica que ele está "Disponível para projetos".
* Fornece um resumo conciso de sua experiência: "10+ anos de experiência, especialista em criar soluções digitais escaláveis".
* Inclui um "terminal" estilizado que exibe informações técnicas de forma criativa, como a versão do Next.js e a experiência em ERP/SaaS.

#### StackSection (Stack Tecnológica)
* Lista as tecnologias que o desenvolvedor domina, organizadas por categoria: Frontend, Backend, Banco de Dados, DevOps, Ferramentas e IA.
* Isso demonstra a amplitude de suas habilidades técnicas.

#### ProjectsSection (Projetos em Destaque)
* Exibe os projetos mais importantes em que o desenvolvedor trabalhou.
* Cada projeto tem um cartão detalhado com:
    * Título e subtítulo.
    * Descrição do problema resolvido e da solução implementada.
    * Métricas de sucesso (ex: "86% de redução no tempo").
    * Tecnologias utilizadas.
    * Destaques e responsabilidades.
* Alguns projetos são marcados como "Destaque" para chamar mais atenção.

#### BlogSection (Últimos Artigos)
* Mostra os artigos mais recentes escritos pelo desenvolvedor.
* Cada post tem título, resumo, data, tempo de leitura e tags (ex: "Arquitetura", "React", "IA").
* Serve para demonstrar conhecimento e compartilhar experiências com a comunidade.

#### ContactSection (Contato)
* Convida os visitantes a entrar em contato com a chamada "Vamos Trabalhar Juntos?".
* Fornece links diretos para Email, GitHub e LinkedIn.
* Inclui um formulário de "Mensagem Rápida" para contato direto pela página.

#### ValuesAndPhilosophySection (Como Trabalho)
* Descreve os princípios que guiam o trabalho do desenvolvedor: Foco no Resultado, Comunicação Clara e Entrega Ágil.
* Inclui uma citação inspiradora, o que adiciona um toque pessoal.

#### FooterSection (Rodapé)
* Contém links rápidos para as seções do site.
* Reforça os links para as redes sociais.
* Finaliza com a frase "Feito com café, código e IA", que resume a cultura de trabalho do desenvolvedor.

### About

### Projects

### Blog

### Contact

## Design System

Este documento define princípios de design e estilo global da aplicação.  
Ele deve ser aplicado em todas as páginas, independentemente da estrutura ou conteúdo.

---

### Estilo Visual

- **Tema Claro**
  - Fundo base: `bg-gray-50`
  - Superfícies: `bg-white`
  - Texto principal: `text-gray-700`
  - Texto secundário: `text-gray-500`

- **Tema Escuro**
  - Fundo base: `dark:bg-slate-800`
  - Superfícies: `dark:bg-gray-800`
  - Texto principal: `dark:text-gray-300`
  - Texto secundário: `dark:text-gray-400`

- **Destaques**
  - Cor primária: `text-primary`, `bg-primary`
  - Usada em botões, títulos e ícones de destaque.

---

### Layout

- **Container Principal**
  - Largura máxima: `max-w-6xl`
  - Padding lateral: `px-6`
  - Padding vertical: `py-16`

- **Grid**
  - Mobile-first
  - `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` quando aplicável

- **Cards**
  - Fundo: `bg-white dark:bg-gray-800`
  - Borda arredondada: `rounded-lg`
  - Sombra: `shadow-md`
  - Espaçamento interno: `p-6`

---

###  Tipografia

- **Títulos**
  - H1: `text-4xl font-bold`
  - H2: `text-3xl font-bold`
  - H3: `text-xl font-bold`

- **Parágrafos**
  - Fonte base: `text-lg leading-relaxed`
  - Cores adaptadas ao tema claro/escuro

- **Links**
  - Estilo padrão: `text-primary hover:underline`

---

### Componentes Reutilizáveis

- **HeaderSection**
  - Barra superior presente em todas as páginas
  - Responsiva, com logotipo/identidade e navegação

- **FooterSection**
  - Rodapé consistente
  - Links secundários e informações de contato

- **Card**
  - Estrutura flexível para listas, stacks ou conteúdos variados
  - Contém título, ícone e itens

- **CTA**
  - Fundo com cor primária
  - Texto centralizado
  - Botão com contraste (ex.: fundo branco + texto primário)

---

### Princípios Gerais

1. **Consistência**: manter estrutura e estilos iguais em todas as páginas.
2. **Escalabilidade**: componentes devem ser reaproveitáveis em diferentes contextos.
3. **Acessibilidade**: contraste adequado entre fundo e texto.
4. **Responsividade**: sempre mobile-first, expandindo até `lg`.


## Funcionalidades Técnicas Notáveis

* Internacionalização (i18n): O site suporta dois idiomas (Português e Inglês), graças aos arquivos em src/locales. O estado do idioma é gerenciado pelo app-store.
* Gerenciamento de Estado: Utiliza a biblioteca Zustand (app-store.ts) para gerenciar o estado global da aplicação, como o tema (claro/escuro) e o idioma selecionado.
* API Backend: Possui uma rota de API (api/send-notification) que se integra com uma ferramenta de automação (provavelmente o n8n, com base nas variáveis de ambiente) para enviar notificações por e-mail a partir dos formulários de contato.
* Componentização: O código é muito bem organizado em componentes reutilizáveis, seguindo as melhores práticas do React.
* Estilização Moderna: Utiliza Tailwind CSS para criar um design moderno e customizável de forma eficiente.

## Decisões Técnicas

*   **Estrutura de Componentes:** Componentes específicos de uma página devem residir em um subdiretório `(components)` dentro da pasta da própria página (ex: `@/app/about/(components)`). Componentes que são reutilizados em múltiplas páginas devem ser colocados no diretório global `@/components`.
*   **Biblioteca de Ícones:** A biblioteca de ícones padrão para este projeto é a `lucide-react`.

## Conclusão

Em resumo, o projeto é um portfólio digital de alto nível para um desenvolvedor experiente. Ele não apenas lista informações, mas as apresenta de forma estratégica e visualmente atraente para comunicar valor, expertise e profissionalismo a potenciais clientes ou empregadores. É uma ferramenta de marketing pessoal completa e bem executada.



# Instructions for Generating Commits

When generating commit messages, strictly follow the rules below.

## Conventional Commits Standard

-   Always use the *Conventional Commits* standard.
-   The language for all commit messages must be **English**.
-   Avoid overly wordy descriptions or unnecessary details.

### Commit Structure

The final commit structure should be as follows:

```txt
<type>: <description>

[optional body]
```

### Generation Rules

1.  **`<type>` (Type):** The type must be one of the following, in lowercase:
*   `feat`: For new features.
*   `fix`: For bug fixes.
*   `docs`: For documentation changes.
*   `style`: For changes that do not affect the meaning of the code (whitespace, formatting, etc.).
*   `refactor`: For code refactoring that neither fixes a bug nor adds a feature.
*   `perf`: For a code change that improves performance.
*   `test`: For adding missing tests or correcting existing tests.
*   `chore`: For changes to build processes or auxiliary tools and libraries, such as documentation generation.

2.  **`<description>` (Description):** 
*   The description must be a concise summary of the change.
*   Start with a lowercase letter.
*   Begin with a short phrase in the imperative mood.
*   Do not end with a period.  
*   The description must be no longer than 70 characters.

3.  **`[optional body]` (Optional Body):**
*   **DO NOT** add a body for small and obvious changes that modify few lines of code.
*   Add a body **ONLY** if the change has logical complexity that requires more details. The body should explain the "why" of the change, not the "how".
*   If adding a `body`, leave a blank line between the `description` and the `body`.

4.  **Scope:**
*   **DO NOT** add a scope to the commit type.

5. **Output:**
* The final response must be **only the commit text**, with no additional comments.

### Output Example

The final output should be similar to this example:

```txt
feat: add an icon for the system users label in the Users.tsx component
```

Or, if a body is required:

```txt
refactor: Simplify tax calculation logic in the billing module

The previous logic was tightly coupled and difficult to test. The new implementation separates responsibilities into smaller, cleaner functions, improving maintainability.
```