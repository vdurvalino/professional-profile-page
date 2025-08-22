export const fileContent = {
    "stack.tsx": `// My Tech Stack Configuration
// Last updated: ${new Date().toLocaleDateString()}

import { TechStack } from './types'

/**
 * Main technology stack used in production
 */
const techStack: TechStack = {
    frontend: [
        "React",          // JavaScript library
        "Next.js",        // React framework
        "TypeScript",     // Type safety
        "Tailwind CSS",   // Utility-first CSS
        "Zustand"         // State management
    ],
    
    backend: [
        "PHP",            // Server-side language
        "Laravel",        // PHP framework
        "Node.js",        // JavaScript runtime
        "Rest API"        // API architecture
    ],
    
    database: [
        "MySQL",          // Relational database
        "PostgreSQL",     // Advanced RDBMS
        "Drizzle ORM",    // TypeScript ORM
        "Prisma ORM"      // Next-gen ORM
    ],
    
    devops: [
        "Docker",         // Containerization
        "CI/CD",          // Continuous Integration/Deployment
        "Vercel",         // Hosting platform
        "Linux",          // Server OS
        "VPS"             // Virtual Private Server
    ],
    
    tools: [
        "Git",            // Version control
        "WebStorm",       // IDE
        "Postman",        // API testing
        "Figma"           // Design tool
    ]
}

export default techStack`,

    "learning.md": `# 🚀 Currently Learning

> I've been delving deeper into the benefits and limitations of 
> artificial intelligence, seeking to strategically incorporate it
> into the development process and avoiding fads and advertising influence.

## Artificial Intelligence & Automation

### n8n
- Workflow automation tool
- Visual programming interface
- Integration with multiple services

### Context/Prompt Engineering
- Optimizing AI interactions
- Creating effective prompts
- Understanding model limitations

### RAG (Retrieval-Augmented Generation)
- Enhanced AI responses with external data
- Vector databases integration
- Semantic search implementation

### MCP (Model Context Protocol)
- AI model management
- Context window optimization
- Multi-model orchestration

### Gemini CLI
- Google's AI command line interface
- Batch processing capabilities
- API integration

## Goals for 2025
- [ ] Master AI workflow automation with \`n8n\`
- [ ] Build production-ready \`RAG\` systems
- [ ] Contribute to open-source AI projects
- [ ] Create AI-powered developer tools
- [ ] Implement \`MCP\` in real projects

## Learning Resources
- [n8n Documentation](https://docs.n8n.io)
- [RAG Tutorial Series](https://example.com/rag)
- [Prompt Engineering Guide](https://example.com/prompts)`,

    "README.md": `# 👋 Welcome to My Tech Stack

> A comprehensive overview of the technologies I use to build scalable applications

## 🛠️ Technologies I Work With

### Frontend Development
\`\`\`javascript
const frontend = {
  frameworks: ["React", "Next.js"],
  languages: ["TypeScript", "JavaScript"],
  styling: ["Tailwind CSS", "CSS Modules"],
  state: ["Zustand", "Context API"]
}
\`\`\`

### Backend Development  
- **PHP** with **Laravel** for robust web applications
- **Node.js** for real-time services
- **RESTful APIs** following best practices

### Database Solutions
\`\`\`txt
|-------------+----------------------|
| Database    | Use Case             |
|-------------+----------------------|
| MySQL       | Traditional web apps |
| PostgreSQL  | Complex queries      |
| Drizzle ORM | Type-safe queries    |
| Prisma ORM  | Modern applications  |
|-------------+----------------------|
\`\`\`

### DevOps & Infrastructure
- 🐳 **Docker** for containerization
- 🚀 **CI/CD** pipelines
- ☁️ **Vercel** for frontend hosting
- 🐧 **Linux** server management
- 💻 **VPS** configuration

### Development Tools
1. **Git** - Version control
2. **WebStorm** - Primary IDE
3. **Postman** - API development
4. **Figma** - Design collaboration

---

## 📚 Currently Exploring

I'm diving deep into AI and automation:
- Building workflows with **n8n**
- Mastering **prompt engineering**
- Implementing **RAG systems**
- Exploring **MCP** protocols
- Automating tasks with **Gemini CLI**

## 🤝 Let's Connect!

Feel free to reach out if you want to discuss any of these technologies!`


}

export
function highlightSyntax( line: string, fileName: string ): string {
    if (fileName.endsWith('.md')) return highlightMarkdown(line)
    if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) return highlightTypeScript(line)
    return line
}


function highlightMarkdown( line: string ): string {
    // Headers
    if (line.startsWith("# ")) return `<span class="text-blue-400 font-bold text-lg">${line}</span>`
    if (line.startsWith("## ")) return `<span class="text-blue-300 font-semibold">${line}</span>`
    if (line.startsWith("### ")) return `<span class="text-cyan-300">${line}</span>`

    // Quote
    if (line.startsWith("> ")) return `<span class="text-gray-400 italic border-l-4 border-gray-600 pl-2">${line.slice(2)}</span>`

    // Bullets
    line = line.replace(/^(\s*)- /, '$1<span class="text-gray-500">•</span> ')

    // Bold
    line = line.replace(/\*\*(.*?)\*\*/g, '<span class="text-orange-400 font-semibold">$1</span>')

    // Inline code
    line = line.replace(/`([^`]+)`/g, '<span class="bg-gray-800 text-pink-400 px-1 rounded">$1</span>')

    // Ordered lists
    line = line.replace(/^(\d+\.)/, '<span class="text-gray-500">$1</span>')

    // Fenced code blocks
    if (line.includes("```")) return `<span class="text-gray-600">${line}</span>`

    // Tasks [ ] [x]
    line = line.replace(/- \[( |x)\]/g, ( m, p1 ) =>
        p1 === "x"
            ? '<span class="text-green-400">✓</span>'
            : '<span class="text-gray-600">☐</span>'
    )

    // Links
    line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<span class="text-blue-400 underline">$1</span>')

    // Tables
    if (line.startsWith("|")) return `<span class="text-gray-500">${line}</span>`

    return line
}

function escapeHtml( s: string ) {
    return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function highlightTypeScript( rawLine: string ): string {
    const line = escapeHtml(rawLine);

    const tokenRe = /(\/\/.*$)|(\/\*.*?\*\/)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(`(?:\\.|[^`\\])*`)|\b(import|export|from|default|const|let|var|function|class|interface|type|extends|implements|new|return|if|else|switch|case|break|for|while|do|try|catch|finally|throw|as|in|of)\b|(:\s*)([A-Z][\w<>]*)|\b(true|false|null|undefined|void)\b|(\b\d+(?:\.\d+)?\b)|([\{\}\[\]\(\)])|(\b[A-Za-z_]\w*)(?=\s*:)\b/g;


    return line.replace(tokenRe, ( _m, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12 ) => {
        if (g1) return `<span class="text-gray-500 italic">${g1}</span>`;
        if (g2) return `<span class="text-gray-500 italic">${g2}</span>`;
        if (g3) return `<span class="text-green-400">${g3}</span>`;
        if (g4) return `<span class="text-green-400">${g4}</span>`;
        if (g5) return `<span class="text-pink-400">${g5}</span>`;
        if (g6) return `<span class="text-purple-400">${g6}</span>`;
        if (g7) return `${g7}<span class="text-yellow-400">${g8}</span>`;
        if (g9) return `<span class="text-orange-400">${g9}</span>`;
        if (g10) return `<span class="text-orange-300">${g10}</span>`;
        if (g11) return `<span class="text-white">${g11}</span>`;
        if (g12) return `<span class="text-cyan-400">${g12}</span>`;
        return _m;
    });
}
