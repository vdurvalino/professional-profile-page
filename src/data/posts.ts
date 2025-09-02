"use server"

import ReadingTime from "reading-time"
import {client} from "@/lib/contentful";
import {getLocale} from "next-intl/server";
import type {EntryCollection} from "contentful";
import type {TypePostsSkeleton} from "@/types/contentful";


export interface TypePostsSkeletonWithReadingTime extends TypePostsSkeleton {
    readingTime: string
}

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