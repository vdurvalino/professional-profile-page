'use client';

import React, {useEffect, useState} from 'react';
import Link from "next/link";

interface Heading {
    id: string;
    level: number;
    text: string;
}

interface SidebarProps {
    content: string;
}

const Sidebar: React.FC<SidebarProps> = ( {content} ) => {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const extractedHeadings: Heading[] = [];
        const matches = content.matchAll(/<h([2-4]).*?>(.*?)<\/h[2-4]>/g);
        for (const match of matches) {
            const level = parseInt(match[1], 10);
            const text = match[2];
            const id = text.toLowerCase().replace(/\s+/g, '-');
            extractedHeadings.push({id, level, text});
        }
        setHeadings(extractedHeadings);
    }, [content]);

    return (
        <aside
            className="sticky top-24 p-6 bg-surface dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-600 h-fit">
            <h3 className="text-lg font-semibold mb-4 text-font-primary dark:text-font-primary-dark">On this page</h3>
            <ul className="space-y-2">
                {headings.map(( heading ) => (
                    <li key={heading.id} style={{marginLeft: `${(heading.level - 2) * 1}rem`}}>
                        <Link
                            href={`#${heading.id}`}
                           className="text-font-secondary dark:text-font-secondary-dark hover:text-font-primary hover:dark:text-font-primary-dark transition-colors focus:ring-none focus:outline-none focus:border-b"
                        >
                            {heading.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
