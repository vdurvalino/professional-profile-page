import React from 'react';
import {Coffee, Mail} from 'lucide-react';
import Link from "next/link";
import {Logo} from "@/components/ui/Logo";
import {SocialButton} from "@/components/SocialButton";
import {getLocale, getTranslations} from "next-intl/server";
import type {EntryCollection} from "contentful";
import type {TypeGeneralMenuSkeleton} from "@/types/contentful";
import {GitHub} from "@/components/ui/icons/GitHub";
import {Linkedin} from "@/components/ui/icons/Linkedin";
import {Discord} from "@/components/ui/icons/Discord";
import {DISCORD, EMAIL, GITHUB, LINKEDIN} from "@/constants/social";

export const FooterSection: React.FC<EntryCollection<TypeGeneralMenuSkeleton>> = async ( {items}: EntryCollection<TypeGeneralMenuSkeleton> ) => {
    const t = await getTranslations();
    const menus = items.map(( menu ) => ({...menu.fields}))
    const locale = await getLocale()

    return (
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <Logo/>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                            {t("general_footer_description")}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                            {t("general_footer_quickLinks")}
                        </h4>
                        <ul className="space-y-2">
                            {menus.map(( {slug, item}, idx ) => (
                                <li key={idx}>
                                    {
                                        slug ?
                                            <Link
                                                href={`/${locale}/${slug}`}
                                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
                                            >
                                                <>{item || ''}</>
                                            </Link> :
                                            <span><>{item || ''}</></span>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                            {t("general_footer_connect")}
                        </h4>
                        <div className="flex gap-3">
                            <SocialButton
                                as={Link}
                                href={GITHUB}
                                target="_blank"
                            >
                                <GitHub className={"fill-primary"}/>
                            </SocialButton>
                            <SocialButton
                                as={Link}
                                href={DISCORD}
                                target="_blank"
                            >
                                <Discord className="w-5 h-5 fill-primary"/>
                            </SocialButton>
                            <SocialButton
                                as={Link}
                                href={LINKEDIN}
                                target="_blank"
                            >
                                <Linkedin className="w-5 h-5"/>
                            </SocialButton>
                            <SocialButton
                                as={Link}
                                href={EMAIL}
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
                        <span>{t("general_footer_copyright")}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
