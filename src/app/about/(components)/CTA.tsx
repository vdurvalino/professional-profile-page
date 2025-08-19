import Link from 'next/link';

export const CTA = () => {
  return (
    <div className="bg-primary text-white py-16 px-6 rounded-lg shadow-lg text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Vamos Trabalhar Juntos?</h3>
        <p className="text-lg leading-relaxed mb-8">
          Estou sempre aberto a novas oportunidades e colaborações.
        </p>
        <Link
          href="/contact"
          className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Entre em Contato
        </Link>
      </div>
    </div>
  );
};