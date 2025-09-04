import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import {DISCORD, GITHUB, LINKEDIN} from "@/constants/social";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/linkedin',
                destination: LINKEDIN,
                permanent: false,
            },
            {
                source: '/github',
                destination: GITHUB,
                permanent: false,
            },
            {
                source: '/discord',
                destination: DISCORD,
                permanent: false,
            },
        ]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);