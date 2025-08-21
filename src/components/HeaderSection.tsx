'use client'

import React, {useEffect} from 'react';
import {Github, Linkedin, Menu, Moon, Sun} from 'lucide-react';
import {useAppStore} from "@/stores/app-store";
import Link from "next/link";
import {Button} from "@/components/ui/Button";
import {Logo} from "@/components/ui/Logo";

const pages: { href: string, name: string }[] = [
    {href: "/", name: "Home"},
    {href: "/about", name: "Sobre"},
    {href: "/projects", name: "Projetos"},
    {href: "/blog", name: "Blog"},
    {href: "/contact", name: "Contato"},
]

export const HeaderSection: React.FC = () => {
    const {isDarkMode, language, toggleDarkMode, setLanguage, initializeTheme} = useAppStore();

    useEffect(() => {
        initializeTheme();
    }, [initializeTheme]);

    return (
        <header
            className="border-b border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10"
        >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Logo/>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {pages.map(( {href, name} ) => (
                            <Link
                                key={href}
                                href={href}
                                className={`text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white`}
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>
                    <Button variant={"outline"} size={"sm"} className={"block md:hidden"}><Menu/></Button>

                    <div className="hidden md:flex items-center gap-2">
                        <Button
                            variant={"outline"}
                            size={'xs'}
                            as={Link}
                            href="https://github.com/vdurvalino/"
                            target="_blank"
                        >
                            <Github className="w-5 h-5"/>
                        </Button>
                        <Button
                            variant={"outline"}
                            size={'xs'}
                            as={Link}
                            href="https://www.linkedin.com/in/vinicius-d-de-souza-b745a41bb/"
                            target="_blank"
                        >
                            <Linkedin className="w-5 h-5"/>
                        </Button>
                        <Button
                            variant={"outline"}
                            size={'xs'}
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <Sun className="w-5 h-5"/>
                            ) : (
                                <Moon className="w-5 h-5"/>
                            )}
                        </Button>
                        <Button
                            variant={"outline"}
                            size={'xs'}
                            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                            aria-label="Toggle Language"
                        >
                            {language === 'pt' ? 'EN' : 'PT'}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

