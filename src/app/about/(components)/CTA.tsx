import Link from 'next/link';
import {ArrowRight} from 'lucide-react';

export const CTA = () => {
    return (
        <div className="cta-banner mb-24">
            <div className="container mx-auto px-6 text-center">
                <h3 className="cta-headline">
                    Vamos Construir Algo Incrível Juntos?
                </h3>
                <p className="cta-sub-headline">
                    Estou disponível para novos projetos e oportunidades.
                    Se você precisa de um desenvolvedor experiente para transformar
                    suas ideias em realidade, vamos conversar!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="cta-button"
                    >
                        Entre em Contato
                        <ArrowRight className="ml-2 w-5 h-5"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};
