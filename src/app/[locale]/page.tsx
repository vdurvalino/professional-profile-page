import {HeroSection} from "@/app/[locale]/(components)/HeroSection";
import {StackSection} from "@/app/[locale]/(components)/StackSection";
import {ProjectsSection} from "@/app/[locale]/(components)/ProjectsSection";
import {BlogSection} from "@/app/[locale]/(components)/BlogSection";
import {ContactSection} from "@/components/ContactSection";
import {ValuesAndPhilosophySection} from "@/app/[locale]/(components)/ValuesAndPhilosophySection";

export default function HomePage() {
    return (
        <main className="py-20">
            <HeroSection/>
            <StackSection/>
            <ProjectsSection/>
            <BlogSection/>
            <ContactSection/>
            <ValuesAndPhilosophySection/>
        </main>
    );
};
