/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/users/:path*',
        destination: `${process.env.USER_SERVICE_URL}/api/users/:path*`,
      },
      {
        source: '/api/contacts/:path*',
        destination: `${process.env.CONTACTS_SERVICE_URL}/api/contacts/:path*`,
      }
    ]
  }
};

export default nextConfig;
