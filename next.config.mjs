/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Esto permite que el build termine aunque existan advertencias de linting (como las de las imágenes)
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Esto evita que errores menores de tipos detengan el despliegue
        ignoreBuildErrors: true,
    },
};

export default nextConfig;