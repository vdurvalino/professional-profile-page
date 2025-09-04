import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "pt"],

    // Used when no locale matches
    defaultLocale: "en",
    pathnames: {
        "/about": {
            en: "/about",
            pt: "/sobre",
        },
        "/projects/": {
            en: "/projects",
            pt: "/projetos",
        },
        "/projects/[slug]": {
            en: "/projects/[slug]",
            pt: "/projetos/[slug]",
        },
        "/contact": {
            en: "/contact",
            pt: "/contato",
        },
    },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, usePathname, useRouter } = createNavigation(routing);