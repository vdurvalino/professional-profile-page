'use client'

import React, {useEffect, useState} from 'react';
import {Coffee, ExternalLink, Github, Linkedin, Moon, Sun, Terminal} from 'lucide-react';
import {useAppStore} from "@/stores/app-store";
import {NotificationForm} from "@/components/NotificationForm";


export const ComingSoon: React.FC = () => {
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
        <div className="min-h-screen bg-gray-50 dark:bg-slate-800 transition-all duration-300">
            {/* Header */}
            <header
                className="border-b border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                            <Terminal className="w-6 h-6 text-white dark:text-gray-900"/>
                        </div>
                        <div>
                            <div className="font-mono text-sm text-gray-600 dark:text-gray-400">Vinícius Durvalino</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">{currentTime}</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleDarkMode}
                            className="px-3 py-1 text-sm font-mono cursor-pointer rounded transition-all
                               bg-gray-50 border border-transparent hover:bg-gray-100
                               dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-100
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:border-gray-600
                               dark:focus:ring-offset-gray-900"
                            ariea-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <Sun className="w-5 h-5"/>
                            ) : (
                                <Moon className="w-5 h-5"/>
                            )}
                        </button>

                        <button
                            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                            className="px-3 py-1 text-sm font-mono cursor-pointer rounded transition-all
                               bg-gray-50 border border-gray-300 hover:bg-gray-100
                               dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-100
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:border-gray-600
                               dark:focus:ring-offset-gray-900"
                        >
                            {language === 'pt' ? 'EN' : 'PT'}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium mb-6">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        {t.status}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        {t.greeting}
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t.intro}
                    </p>
                </div>

                {/* What I'm Building */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            {t.building}
                        </h2>
                        <ul className="space-y-4">
                            {t.features.map(( feature, index ) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div
                                        className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            {t.workingOn}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {t.tech.map(( tech, index ) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-mono"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Terminal-like section */}
                <div className="bg-gray-900 dark:bg-gray-900 rounded-lg p-6 mb-16 font-mono text-sm">
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
                        <div className="mb-2 text-yellow-400">
                            ⚡ {t.launched}
                        </div>
                        <div>
                            <span className="text-blue-400">$</span> <span
                            className="bg-gray-700 text-gray-700 animate-blink">_</span>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div
                    className="bg-white dark:bg-gray-900/20 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                        {t.contact}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Social Links */}
                        <div className="space-y-4">
                            <h3 className="font-medium text-gray-900 dark:text-white mb-4">{t.email}</h3>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://github.com/vdurvalino/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                                >
                                    <Github
                                        className="w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300"/>
                                    <span className="text-gray-700 dark:text-gray-300">GitHub</span>
                                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto"/>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vinicius-d-de-souza-b745a41bb/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                                >
                                    <Linkedin
                                        className="w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300"/>
                                    <span className="text-gray-700 dark:text-gray-300">LinkedIn</span>
                                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto"/>
                                </a>
                            </div>
                        </div>

                        {/* Email Subscription */}
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white mb-4">{t.subscribe}</h3>
                            <NotificationForm/>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-6 py-8 text-center">
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                        <Coffee className="w-4 h-4"/>
                        <span>{t.footer}</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};