import type {Components} from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {ComponentPropsWithoutRef} from "react";
import {slugify} from "@/lib/slugify"


interface MarkdownContentProps {
    content: string;
    isDarkMode?: boolean;
}

interface MarkdownContentProps {
    content: string;
    isDarkMode?: boolean; // Adicionar isDarkMode na interface
}

export const MarkdownContent = ( {content}: MarkdownContentProps ) => {
    const components: Components = {
        code( {inline, className, children, ...props}: ComponentPropsWithoutRef<'code'> & { inline?: boolean } ) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';

            return !inline && language ? (
                <SyntaxHighlighter
                    // @ts-expect-error Error expected
                    style={oneDark}
                    language={language}
                    PreTag="div"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
        // Because of HTML semantics, there should only be one h1 on
        // the page and this h1 is already the title of the blog/service
        h1( {children, ...props} ) {
            const text = String(children);
            return <h2 id={slugify(text)} {...props}>{children}</h2>;
        },
        h2( {children, ...props} ) {
            const text = String(children);
            return <h3 id={slugify(text)} {...props}>{children}</h3>;
        },
        h3( {children, ...props} ) {
            const text = String(children);
            return <h4 id={slugify(text)} {...props}>{children}</h4>;
        },
        h4( {children, ...props} ) {
            const text = String(children);
            return <h5 id={slugify(text)} {...props}>{children}</h5>;
        },
        h5( {children, ...props} ) {
            const text = String(children);
            return <h6 id={slugify(text)} {...props}>{children}</h6>;
        },
        h6( {children, ...props} ) {
            const text = String(children);
            return <h6 id={slugify(text)} {...props}>{children}</h6>;
        },
    };

    return (
        <div className="content">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={components}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};