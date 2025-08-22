import type {Metadata} from "next";
import {Inter, JetBrains_Mono, Source_Sans_3} from "next/font/google";
import {HeaderSection} from "@/components/HeaderSection";
import {FooterSection} from "@/components/FooterSection";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
    variable: "--font-source-sans",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jet-brains-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Dev Vinícius Durvalino',
    description: 'Portfólio de desenvolvedor, blog e agregador de links.',
};

export default function RootLayout( {children}: Readonly<{ children: React.ReactNode; }> ) {
    return (
        <html lang="pt-BR">
        <body className={`${inter.variable} ${jetBrainsMono.variable} ${sourceSans3.variable} antialiased`}>
        <div className="min-h-screen bg-background dark:bg-background-dark">
            <HeaderSection/>
            <main>{children}</main>
            <FooterSection/>
        </div>
        </body>
        </html>
    );
}