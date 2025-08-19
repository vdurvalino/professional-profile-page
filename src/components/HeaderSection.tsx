'use client'

import React, {useEffect, useState} from 'react';
import {Github, Linkedin, Moon, Sun, TerminalIcon} from 'lucide-react';
import {useAppStore} from "@/stores/app-store";
import Link from "next/link";

export const HeaderSection: React.FC = () => {
    const {isDarkMode, language, t, toggleDarkMode, setLanguage, initializeTheme} = useAppStore();
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        initializeTheme();

        const updateTime = () => {
            setCurrentTime(new Date().toLocaleTimeString());
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [initializeTheme]);

    return (
        <header
            className="border-b border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10"
        >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src={"https://github.com/vdurvalino.png"} className={"w-10 h-10 rounded-full"}/>
                        <div className="font-mono text-sm text-gray-600 dark:text-gray-400">
                            Vinícius Durvalino
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="md:flex items-center gap-6">
                        <button
                            className={`text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white`}
                        >
                            Home
                        </button>
                        <button
                            className={`text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white`}
                        >
                            Sobre
                        </button>
                        <button
                            className={`text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white`}
                        >
                            Projetos
                        </button>
                        <button
                            className={`text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white`}
                        >
                            Blog
                        </button>
                        <button
                            className={`text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white`}
                        >
                            Contato
                        </button>
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link href="https://github.com/vdurvalino/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 text-sm font-mono cursor-pointer rounded transition-all
                  bg-gray-200 border border-transparent hover:bg-gray-300
                  dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:border-gray-600
                  dark:focus:ring-offset-gray-900"
                        >
                            <Github className="w-5 h-5"/>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/vinicius-d-de-souza-b745a41bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 py-1 text-sm font-mono cursor-pointer rounded transition-all
                  bg-gray-200 border border-transparent hover:bg-gray-300
                  dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:border-gray-600
                  dark:focus:ring-offset-gray-900"
                        >
                            <Linkedin className="w-5 h-5"/>
                        </Link>
                        <button
                            onClick={toggleDarkMode}
                            className="px-2 py-1 text-sm font-mono cursor-pointer rounded transition-all
                  bg-gray-200 border border-transparent hover:bg-gray-300
                  dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:border-gray-600
                  dark:focus:ring-offset-gray-900"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <Sun className="w-5 h-5"/>
                            ) : (
                                <Moon className="w-5 h-5"/>
                            )}
                        </button>

                        <button
                            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                            className="px-2 py-1 text-sm font-mono cursor-pointer rounded transition-all
                  bg-gray-200 border border-transparent hover:bg-gray-300
                  dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:border-gray-600
                  dark:focus:ring-offset-gray-900"
                        >
                            {language === 'pt' ? 'EN' : 'PT'}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

