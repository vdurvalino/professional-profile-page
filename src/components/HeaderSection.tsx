'use client'

import React, {useEffect, useState} from 'react';
import {Github, Linkedin, Menu, Moon, Sun, X} from 'lucide-react';
import {useAppStore} from "@/stores/app-store";
import Link from "next/link";
import {Button} from "@/components/ui/Button";
import {Logo} from "@/components/ui/Logo";
import {usePathname} from "next/navigation";
import {isCurrentResource} from "@/utils/is-current-resource";

const pages: { href: string, name: string }[] = [
    {href: "/", name: "Home"},
    {href: "/about", name: "Sobre"},
    {href: "/projects", name: "Projetos"},
    {href: "/blog", name: "Blog"},
    {href: "/contact", name: "Contato"},
]

export const HeaderSection: React.FC = () => {
    const {isDarkMode, language, toggleDarkMode, setLanguage, initializeTheme} = useAppStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        initializeTheme();
    }, [initializeTheme]);

    // UseEffect para controlar o scroll do body
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function para garantir que o scroll seja reabilitado
        // se o componente for desmontado por algum motivo
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <header
                className="border-b border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10"
            >
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <Logo/>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            {pages.map(({href, name}) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`text-sm font-medium transition-colors ${isCurrentResource(href, pathname) ? 'text-green-600 dark:text-green-500' : 'text-gray-600 dark:text-gray-400'} hover:text-gray-900 dark:hover:text-white`}
                                >
                                    {name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <Button variant={"outline"} size={"sm"} className={"block md:hidden"}
                                onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <X/> : <Menu/>}
                        </Button>

                        {/* Desktop Action Buttons */}
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

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-4">
                            <nav className="flex flex-col items-start gap-4">
                                {pages.map(({href, name}) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={`text-sm font-medium transition-colors ${isCurrentResource(href, pathname) ? 'text-green-600 dark:text-green-500' : 'text-gray-600 dark:text-gray-400'} hover:text-gray-900 dark:hover:text-white`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {name}
                                    </Link>
                                ))}
                            </nav>
                            <div className="flex items-center gap-2 mt-4">
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
                    )}
                </div>
            </header>

            {/*Overlay*/}
            {isMobileMenuOpen && (
                <div
                    className={"fixed inset-0 bg-transparent backdrop-blur-sm z-0"}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};