import React, {useMemo} from 'react';
import {extractHeadings, HeadingNode} from "@/lib/extract-headings";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {slugify} from "@/lib/slugify";

const renderHeadings = ( headings: HeadingNode[] ) => {
    if (!headings || headings.length === 0) {
        return null;
    }

    return (
        <ul>
            {headings.map(( heading, index ) => (
                <li key={index} style={{marginLeft: `${(heading.level - 2) * 8}px`}}>
                    <Link
                        href={`#${slugify(heading.text)}`}
                        className="text-font-secondary dark:text-font-secondary-dark hover:text-font-primary hover:dark:text-font-primary-dark transition-colors focus:ring-none focus:outline-none focus:border-b"
                    >
                        {heading.text}
                    </Link>
                    {renderHeadings(heading.children)}
                </li>
            ))}
        </ul>
    );
};

interface SidebarProps {
    content: string;
}

export function Sidebar( {content}: SidebarProps ) {
    const t = useTranslations()

    const nestedHeadings = useMemo(() => {
        if (!content) return [];
        return extractHeadings(content);
    }, [content]);

    return (
        <aside
            className="sticky top-24 p-6 bg-surface dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-600 h-fit">
            <h3 className="text-lg font-semibold mb-4 text-font-primary dark:text-font-primary-dark">
                {t("blogPost_sidebar_title")}
            </h3>
            <ul className="space-y-2">
                {renderHeadings(nestedHeadings)}
            </ul>
        </aside>
    )
}