import React from 'react';
import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';
import {Calendar, BookOpen, ArrowLeft} from 'lucide-react';
import Sidebar from './(components)/Sidebar';
import Link from "next/link";
import Image from "next/image"

interface BlogPostPageProps {
  id: string;
}

export default async function BlogPage({params}: {params: Promise<BlogPostPageProps>}) {
  const {id: blogId } = await params

  const post = posts.find((p) => p.id.toString() === blogId);

  if (!post) {
    notFound();
  }

  // Function to add ids to headings
  const addIdsToHeadings = (content: string) => {
    return content.replace(/<h([2-4]).*?>(.*?)<\/h[2-4]>/g, (match, level, text) => {
      const id = text.toLowerCase().replace(/\s+/g, '-');
      return `<h${level} id="${id}">${text}</h${level}>`;
    });
  };

  const contentWithIds = addIdsToHeadings(post.content);

  return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/blog"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4"/>
            Voltar para todos os artigos
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article>

              <div className="relative h-60 md:h-96 mb-8">
                <Image
                    src={post.image}
                    alt={post.title}
                    priority={true}
                    fill
                    className={"object-cover rounded-lg"}
                />
              </div>
              <h1 className="section mb-4">{post.title}</h1>
              <p className="section-description">{post.excerpt}</p>

              <div
                  className="flex items-center gap-3 text-sm text-font-secondary dark:text-font-secondary-dark mb-8 mt-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4"/>
                  {post.date}
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4"/>
                  {post.readTime}
                </div>
              </div>

              <hr className={"border-gray-200 my-8"}/>

              <div className="block lg:hidden mb-8">
                <Sidebar content={post.content}/>
              </div>
              <div
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{__html: contentWithIds}}
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map(( tag, index ) => (
                    <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary rounded-full text-xs"
                    >
                  #{tag}
                </span>
                ))}
              </div>
            </article>
          </div>
          <div className="hidden lg:block lg:col-span-1">
            <Sidebar content={post.content}/>
          </div>
        </div>
      </div>
  );
};


