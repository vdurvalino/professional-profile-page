import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {useLocale, useTranslations} from "next-intl";

export const CTA = () => {
    const t = useTranslations()
    const locale = useLocale()

    return (
        <div className="cta-banner mb-24">
            <div className="container mx-auto px-6 text-center">
                <h3 className="cta-headline">{t("aboutPage_cta_headline")}</h3>
                <p className="cta-sub-headline"
                   dangerouslySetInnerHTML={{__html: t("aboutPage_cta_subHeadline").replaceAll("\n", "<br />")}}
                />
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href={`/${locale}/contact`}
                        className="cta-button"
                    >
                        {t("aboutPage_cta_button")}
                        <ArrowRight className="ml-2 w-5 h-5"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};
