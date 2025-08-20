import React from 'react';
import {Github, Linkedin} from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import heroPic from "@/../public/home-page-hero.png"

export const HeroSection: React.FC = () => {

    return (
        <section className="mb-50">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 flex flex-col gap-8">
                    <div
                        className="inline-flex w-fit items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Disponível para projetos
                    </div>

                    <h1 className="text-4xl md:text-6xl font-medium text-gray-900 dark:text-white">
                        Olá, eu sou um Desenvolvedor Fullstack
                    </h1>

                    <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                        Desenvolvedor Full Stack com 10+ anos de experiência, especialista em criar soluções
                        digitais escaláveis que reduzem custos, aumentam eficiência e entregam resultados
                        mensuráveis para empresas.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-start">
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

                <Image
                    src={heroPic.src}
                    alt={"Vinícius"}
                    width={600}
                    height={500}
                    priority={true}

                    className={"flex-1"}
                />
            </div>
        </section>
    );
};
