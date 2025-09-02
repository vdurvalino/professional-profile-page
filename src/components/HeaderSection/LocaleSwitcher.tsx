import { useId } from "react";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const selectId = useId();

    return (
        <div
            className="flex items-center gap-2 p-2 h-8 text-primary dark:text-primary-dark hover:text-primary-hover dark:hover:text-primary-hover-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10 rounded-full transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background"
        >
            <label htmlFor={selectId} className="cursor-pointer -mr-4">
                <Globe className="h-4 w-4" />
            </label>

            <LocaleSwitcherSelect
                id={selectId}
                defaultValue={locale}
                label="Select a locale"
            >
                {routing.locales.map((cur) => (
                    <option key={cur} value={cur} >
                        {cur.toUpperCase()}
                    </option>
                ))}
            </LocaleSwitcherSelect>
        </div>
    );
}