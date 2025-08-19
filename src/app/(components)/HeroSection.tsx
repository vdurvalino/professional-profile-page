'use client'

import React from 'react';
import {Github, Linkedin} from 'lucide-react';
import Link from "next/link";

export const HeroSection: React.FC = () => {

    return (
        <section className="mb-20">
            <div className="flex flex-col gap-12 items-center">
                <div className="flex-1 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-6">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Disponível para projetos
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Olá, mundo!
                        <span
                            className="block text-2xl md:text-3xl mt-2 text-gray-600 dark:text-gray-400 font-normal">
                  Desenvolvedor Fullstack
                </span>
                    </h1>

                    <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        Desenvolvedor Full Stack com 10+ anos de experiência, especialista em criar soluções
                        digitais escaláveis que reduzem custos, aumentam eficiência e entregam resultados
                        mensuráveis para empresas.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="https://github.com/vdurvalino/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                        >
                            <Github className="w-5 h-5"/>
                            GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/vinicius-d-de-souza-b745a41bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <Linkedin className="w-5 h-5"/>
                            LinkedIn
                        </Link>
                    </div>
                </div>

                {/* Terminal Section */}

                {/* Terminal-like section */}
                <div
                    className="w-4xl max-w-[90vw] bg-gray-900 dark:bg-gray-900 rounded-lg p-6 mb-16 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400 ml-2">terminal</span>
                    </div>
                    <div className="text-green-400">
                        <div className="mb-2">
                            <span className="text-blue-400">$</span> npm run dev
                        </div>
                        <div className="mb-2 text-gray-400">
                            ▲ Next.js 15.3.5
                        </div>
                        <div className="mb-2 text-gray-400">
                            - Local: http://localhost:3000
                        </div>
                        <div className="mb-2 text-purple-400">
                            🤖 AI integrations: n8n workflows ready
                        </div>
                        <div className="mb-2 text-cyan-400">
                            🚀 10 years of ERP/SaaS experience loaded
                        </div>
                        <div>
                            <span className="text-blue-400">$</span> <span
                            className="bg-gray-700 text-gray-700 animate-blink">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
