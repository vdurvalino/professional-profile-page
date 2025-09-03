'use client';

import { BrainCircuit, Cloud, Database, Server, MonitorSmartphone, Code2 } from 'lucide-react';
import { useState } from 'react';
import {Button} from "@/components/ui/Button";
import {useTranslations} from "next-intl";


export const DetailedStack = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const t = useTranslations()

  const toggleExpanded = (key: string) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const stack = {
    frontend: {
      title: 'Frontend',
      icon: <MonitorSmartphone />,
      items: [
        { name: 'Next.js', experience: 4 },
        { name: 'React', experience: 8 },
        { name: 'TypeScript', experience: 5 },
        { name: 'Tailwind CSS', experience: 3 },
        { name: 'Zustand', experience: 3 },
        { name: 'ChakraUI', experience: 3 },
      ],
    },
    backend: {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: 'PHP', experience: 6 },
        { name: 'Laravel', experience: 2 },
        { name: 'Rest API', experience: 2 },
        { name: 'Node.js', experience: 9 },
      ],
    },
    database: {
      title: 'Banco de Dados',
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: 'MySQL', experience: 5 },
        { name: 'Prisma ORM', experience: 5 },
        { name: 'PostgreSQL', experience: 10 },
        { name: 'Drizzle ORM', experience: 5 },
      ],
    },
    devops: {
      title: 'DevOps',
      icon: <Cloud className="w-6 h-6" />,
      items: [
        { name: 'Docker', experience: 6 },
        { name: 'Vercel', experience: 4 },
        { name: 'Linux', experience: 4 },
        { name: 'CI/CD', experience: 8 },
        { name: 'VPS', experience: 4 },
      ],
    },
    tools: {
      title: t("aboutPage_stackSection_tools"),
      icon: <Code2 className="w-6 h-6" />,
      items: [
        { name: 'Git', experience: 10 },
        { name: 'WebStorm', experience: 6 },
        { name: 'Postman', experience: 8 },
        { name: 'Figma', experience: 8 },
      ],
    },
    ia: {
      title: t("aboutPage_stackSection_ia"),
      icon: <BrainCircuit className="w-6 h-6" />,
      items: [
        { name: 'n8n', experience: 2 },
        { name: 'Context/Prompt Engineering', experience: 1 },
        { name: 'Gemini CLI', experience: 3 },
        { name: 'RAG', experience: 3 },
        { name: 'MCP', experience: 3 },
      ],
    },
  };

  return (
      <section id={"stack"} className="pb-16 pt-32">
        <h2 className="section text-center mb-3">
          {t("aboutPage_stackSection_headline")}
        </h2>

        <p className={"section-description text-center"}>
          {t("aboutPage_stackSection_subHeadline")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start mt-12">
          {Object.entries(stack).map(([key, category]) => {
            const itemsToShow = expanded[key] ? category.items : category.items.slice(0, 3);

            return (
                <div
                    key={key}
                    className="relative bg-white dark:bg-gray-700/50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-gray-700 dark:text-gray-200 mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {itemsToShow.map((item, index) => (
                        <li
                            key={JSON.stringify(item)}
                            className={`flex justify-between items-center py-2 ${
                                index !== itemsToShow.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
                            }`}
                        >
                          <span className="text-gray-700 dark:text-gray-300">
                            {item?.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {item?.experience} {t("aboutPage_stackSection_years")}
                          </span>
                        </li>
                    ))}
                  </ul>

                  {category.items.length > 3 && !expanded[key] && (
                      <>
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
                          <Button
                              variant="outline"
                              size={"xs"}
                              onClick={() => toggleExpanded(key)}
                              className="rounded-full border-gray-200"
                          >
                            {t("aboutPage_stackSection_button_seeMore")}
                          </Button>
                        </div>
                      </>
                  )}

                  {expanded[key] && category.items.length > 3 && (
                    <div className="mt-6 text-center">
                      <Button
                          variant="outline"
                          size={"xs"}
                          onClick={() => toggleExpanded(key)}
                          className="rounded-full border-gray-200"
                      >
                        {t("aboutPage_stackSection_button_seeLess")}
                      </Button>
                    </div>
                  )}
                </div>
            )
          })}
        </div>
      </section>
  );
};
