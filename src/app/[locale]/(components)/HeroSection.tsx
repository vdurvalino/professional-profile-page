import React from 'react';
import {Check,} from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import heroPic from "../../../../public/home-page-hero.png"
import nextPic from "../../../../public/tech/next.png"
import githubPic from "../../../../public/tech/github.png"
import dockerPic from "../../../../public/tech/docker.png"
import reactPic from "../../../../public/tech/react.png"
import tailwindPic from "../../../../public/tech/tailwind.png"
import vercelPic from "../../../../public/tech/vercel.svg"
import {Button} from "@/components/ui/Button";
import {Badge} from "@/components/ui/Badge";
import {getTranslations} from "next-intl/server";
import {GitHub} from "@/components/ui/icons/GitHub";
import {Linkedin} from "@/components/ui/icons/Linkedin";
import {GITHUB, LINKEDIN} from "@/constants/social";
import {client} from "@/lib/contentful";
import ContentfulImage from "@/lib/contentful-image";

export const HeroSection: React.FC = async () => {
    const [t, image] = await Promise.all([
        await getTranslations(),
        await client.getAsset("1roZ2lqT0OmsT9n1zfrCmN")
    ])

    const techs = [
        {src: nextPic, title: "Next.js"},
        {src: reactPic, title: "React"},
        {src: tailwindPic, title: "Tailwind CSS"},
        {src: githubPic, title: "GitHub"},
        {src: vercelPic, title: "Vercel"},
        {src: dockerPic, title: "Docker"}]

    return (
        <section className="page max-w-[88rem]">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 flex flex-col gap-8">
                    <Badge size={"lg"}>
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        {t('homePage_hero_badge')}
                    </Badge>

                    <h1 className="text-4xl md:text-6xl font-medium text-gray-900 dark:text-white">
                        {t('homePage_hero_headline')}
                    </h1>

                    <p className="text-lg max-w-2xl text-light dark:text-gray-400 mb-2 leading-relaxed">
                        {t('homePage_hero_subHeadline')}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-start">
                        <Button
                            size={"lg"}
                            as={Link}
                            href={LINKEDIN}
                            target="_blank"
                            className={"px-8"}
                        >
                            <Linkedin className="w-5 h-5"/>
                            LinkedIn
                        </Button>
                        <Button
                            size={"lg"}
                            variant={"outline"}
                            as={Link}
                            href={GITHUB}
                            target="_blank"
                            className={"px-8"}
                        >
                            <GitHub className="w-5 h-5"/>
                            GitHub
                        </Button>
                    </div>
                    <div className={"flex flex-col gap-1 pl-4 mt-4"}>
                        {[
                            t('homePage_hero_result_1'),
                            t('homePage_hero_result_2'),
                            t('homePage_hero_result_3')
                        ].map(( item ) => (
                            <div key={item} className={"flex gap-2 items-center"}>
                                <span className={"p-1 bg-primary/10 dark:bg-primary-dark/10 rounded-full"}>
                                    <Check className={"w-4 h-4 text-primary dark:text-primary-dark"}/>
                                </span>
                                <span
                                    className={"text-font-primary/90 dark:text-font-primary-dark/90 text-sm"}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={"relative w-fit md:pl-28"}>
                    <ContentfulImage
                        src={image.fields?.file?.url || ''}
                        alt={image?.fields?.description}
                        width={450}
                        height={350}
                        priority={true}
                    />
                    <div className={"hidden absolute bottom-0 md:bottom-10 left-4 md:left-15 grid grid-cols-3 gap-4"}>
                        {techs.map(( {src, title} ) => (
                            <div
                                key={title}
                                title={title}
                                className={"w-10 md:w-14 h-10 md:h-14 p-2 flex justify-center items-center bg-gray-200/80 dark:bg-gray-700 rounded-full"}
                            >
                                <Image
                                    src={src}
                                    alt={title}
                                    width={30}
                                    height={30}
                                    priority={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
