/** @type {import('next').NextConfig} */
const nextConfig = {
  // تعطيل فحص TypeScript أثناء مرحلة البناء
  typescript: {
    ignoreBuildErrors: true,
  },
  // تعطيل فحص ESLint أثناء مرحلة البناء
  eslint: {
    ignoreDuringBuilds: true,
  },
  // إذا كنت تستخدم التصدير الثابت SPA
  // output: 'export',
  // ...
};

export default nextConfig;
