import {ArrowRight} from 'lucide-react';
import Link from "next/link";
import {getProjects} from "@/data/projects";
import {PageContent} from "@/app/[locale]/projects/PageContent";
import {getTranslations} from "next-intl/server";

const ProjectsPage = async () => {
    const [projects, t] = await Promise.all([
        await getProjects(),
        await getTranslations()
    ])

    return (
        <div className="min-h-screen pb-40">
            <PageContent {...projects} />

            {/* CTA Section */}
            <div className="cta-banner">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="cta-headline">
                        {t("projectsPage_cta_headline")}
                    </h2>
                    <p className="cta-sub-headline">
                        {t("projectsPage_cta_subHeadline")}
                    </p>
                    <Link
                        href="/contact"
                        className="cta-button"
                    >
                        {t("projectsPage_cta_button")}
                        <ArrowRight className="w-5 h-5"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
