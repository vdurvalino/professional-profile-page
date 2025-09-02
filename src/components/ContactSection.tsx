import React from 'react';
import { Mail} from 'lucide-react';
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import {Button} from "@/components/ui/Button";
import {getTranslations} from "next-intl/server";
import {GitHub} from "@/components/ui/icons/GitHub";
import {Linkedin} from "@/components/ui/icons/Linkedin";
import {DISCORD, EMAIL, GITHUB, LINKEDIN} from "@/constants/social";
import {Discord} from "@/components/ui/icons/Discord";

type ContactSectionProps = { className?: string }

export const ContactSection: React.FC<ContactSectionProps> = async ( {className}: ContactSectionProps ) => {
    const t = await getTranslations();

    return (
        <section className={twMerge("mb-40", className)}>
            <div
                className="bg-surface dark:bg-surface-dark rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="section mb-6 text-center">
                    {t("homePage_contact_headline")}
                </h2>

                <p className="section-description text-center mb-8 max-w-2xl mx-auto">
                    {t("homePage_contact_subheadline")}
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                                {t("homePage_contact_contactMe")}
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    href={DISCORD}
                                    target={"_blank"}
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                                >
                                    <Discord
                                        className="w-5 h-5 fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-400"/>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Discord</div>
                                        <div
                                            className="text-gray-700 dark:text-gray-300">.viniciusdesouza
                                        </div>
                                    </div>
                                </Link>
                                <Link
                                    href={EMAIL}
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
                                    href={LINKEDIN}
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

                                <Link
                                    href={GITHUB}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                                >
                                    <GitHub
                                        className="w-5 h-5 fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-400"/>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                                        <div className="text-gray-700 dark:text-gray-300">@vdurvalino</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contact Form */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                            {t("homePage_contact_quickMessage")}
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder={t("homePage_contact_fieldName")}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder={t("homePage_contact_fieldEmail")}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent"
                                />
                            </div>
                            <div>
                    <textarea
                        placeholder={t("homePage_contact_fieldMessage")}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent resize-none"
                    />
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                            >
                                {t("homePage_contact_button")}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
