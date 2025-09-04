import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/vinicius-d-de-souza-b745a41bb/',
                permanent: false,
            },
            {
                source: '/github',
                destination: 'https://github.com/vdurvalino/',
                permanent: false,
            },
            {
                source: '/discord',
                destination: 'https://discordapp.com/users/710987761661902990',
                permanent: false,
            },
        ]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);