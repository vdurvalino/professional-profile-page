// app/about/page.tsx

import Image from 'next/image';
import { DetailedStack } from '@/app/about/(components)/DetailedStack';
import { CTA } from '@/app/about/(components)/CTA';
import { HeaderSection } from '@/components/HeaderSection';
import { FooterSection } from '@/components/FooterSection';

const AboutPage = () => {
  return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-800">
        <HeaderSection />

        <main className="max-w-6xl mx-auto px-6 py-16">
          {/* Bio Section */}
          <section>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 lg:w-64 lg:h-64">
                  <Image
                      src="https://github.com/vdurvalino.png"
                      alt="Vinícius Durvalino"
                      fill
                      className="rounded-full object-cover shadow-xl"
                      priority
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  Sobre Mim
                </h1>

                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Olá! Sou Vinícius Durvalino, um desenvolvedor Full Stack apaixonado por criar
                    soluções digitais que resolvem problemas reais. Com mais de 10 anos de experiência
                    na indústria de software, tive a oportunidade de trabalhar em uma ampla gama de
                    projetos, desde sistemas de ERP complexos até aplicações SaaS inovadoras.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Minha jornada na programação começou com um simples &quot;Hello, World!&quot; e
                    desde então, tenho me dedicado a aprender e dominar novas tecnologias. Acredito
                    que a chave para o sucesso no desenvolvimento de software é uma combinação de
                    código limpo, comunicação clara e um foco incansável no valor para o usuário final.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stack Section */}
          <DetailedStack />

          {/* CTA Section */}
          <section className="mt-16">
            <CTA />
          </section>
        </main>

        <FooterSection />
      </div>
  );
};

export default AboutPage;