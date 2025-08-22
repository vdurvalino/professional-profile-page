import React from 'react';
import {Github, Linkedin, Mail} from 'lucide-react';
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import {Button} from "@/components/ui/Button";

type ContactSectionProps = { className?: string }

export const ContactSection: React.FC<ContactSectionProps> = ( {className}: ContactSectionProps ) => {
    return (
        <section className={twMerge("mb-40", className)}>
            <div
                className="bg-white dark:bg-gray-900/20 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Vamos Trabalhar Juntos?
                </h2>

                <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer
                    parte de suas visões.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                                Entre em Contato
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    href="mailto:contact@durvalino.dev"
                                    target={"_blank"}
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                                >
                                    <Mail
                                        className="w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400"/>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                                        <div
                                            className="text-gray-700 dark:text-gray-300">contact@durvalino.dev
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="https://github.com/vdurvalino/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                                >
                                    <Github
                                        className="w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400"/>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                                        <div className="text-gray-700 dark:text-gray-300">@vdurvalino</div>
                                    </div>
                                </Link>

                                <Link
                                    href="https://www.linkedin.com/in/vinicius-d-de-souza-b745a41bb/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                                >
                                    <Linkedin
                                        className="w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400"/>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                                        <div className="text-gray-700 dark:text-gray-300">Vinícius Durvalino
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contact Form */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Mensagem Rápida
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Seu nome"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Seu email"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent"
                                />
                            </div>
                            <div>
                    <textarea
                        placeholder="Sua mensagem"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent resize-none"
                    />
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                            >
                                Enviar Mensagem
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
