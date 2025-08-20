import {HeroSection} from "@/app/(components)/HeroSection";
import {StackSection} from "@/app/(components)/StackSection";
import {ProjectsSection} from "@/app/(components)/ProjectsSection";
import {BlogSection} from "@/app/(components)/BlogSection";
import {ContactSection} from "@/app/(components)/ContactSection";
import {ValuesAndPhilosophySection} from "@/app/(components)/ValuesAndPhilosophySection";

export default function HomePage() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-16">
            <HeroSection/>
            <StackSection/>
            <ProjectsSection/>
            <BlogSection/>
            <ContactSection/>
            <ValuesAndPhilosophySection/>
        </main>
    );
};
