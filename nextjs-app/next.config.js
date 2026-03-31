/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages 서브경로 배포 시 아래 두 줄 주석 해제 (커스텀 도메인 사용 시 불필요)
  // basePath: '/DongWooCompanySite',
  // assetPrefix: '/DongWooCompanySite',
}

module.exports = nextConfig
