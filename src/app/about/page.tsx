import Image from 'next/image';
import { DetailedStack } from '@/app/about/(components)/DetailedStack';
import { CTA } from '@/app/about/(components)/CTA';
import { HeaderSection } from '@/components/HeaderSection';
import { FooterSection } from '@/components/FooterSection';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-800">
      <HeaderSection />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-16">
          <div className="md:mr-8 mb-8 md:mb-0 flex-shrink-0">
            <Image
              src="/profile.png"
              alt="Vinícius Durvalino"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Sobre Mim</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Olá! Sou Vinícius Durvalino, um desenvolvedor Full Stack apaixonado por criar soluções digitais que resolvem problemas reais. Com mais de 10 anos de experiência na indústria de software, tive a oportunidade de trabalhar em uma ampla gama de projetos, desde sistemas de ERP complexos até aplicações SaaS inovadoras.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Minha jornada na programação começou com um simples &quot;Hello, World!&quot; e desde então, tenho me dedicado a aprender e dominar novas tecnologias. Acredito que a chave para o sucesso no desenvolvimento de software é uma combinação de código limpo, comunicação clara e um foco incansável no valor para o usuário final.
            </p>
          </div>
        </section>

        <DetailedStack />

        <section className="mt-16">
          <CTA />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AboutPage;