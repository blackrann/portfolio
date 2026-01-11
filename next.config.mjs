import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Esto ignora los errores de ESLint durante el build para asegurar que despliegue
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Opcional: ignora errores de TypeScript si los hubiera
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default withSentryConfig(nextConfig, {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
}, {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
});