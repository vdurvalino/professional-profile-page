import { BrainCircuit, Cloud, Database, Server, MonitorSmartphone, Code2 } from 'lucide-react';

const stack = {
  frontend: {
    title: 'Frontend',
    icon: <MonitorSmartphone />,
    items: [
      { name: 'React', experience: '8 anos' },
      { name: 'Next.js', experience: '4 anos' },
      { name: 'TypeScript', experience: '5 anos' },
      { name: 'Tailwind CSS', experience: '3 anos' },
      { name: 'Zustand', experience: '3 anos' },
    ],
  },
  backend: {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: 'Node.js', experience: '9 anos' },
      { name: 'PHP', experience: '6 anos' },
      { name: 'Laravel', experience: '2 anos' },
      { name: 'Rest API', experience: '2 anos' },
    ],
  },
  database: {
    title: 'Banco de Dados',
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: 'PostgreSQL', experience: '10 anos' },
      { name: 'MySQL', experience: '5 anos' },
      { name: 'Drizzle ORM', experience: '5 anos' },
      { name: 'Prisma ORM', experience: '5 anos' },
    ],
  },
  devops: {
    title: 'DevOps',
    icon: <Cloud className="w-6 h-6" />,
    items: [
      { name: 'Docker', experience: '6 anos' },
      { name: 'CI/CD', experience: '8 anos' },
      { name: 'Vercel', experience: '4 anos' },
      { name: 'Linux', experience: '4 anos' },
      { name: 'VPS', experience: '4 anos' },
    ],
  },
  tools: {
    title: 'Ferramentas',
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: 'Git', experience: '10 anos' },
      { name: 'WebStorm', experience: '6 anos' },
      { name: 'Postman', experience: '8 anos' },
      { name: 'Figma', experience: '8 anos' },
    ],
  },
  ia: {
    title: 'Inteligência Artificial',
    icon: <BrainCircuit className="w-6 h-6" />,
    items: [
      { name: 'n8n', experience: '2 anos' },
      { name: 'Context/Prompt Engineering', experience: '1 ano' },
      { name: 'RAG', experience: '3 anos' },
      { name: 'MCP', experience: '3 anos' },
      { name: 'Gemini CLI', experience: '3 anos' },
    ],
  },
};

export const DetailedStack = () => {
  return (
      <section id={"stack"} className="pb-16 pt-32">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Minha Stack Tecnológica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(stack).map(([key, category]) => (
              <div
                  key={key}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-primary mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, index) => (
                      <li
                          key={item.name}
                          className={`flex justify-between items-center py-2 ${
                              index !== category.items.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
                          }`}
                      >
                  <span className="text-gray-700 dark:text-gray-300">
                    {item.name}
                  </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.experience}
                  </span>
                      </li>
                  ))}
                </ul>
              </div>
          ))}
        </div>
      </section>
  );
};
