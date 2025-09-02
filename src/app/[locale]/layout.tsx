import type {Metadata} from "next";
import {Inter, JetBrains_Mono, Source_Sans_3} from "next/font/google";
import {HeaderSection} from "@/components/HeaderSection";
import {FooterSection} from "@/components/FooterSection";
import {NextIntlClientProvider} from "next-intl";
import "./globals.css";
import {getMenu} from "@/data/menu";
import {client} from "@/lib/contentful";

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

export async function generateMetadata(): Promise<Metadata> {
    const {fields: data} = await client.getEntry('6iA8DbtYusUTI3XYg1Mbft')

    return {
        title: String(data?.title) || '',
        description: String(data?.description) || '',
    }
}


export default async function RootLayout( {children}: Readonly<{ children: React.ReactNode; }> ) {
    const menu = await getMenu()

    return (
        <html lang="pt-BR">
        <body className={`${inter.variable} ${jetBrainsMono.variable} ${sourceSans3.variable} antialiased`}>
        <NextIntlClientProvider>
            <div className="min-h-screen bg-background dark:bg-background-dark">
                <HeaderSection {...menu}/>
                <main>{children}</main>
                <FooterSection  {...menu}/>
            </div>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}