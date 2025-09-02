"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode } from "react";

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
    id?: string;
};

export default function LocaleSwitcherSelect({
                                                 children,
                                                 defaultValue,
                                                 label,
                                                 id, // 1. Receber o id
                                             }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        router.replace(
            // @ts-expect-error Erro esperado de tipagem TODO
            { pathname, params },
            { locale: nextLocale as Locale }
        );
    }

    return (
        <select
            id={id}
            defaultValue={defaultValue}
            onChange={handleChange}
            aria-label={label}
            className="w-full px-4 bg-transparent appearance-none focus:outline-none cursor-pointer"
        >
            {children}
        </select>
    );
}