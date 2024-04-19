/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// module.exports = {
//     devServer: {
//       proxy: {
//         '/api': {
//           target: 'http://192.168.1.21:3000',
//           changeOrigin: true,
//           pathRewrite: {
//             '^/api': '',
//           },
//         },
//       },
//     },
//   }



// const securityHeaders = [{
//     key: 'X-DNS-Prefetch-Control',
//     value: 'on'
//   },{
//     key: 'X-Forwarded-Host',
//     value: '0.0.0.0:3000'
//   },{
//     key: 'X-Forwarded-Host',
//     value: '*'
//   },{
//     key: 'x-forwarded-host',
//     value: '0.0.0.0:3000'
//   },{
//     key: 'x-forwarded-host',
//     value: '*'
//   }]

//   //x-forwarded-host
// module.exports = {
//   async headers() {
//     return [
//       {
//         // Apply these headers to all routes in your application.
//         source: '/(.*)',
//         headers: securityHeaders,
//       },
//     ]
//   },
// }