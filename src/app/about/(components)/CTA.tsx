import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
      <div className="bg-gray-900 text-white py-16 px-6 rounded-lg shadow-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Vamos Construir Algo Incrível Juntos?
          </h3>
          <p className="text-lg leading-relaxed mb-8 opacity-90">
            Estou disponível para novos projetos e oportunidades.
            Se você precisa de um desenvolvedor experiente para transformar
            suas ideias em realidade, vamos conversar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300"
            >
              Entre em Contato
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-transparent border-1 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 hover:text-gray-200 transition-colors duration-300"
            >
              Ver Projetos
            </Link>
          </div>
        </div>
      </div>
  );
};
