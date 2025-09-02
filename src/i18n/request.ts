import {getRequestConfig} from 'next-intl/server';
import {client} from "@/lib/contentful";
import {Locale, routing} from "./routing";


async function getMessages( locale: string ) {
    const entries = await client.getEntries({
        content_type: 'uiTranslations',
        locale: locale,
        // @ts-expect-error TODO Vou analisar depois
        select: 'fields.key,fields.translationValue',
    });

    return entries.items.reduce(( acc, item ) => {
        // @ts-expect-error TODO Vou analisar depois
        acc[item.fields.key] = item.fields.translationValue;
        return acc;
    }, {});
}

export default getRequestConfig(async ( {requestLocale} ) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as Locale)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: await getMessages(locale),
    };
});