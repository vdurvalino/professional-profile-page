import React from 'react';
import {Github, Linkedin} from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import heroPic from "@/../public/home-page-hero.png"
import nextPic from "@/../public/tech/next.png"
import githubPic from "@/../public/tech/github.png"
import dockerPic from "@/../public/tech/docker.png"
import reactPic from "@/../public/tech/react.png"
import tailwindPic from "@/../public/tech/tailwind.png"
import vercelPic from "@/../public/tech/vercel.svg"
import {Button} from "@/components/ui/Button";

export const HeroSection: React.FC = () => {

    const techs = [
        {src: nextPic, title: "Next.js"},
        {src: reactPic, title: "React"},
        {src: tailwindPic, title: "Tailwind CSS"},
        {src: githubPic, title: "GitHub"},
        {src: vercelPic, title: "Vercel"},
        {src: dockerPic, title: "Docker"}]

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
                        <Button
                            size={"lg"}
                            as={Link}
                            href="https://github.com/vdurvalino/"
                            target="_blank"
                            className={"px-8"}
                        >
                            <Github className="w-5 h-5"/>
                            GitHub
                        </Button>
                        <Button
                            size={"lg"}
                            variant={"outline"}
                            as={Link}
                            href="https://www.linkedin.com/in/vinicius-d-de-souza-b745a41bb/"
                            target="_blank"
                            className={"px-8"}
                        >
                            <Linkedin className="w-5 h-5"/>
                            LinkedIn
                        </Button>
                    </div>
                    Strong design
                </div>

                <div className={"relative flex-1"}>
                    <Image
                        src={heroPic.src}
                        alt={"A foto do desenvolvedor dentro de um Monitor de computador e dentro de um Smartphone"}
                        width={600}
                        height={500}
                        priority={true}
                    />
                    <div className={"absolute bottom-0 md:bottom-10 left-4 md:left-15 grid grid-cols-3 gap-4"}>
                        {techs.map(( {src, title} ) => (
                            <div
                                key={title}
                                title={title}
                                className={"w-10 md:w-14 h-10 md:h-14 p-2 flex justify-center items-center bg-gray-200/80 dark:bg-gray-700 rounded-full"}
                            >
                                <Image
                                    src={src}
                                    alt={title}
                                    width={30}
                                    height={30}
                                    priority={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
