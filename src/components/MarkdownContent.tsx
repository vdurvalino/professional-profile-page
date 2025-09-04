import type {Components} from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {ComponentPropsWithoutRef} from "react";

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