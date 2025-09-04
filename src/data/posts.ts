"use server"

import ReadingTime from "reading-time"
import {client} from "@/lib/contentful";
import {getLocale} from "next-intl/server";
import type {EntryCollection} from "contentful";
import type {TypePostsSkeleton} from "@/types/contentful";


type TypePostsFieldsWithReadingTime = TypePostsSkeleton["fields"] & {
    readingTime: string;
};

export type TypePostsSkeletonWithReadingTime = {
    fields: TypePostsFieldsWithReadingTime;
    contentTypeId: TypePostsSkeleton["contentTypeId"];
};

/**
 * Busca as entradas do menu principal do Contentful com tipagem.
 * @returns {Promise<EntryCollection<TypePostsSkeletonWithReadingTime>>} Uma coleção de posts.
 */
export const getPosts = async (): Promise<EntryCollection<TypePostsSkeletonWithReadingTime>> => {
    const locale = await getLocale();

    const posts = await client.getEntries<TypePostsSkeleton>({
        content_type: "post",
        locale,
    })

    return {
        "total": posts.total,
        "skip": posts.skip,
        "limit": posts.limit,
        "items": posts.items.map(( item ) => ({
            ...item,
            fields: {
                ...item.fields,
                readingTime: ReadingTime(item?.fields?.content || '').minutes.toFixed(0)
            }
        })),
    }
}


/**
 * Busca uma entrada de post do Contentful pelo slug com tipagem.
 * @param slug O slug do post a ser buscado.
 * @returns {Promise<Entry<TypePostsSkeletonWithReadingTime> | null>} Uma única entrada de post ou null se não for encontrada.
 */
export const getPostBySlug = async (slug: string) => {
    const locale = await getLocale();

    const post = await client.getEntries<TypePostsSkeleton>({
        content_type: "post",
        "fields.slug": slug,
        locale,
        limit: 1,
    });


    if (post.items.length > 0) {
        const item = post.items[0]
        return {
            ...item,
            fields: {
                ...item.fields,
                readingTime: ReadingTime(item?.fields?.content || '').minutes.toFixed(0)
            }
        }
    }

    return null;
};

/**
 * Busca as entradas do menu principal do Contentful com tipagem.
 * @returns {Promise<EntryCollection<TypePostsSkeletonWithReadingTime>>} Uma coleção de posts.
 */
export const getFeaturedPosts = async (): Promise<EntryCollection<TypePostsSkeletonWithReadingTime>> => {
    const locale = await getLocale();

    const posts = await client.getEntries<TypePostsSkeleton>({
        content_type: "post",
        "fields.featured": true,
        locale,
    })

    return {
        "total": posts.total,
        "skip": posts.skip,
        "limit": posts.limit,
        "items": posts.items.map(( item ) => ({
            ...item,
            fields: {
                ...item.fields,
                readingTime: ReadingTime(item?.fields?.content || '').minutes.toFixed(0)
            }
        })),
    }
}
