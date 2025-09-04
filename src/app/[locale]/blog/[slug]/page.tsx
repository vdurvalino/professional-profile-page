import {getPostBySlug} from "@/data/posts";
import {getLocale, getTranslations} from "next-intl/server";
import {notFound} from "next/navigation";
import React from "react";
import {ArrowLeft, BookOpen, Calendar, Tag} from "lucide-react";
import {Badge} from "@/components/ui/Badge";
import {Sidebar} from "@/app/[locale]/blog/[slug]/(components)/Sidebar";
import {Button} from "@/components/ui/Button";
import Link from "next/link";
import {MarkdownContent} from "@/components/MarkdownContent";

interface BlogPostPageProps {
    slug: string
}

const BlogPostPage = async ( {params}: { params: Promise<BlogPostPageProps> } ) => {
    const {slug} = await params

    const [post, t, locale] = await Promise.all([
        getPostBySlug(slug),
        getTranslations(),
        getLocale()
    ]);

    if (!post) {
        notFound()
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="mb-12">
                <Button as={Link} href={`/${locale}/blog`} variant={"outline"} className={"gap-2"}>
                    <ArrowLeft className="w-4 h-4"/>
                    {t("blogPost_back_button")}
                </Button>
            </div>
            <div className="grid lg:grid-cols-12 gap-12">
                <main className="lg:col-span-8">
                    <article>
                        <header className="mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-font-primary dark:text-font-primary-dark mb-4 leading-tight">
                                {post.fields.title}
                            </h1>
                            <div
                                className="flex items-center gap-6 text-sm text-font-secondary dark:text-font-secondary-dark">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4"/>
                                    <time dateTime={post.sys.updatedAt}>
                                        {new Date(post.sys.updatedAt).toLocaleDateString()}
                                    </time>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4"/>
                                    <span>{post.fields.readingTime} {t("blogPost_reading_time")}</span>
                                </div>
                            </div>
                        </header>

                        <MarkdownContent
                            content={post.fields.content}
                        />

                        <footer className="mt-12">
                            <div className="flex items-center gap-2">
                                <Tag className="w-5 h-5 text-font-secondary dark:text-font-secondary-dark"/>
                                <h3 className="text-lg font-semibold text-font-primary dark:text-font-primary-dark">
                                    {t("blogPost_tags_title")}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {post.fields.tags.map(( {fields} ) => (
                                    <Badge key={fields.slug} size={"sm"} className="font-mono">#{fields.name}</Badge>
                                ))}
                            </div>
                        </footer>
                    </article>
                </main>

                <aside className="lg:col-span-4">
                    <Sidebar content={post.fields.content}/>
                </aside>
            </div>
        </div>
    )
}

export default BlogPostPage
