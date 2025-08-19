import React from 'react';
import {MessageSquare, Target, Zap} from 'lucide-react';

export const ValuesAndPhilosophySection: React.FC = () => {
    return (
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Como Trabalho
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Princípios que guiam meu trabalho e garantem resultados excepcionais
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center group">
                    <div
                        className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Target className="w-10 h-10 text-white"/>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Foco no Resultado</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Código é <b>meio, não fim</b>. O objetivo é sempre resolver problemas reais
                    </p>
                </div>

                <div className="text-center group">
                    <div
                        className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <MessageSquare className="w-10 h-10 text-white"/>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Comunicação Clara</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Traduzo complexidade técnica em linguagem acessível para todos
                    </p>
                </div>

                <div className="text-center group">
                    <div
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="w-10 h-10 text-white"/>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Entrega Ágil</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Iterações rápidas com feedback constante para ajustes precisos
                    </p>
                </div>
            </div>

            <div
                className="mt-12 bg-gray-50 dark:bg-gray-900/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <blockquote className="text-center">
                    <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-4">
                        &quot;La belleza de lo simple, y no de la simpleza!&quot;
                    </p>
                    <cite className="text-sm text-gray-500 dark:text-gray-400">
                        — René Lavand
                    </cite>
                </blockquote>
            </div>
        </section>
    );
};
