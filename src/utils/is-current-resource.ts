/**
 * Checks if the provided link (href) matches the current page path (`pathname`).
 * This function is designed to highlight the correct navigation link.
 *
 * The function returns `true` under two main conditions:
 * 1. If the `href` is an exact match of the `pathname`. This covers cases such as the home page (`/`)
 * and other top-level pages (e.g., `/about` when `pathname` is `/about`).
 * 2. If the current `pathname` "starts with" the link's `href`. This is useful for sections
 * with subpages. For example, the "Blog" link (`/blog`) should remain active
 * when the user is on a specific post (`/blog/some-post`). *
 * The `href !== '/'` condition is crucial in the second check to prevent the Home link (`/`)
 * from being active on all pages, since every `pathname` begins with `/`.
 *
 * @param {string} href - The path of the link being rendered in the navigation menu.
 * @param {string} pathname - The current pathname.
 * @returns {boolean} - Returns `true` if the `href` corresponds to the current page or a parent section of the current page.
 *
 * @example
 * // Scenario 1: Blog Post Page
 * // pathname = '/blog/123'
 * isCurrentResource('/blog') // Returns true
 * isCurrentResource('/projects') // Returns false
 *
 * @example
 * // Scenario 2: Blog Home Page
 * // pathname = '/blog'
 * isCurrentResource('/blog') // Returns true
 *
 * @example
 * // Scenario 3: Home Page
 * // pathname = '/'
 * isCurrentResource('/') // Returns true
 * isCurrentResource('/blog') // Returns false
 */
export const isCurrentResource = ( href?: string, pathname?: string ): boolean => {
    if(!pathname || !href) return false

    // Checks for an exact match first. Essential for the home page ('/')
    // and for pages that don't have subroutes.
    if (href === pathname) {
        return true;
    }

    // If not an exact match, checks if the current pathname begins
    // with the link's href, ensuring the href isn't the root ('/').
    // This enables the parent link in nested routes (e.g., '/blog' in '/blog/123').
    return pathname.startsWith(href) && href !== '/';
}
