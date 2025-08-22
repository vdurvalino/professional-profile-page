import {HeroSection} from "@/app/(components)/HeroSection";
import {StackSection} from "@/app/(components)/StackSection/";
import {ProjectsSection} from "@/app/(components)/ProjectsSection";
import {BlogSection} from "@/app/(components)/BlogSection";
import {ContactSection} from "@/components/ContactSection";
import {ValuesAndPhilosophySection} from "@/app/(components)/ValuesAndPhilosophySection";

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
