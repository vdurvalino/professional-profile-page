import React from 'react';
import {Coffee, Github, Linkedin, Mail, Terminal} from 'lucide-react';
import Link from "next/link";

export const FooterSection: React.FC = () => {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                                <Terminal className="w-6 h-6 text-white dark:text-gray-900"/>
                            </div>
                            <div className="font-mono text-sm text-gray-600 dark:text-gray-400">
                                Vinícius Durvalino
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Desenvolvedor Fullstack dedicado a criar soluções elegantes para problemas complexos.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about"
                                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects"
                                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    Projetos
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog"
                                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact"
                                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Conecte-se</h4>
                        <div className="flex gap-3">
                            <Link
                                href="https://github.com/vdurvalino/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400"/>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/vinicius-d-de-souza-b745a41bb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400"/>
                            </Link>
                            <Link
                                href="mailto:contact@durvalino.dev"
                                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col justify-center items-center gap-2"
                >
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Coffee className="w-5 h-5"/>
                        <span>Feito com café, código e IA.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
