import React from 'react';
import {Coffee, Github, Linkedin, Mail} from 'lucide-react';
import Link from "next/link";
import {Logo} from "@/components/ui/Logo";
import {SocialButton} from "@/components/SocialButton";

export const FooterSection: React.FC = () => {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <Logo/>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                            Desenvolvedor Fullstack dedicado a criar soluções elegantes para problemas complexos.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about"
                                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors">
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects"
                                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors">
                                    Projetos
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog"
                                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact"
                                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Conecte-se</h4>
                        <div className="flex gap-3">
                            <SocialButton
                                as={Link}
                                href="https://github.com/vdurvalino/"
                                target="_blank"
                            >
                                <Github className="w-4 h-4"/>
                            </SocialButton>
                            <SocialButton
                                as={Link}
                                href="https://www.linkedin.com/in/vinicius-d-de-souza-b745a41bb/"
                                target="_blank"
                            >
                                <Linkedin className="w-4 h-4"/>
                            </SocialButton>
                            <SocialButton
                                as={Link}
                                href="mailto:contact@durvalino.dev"
                                target="_blank"
                            >
                                <Mail className="w-5 h-5"/>
                            </SocialButton>
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
