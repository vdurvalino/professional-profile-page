"use server"

import {client} from "@/lib/contentful";
import {getLocale} from 'next-intl/server';
import type {EntryCollection} from 'contentful';
import type {TypeGeneralMenuSkeleton} from '@/types/contentful'; // Ajuste o caminho se necessário

/**
 * Busca as entradas do menu principal do Contentful com tipagem.
 * @returns {Promise<EntryCollection<TypeGeneralMenuSkeleton>>} Uma coleção de entradas de menu.
 */
export const getMenu = async (): Promise<EntryCollection<TypeGeneralMenuSkeleton>> => {
    const locale = await getLocale();

    return await client.getEntries<TypeGeneralMenuSkeleton>({
        content_type: "generalMenu",
        locale,
        order: ['fields.order']  as unknown as never
    });
}