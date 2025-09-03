'use client'

import React, {useEffect, useState} from 'react';
import {Menu, Moon, Sun, X} from 'lucide-react';
import {useAppStore} from "@/stores/app-store";
import Link from "next/link";
import {Button} from "@/components/ui/Button";
import {Logo} from "@/components/ui/Logo";
import {usePathname} from "next/navigation";
import {isCurrentResource} from "@/utils/is-current-resource";
import {SocialButton} from "@/components/SocialButton";
import LocaleSwitcher from "@/components/HeaderSection/LocaleSwitcher";
import type {EntryCollection} from "contentful";
import type {TypeGeneralMenuSkeleton} from "@/types/contentful";
import {useLocale} from "next-intl";
import {GitHub} from "@/components/ui/icons/GitHub";
import {Linkedin} from "@/components/ui/icons/Linkedin";
import {GITHUB, LINKEDIN} from "@/constants/social";


export const HeaderSection: React.FC<EntryCollection<TypeGeneralMenuSkeleton>> = ( {items}: EntryCollection<TypeGeneralMenuSkeleton> ) => {
    const {isDarkMode, toggleDarkMode, initializeTheme} = useAppStore();
    const menus = items.map(( menu ) => ({...menu.fields}))

    const locale = useLocale()
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
                className="border-b border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-20"
            >
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <Logo/>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            {menus.map(( {slug, item}, idx ) => (
                                <React.Fragment key={idx}>
                                    {
                                        slug ?
                                            <Link
                                                href={`/${locale}/${slug}`}
                                                className={`text-sm font-medium transition-colors ${isCurrentResource(String(slug), pathname) ? 'text-primary dark:text-green-500' : 'text-gray-600 dark:text-gray-400'} hover:text-gray-900 dark:hover:text-white`}
                                            >
                                                <>{item || ''}</>
                                            </Link> :
                                            <span><>{item || ''}</></span>
                                    }
                                </React.Fragment>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <Button variant={"outline"} size={"sm"} className={"block md:hidden"}
                                onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <X/> : <Menu/>}
                        </Button>

                        {/* Desktop Action Buttons */}
                        <div className="hidden md:flex items-center gap-2">
                            <SocialButton
                                as={Link}
                                href={GITHUB}
                                target="_blank"
                            >
                                <GitHub className="w-4 h-4 fill-primary"/>
                            </SocialButton>
                            <SocialButton
                                as={Link}
                                href={LINKEDIN}
                                target="_blank"
                            >
                                <Linkedin className="w-4 h-4"/>
                            </SocialButton>
                            <SocialButton
                                onClick={toggleDarkMode}
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? (
                                    <Sun className="w-4 h-4"/>
                                ) : (
                                    <Moon className="w-4 h-4"/>
                                )}
                            </SocialButton>
                            <LocaleSwitcher/>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div
                            className="fixed bg-white/10 backdrop-blur-lg w-screen h-screen md:hidden mt-6"
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsMobileMenuOpen(false)
                            }}
                        >
                            <nav className="flex flex-col items-start gap-4">
                                {menus.map(( {slug, item}, idx ) => (
                                    <React.Fragment key={idx}>
                                        {
                                            slug ?
                                                <Link
                                                    href={slug}
                                                    className={`text-sm font-medium transition-colors ${isCurrentResource(String(slug), pathname) ? 'text-primary dark:text-green-500' : 'text-gray-600 dark:text-gray-400'} hover:text-gray-900 dark:hover:text-white`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    <>{item || ''}</>
                                                </Link> :
                                                <span><>{item || ''}</></span>
                                        }
                                    </React.Fragment>
                                ))}
                            </nav>
                            <div className="flex items-center gap-2 mt-4">
                                <Button
                                    variant={"outline"}
                                    size={'xs'}
                                    className={"rounded-full py-1.5 h-fit"}
                                    as={Link}
                                    href={GITHUB}
                                    target="_blank"
                                >
                                    <GitHub className="fill-primary w-5 h-5"/>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    size={'xs'}
                                    className={"rounded-full py-1.5 h-fit"}
                                    as={Link}
                                    href={LINKEDIN}
                                    target="_blank"
                                >
                                    <Linkedin className="text-primary w-5 h-5"/>
                                </Button>
                                <Button
                                    variant={"outline"}
                                    size={'xs'}
                                    className={"rounded-full py-1.5 h-fit"}
                                    onClick={toggleDarkMode}
                                    aria-label="Toggle dark mode"
                                >
                                    {isDarkMode ? (
                                        <Sun className="text-primary w-5 h-5"/>
                                    ) : (
                                        <Moon className="text-primary w-5 h-5"/>
                                    )}
                                </Button>
                                <div className={"border rounded-full h-fit border-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 active:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:bg-gray-700"}>
                                    <LocaleSwitcher/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/*Overlay*/}
            {isMobileMenuOpen && (
                <div
                    className={"fixed inset-0 bg-transparent backdrop-blur-sm z-10"}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};