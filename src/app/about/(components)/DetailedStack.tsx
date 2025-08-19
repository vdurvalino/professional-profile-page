import { BrainCircuit, Cloud, Database, Box, MonitorSmartphone } from 'lucide-react';

const stack = {
  frontend: {
    title: 'Frontend',
    icon: <MonitorSmartphone />,
    items: [
      { name: 'React', experience: '8 anos' },
      { name: 'Next.js', experience: '4 anos' },
      { name: 'TypeScript', experience: '5 anos' },
      { name: 'Tailwind CSS', experience: '3 anos' },
    ],
  },
  backend: {
    title: 'Backend',
    icon: <Box />,
    items: [
      { name: 'Node.js', experience: '9 anos' },
      { name: 'Python', experience: '6 anos' },
      { name: 'Go', experience: '2 anos' },
    ],
  },
  database: {
    title: 'Banco de Dados',
    icon: <Database />,
    items: [
      { name: 'PostgreSQL', experience: '10 anos' },
      { name: 'MongoDB', experience: '5 anos' },
      { name: 'Redis', experience: '7 anos' },
    ],
  },
  devops: {
    title: 'DevOps',
    icon: <Cloud />,
    items: [
      { name: 'AWS', experience: '8 anos' },
      { name: 'Docker', experience: '6 anos' },
      { name: 'Kubernetes', experience: '4 anos' },
    ],
  },
  ia: {
    title: 'Inteligência Artificial',
    icon: <BrainCircuit />,
    items: [
      { name: 'OpenAI API', experience: '2 anos' },
      { name: 'LangChain', experience: '1 ano' },
    ],
  },
};

export const DetailedStack = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Minha Stack Tecnológica</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(stack).map((category) => (
          <div key={category.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-4 text-primary">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
            </div>
            <ul>
              {category.items.map((item) => (
                <li key={item.name} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{item.experience}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};