/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/about",
        permanent: true,
      },
      // {
      //   source: "/certificates",
      //   destination: "/certificates",
      //   permanent: true,
      // },
      // {
      //   source: "/contact",
      //   destination: "/contact",
      //   permanent: true,
      // },
      // {
      //   source: "/projects",
      //   destination: "/projects",
      //   permanent: true,
      // },
    ];
  },
  // output: "export",
  // basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
  // assetPrefix: process.env.URL ? process.env.URL : undefined,
  swcMinify: true,
};

export default nextConfig;
