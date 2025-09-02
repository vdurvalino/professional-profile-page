"use server"

import {client} from "@/lib/contentful";
import {getLocale} from "next-intl/server";
import type {EntryCollection} from "contentful";
import type {TypeProjectSkeleton} from "@/types/contentful";


/**
 * Busca as entradas do menu principal do Contentful com tipagem.
 * @returns {Promise<EntryCollection<TypeProjectSkeleton>>} Uma coleção de projects.
 */
export const getProjects = async (): Promise<EntryCollection<TypeProjectSkeleton>> => {
    const locale = await getLocale();

    const projects = await client.getEntries<TypeProjectSkeleton>({
        content_type: "projects",
        locale,
    })

    return {
        "total": projects.total,
        "skip": projects.skip,
        "limit": projects.limit,
        "items": projects.items,
    }
}
