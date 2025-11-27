import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withIntl = createNextIntlPlugin();

const nextConfig = {};

export default withIntl(nextConfig as NextConfig);
