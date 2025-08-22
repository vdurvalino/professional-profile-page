/**
 * Verifica se o link (href) fornecido corresponde à rota atual da página (`pathname`).
 * Esta função é projetada para destacar o link de navegação correto.
 *
 * A função retorna `true` sob duas condições principais:
 * 1. Se o `href` é uma correspondência exata do `pathname`. Isso cobre casos como a página inicial (`/`)
 * e outras páginas de nível superior (ex: `/about` quando `pathname` é `/about`).
 * 2. Se o `pathname` atual "começa com" o `href` do link. Isso é útil para seções
 * com sub-páginas. Por exemplo, o link "Blog" (`/blog`) deve permanecer ativo
 * quando o usuário está em uma postagem específica (`/blog/algum-post`).
 *
 * A condição `href !== '/'` é crucial na segunda verificação para evitar que o link da Home (`/`)
 * fique ativo em todas as páginas, já que todo `pathname` começa com `/`.
 *
 * @param {string} href - O caminho do link que está sendo renderizado no menu de navegação.
 * @param {string} pathname - O pathname atual.
 * @returns {boolean} - Retorna `true` se o `href` corresponde à página atual ou a uma seção pai da página atual.
 *
 * @example
 * // Cenário 1: Página de uma postagem do blog
 * // pathname = '/blog/123'
 * isCurrentResource('/blog') // Retorna true
 * isCurrentResource('/projects') // Retorna false
 *
 * @example
 * // Cenário 2: Página principal do blog
 * // pathname = '/blog'
 * isCurrentResource('/blog') // Retorna true
 *
 * @example
 * // Cenário 3: Página inicial
 * // pathname = '/'
 * isCurrentResource('/') // Retorna true
 * isCurrentResource('/blog') // Retorna false
 */
export const isCurrentResource = (href: string, pathname: string): boolean => {
    // Verifica a correspondência exata primeiro. Essencial para a home ('/')
    // e para páginas que não têm sub-rotas.
    if (href === pathname) {
        return true;
    }

    // Se não for uma correspondência exata, verifica se o pathname atual começa
    // com o href do link, garantindo que o href não seja a raiz ('/').
    // Isso ativa o link pai em rotas aninhadas (ex: '/blog' em '/blog/123').
    return pathname.startsWith(href) && href !== '/';
}
