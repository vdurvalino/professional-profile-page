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


/**
 * Busca uma entrada de projeto do Contentful pelo slug com tipagem.
 * @param slug O slug do projeto a ser buscado.
 * @returns {Promise<Entry<TypeProjectSkeleton> | null>} Uma única entrada de projeto ou null se não for encontrada.
 */
export const getProjectBySlug = async (slug: string) => {
    const locale = await getLocale();

    const project = await client.getEntries<TypeProjectSkeleton>({
        content_type: "projects",
        "fields.slug": slug,
        locale,
        limit: 1,
    });

    if (project.items.length > 0) {
        return project.items[0];
    }

    return null;
};
