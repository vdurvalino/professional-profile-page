import type {Asset, Entry, EntryCollection, EntrySkeletonType} from 'contentful';


/**
 * Interface para os campos do menu principal (Content Type: 'generalMenu')
 * - title: O nome do menu (ex: "Menu Principal")
 * - menuItems: Uma lista de referências a entradas do tipo 'menuItem'
 */
export interface TypeGeneralMenuFields {
    item: string;
    slug: string;
    order: number;
}

/**
 * Define o "esqueleto" do Entry para o 'generalMenu'.
 * Isso informa ao TypeScript a estrutura exata da resposta do Contentful,
 * incluindo o ID do Content Type e a forma dos campos (fields).
 */
export type TypeGeneralMenuSkeleton = EntrySkeletonType<TypeGeneralMenuFields, "generalMenu">;



export interface TypeTagsFields {
    name: string;
    slug: string;
}


/**
 * Define o "esqueleto" do Entry para o 'tags'.
 * Isso informa ao TypeScript a estrutura exata da resposta do Contentful,
 * incluindo o ID do Content Type e a forma dos campos (fields).
 */
export type TypeTagsSkeleton = EntrySkeletonType<TypeTagsFields, "tags">;


export interface TypePostFields {
    title: string;
    slug: string;
    resume: string;
    content: string
    tags: EntryCollection<TypeTagsSkeleton>
}

/**
 * Define o "esqueleto" do Entry para o 'post'.
 * Isso informa ao TypeScript a estrutura exata da resposta do Contentful,
 * incluindo o ID do Content Type e a forma dos campos (fields).
 */
export type TypePostsSkeleton = EntrySkeletonType<TypePostFields, "post">;



export interface TypeTechFields {
    name: string;
    slug: string;
}

/**
 * Define o "esqueleto" do Entry para o 'tech'.
 * Isso informa ao TypeScript a estrutura exata da resposta do Contentful,
 * incluindo o ID do Content Type e a forma dos campos (fields).
 */
export type TypeTechSkeleton = EntrySkeletonType<TypeTechFields, "tech">;


export interface TypeProjectFields {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    thumbnail: Asset;
    highlights: string[];
    highlighted: boolean;
    tech: Entry<TypeTechSkeleton>[];
}

/**
 * Define o "esqueleto" do Entry para o 'project'.
 * Isso informa ao TypeScript a estrutura exata da resposta do Contentful,
 * incluindo o ID do Content Type e a forma dos campos (fields).
 */
export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "projects">;