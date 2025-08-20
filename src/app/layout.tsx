import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {HeaderSection} from "@/components/HeaderSection";
import {FooterSection} from "@/components/FooterSection";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Dev Vinícius Durvalino',
    description: 'Portfólio de desenvolvedor, blog e agregador de links.',
};

export default function RootLayout( {children}: Readonly<{ children: React.ReactNode; }> ) {
    return (
        <html lang="pt-BR">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-gray-50 dark:bg-slate-800">
            <HeaderSection/>
            <main>{children}</main>
            <FooterSection/>
        </div>
        </body>
        </html>
    );
}