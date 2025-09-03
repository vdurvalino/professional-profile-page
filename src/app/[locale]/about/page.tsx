import Image from 'next/image';
import {DetailedStack} from '@/app/[locale]/about/(components)/DetailedStack';
import {CTA} from '@/app/[locale]/about/(components)/CTA';
import {getTranslations} from "next-intl/server";
import {client} from "@/lib/contentful";
import ContentfulImage from "@/lib/contentful-image";

const AboutPage = async () => {
    const [t, pic] = await Promise.all([
        await getTranslations(),
        await client.getAsset("6gYQjZPqYE6c5s7B086kMZ")
    ])

    return (
        <main className="py-16">
            {/* Bio Section */}
            <section className={"page max-w-6xl"}>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="relative w-48 h-48 lg:w-64 lg:h-64">
                            <ContentfulImage
                                src={pic?.fields?.file?.url || ''}
                                alt={pic.fields.title}
                                fill
                                className="rounded-full object-cover shadow-xl"
                                priority={true}
                            />
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="section mb-6">
                            {t("aboutPage_headline")}
                        </h1>

                        <div className="space-y-4 text-lg leading-relaxed">
                            {t("aboutPage_bio_paragraph").split("\n").map(( paragraph ) => (
                                <p
                                    className={"text-font-primary/80 dark:text-font-primary-dark/70"}
                                    key={paragraph}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stack Section */}
            <section className={"page"}>
                <DetailedStack/>
            </section>

            {/* CTA Section */}
            <CTA/>

        </main>
    );
};

export default AboutPage;