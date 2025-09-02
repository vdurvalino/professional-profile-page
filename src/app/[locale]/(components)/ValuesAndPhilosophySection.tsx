import React from 'react';
import {MessageSquare, Target, Zap} from 'lucide-react';
import {getTranslations} from "next-intl/server";

export const ValuesAndPhilosophySection: React.FC = async () => {
    const t = await getTranslations();

    return (
        <section className="page">
            <div className="text-center mb-12">
                <h2 className="section">
                    {t("homePage_valuesAndPhilosophy_title")}
                </h2>
                <p className="section-description max-w-2xl mx-auto">
                    {t("homePage_valuesAndPhilosophy_subHeadline")}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center group">
                    <div
                        className="w-20 h-20 bg-primary dark:bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Target className="w-10 h-10 text-white"/>
                    </div>
                    <h3 className="font-semibold text-font-primary dark:text-font-primary-dark mb-2">
                        {t("homePage_valuesAndPhilosophy_resultTitle")}
                    </h3>
                    <p className="text-sm text-font-secondary dark:text-font-secondary-dark">
                        {t("homePage_valuesAndPhilosophy_resultDescription")}
                    </p>
                </div>

                <div className="text-center group">
                    <div
                        className="w-20 h-20 bg-primary dark:bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <MessageSquare className="w-10 h-10 text-white"/>
                    </div>
                    <h3 className="font-semibold text-font-primary dark:text-font-primary-dark mb-2">
                        {t("homePage_valuesAndPhilosophy_communicationTitle")}
                    </h3>
                    <p className="text-sm text-font-secondary dark:text-font-secondary-dark">
                        {t("homePage_valuesAndPhilosophy_communicationDescription")}
                    </p>
                </div>

                <div className="text-center group">
                    <div
                        className="w-20 h-20 bg-primary dark:bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="w-10 h-10 text-white"/>
                    </div>
                    <h3 className="font-semibold text-font-primary dark:text-font-primary-dark mb-2">
                        {t("homePage_valuesAndPhilosophy_deliveryTitle")}
                    </h3>
                    <p className="text-sm text-font-secondary dark:text-font-secondary-dark">
                        {t("homePage_valuesAndPhilosophy_deliveryDescription")}
                    </p>
                </div>
            </div>

            <div
                className="mt-12 bg-surface dark:bg-surface-dark/40 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <blockquote className="text-center">
                    <p className="text-xl text-font-primary dark:text-font-primary-dark italic mb-4">
                        &quot;{t("homePage_valuesAndPhilosophy_quote")}&quot;
                    </p>
                    <cite className="text-sm text-font-secondary dark:text-font-secondary-dark">
                        — {t("homePage_valuesAndPhilosophy_quoteAuthor")}
                    </cite>
                </blockquote>
            </div>
        </section>
    );
};
