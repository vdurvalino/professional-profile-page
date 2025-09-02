import React from "react";
import {getTranslations} from "next-intl/server";
import {TerminalWrapper} from "@/app/[locale]/(components)/StackSection/TerminalWrapper";

export async function StackSection() {
    const t = await getTranslations();

    return (
        <section className="page">
            <div className="mb-12 text-center mb-10">
                <h2 className="section mb-2">
                    {t('homePage_stack_headline')}
                </h2>
                <p className="section-description">
                    {t('homePage_stack_subHeadline')}
                </p>
            </div>

            <TerminalWrapper/>
        </section>
    );
}
