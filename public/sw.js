if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/3l79__KoNSiPwU3QyqWqj/_buildManifest.js",revision:"dc51dbbb10065c02cba7502b0fed0a99"},{url:"/_next/static/3l79__KoNSiPwU3QyqWqj/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/3l79__KoNSiPwU3QyqWqj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/133-5e4185df4b107877.js",revision:"5e4185df4b107877"},{url:"/_next/static/chunks/172-c0281787a92fb6ba.js",revision:"c0281787a92fb6ba"},{url:"/_next/static/chunks/192-c54ba7821ca77ced.js",revision:"c54ba7821ca77ced"},{url:"/_next/static/chunks/254-f9997ff2c7a291be.js",revision:"f9997ff2c7a291be"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-1c75b2a932ea3332.js",revision:"1c75b2a932ea3332"},{url:"/_next/static/chunks/pages/_app-a536d5306436191c.js",revision:"a536d5306436191c"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/auth/forgot_password-99f24716faa3b6b2.js",revision:"99f24716faa3b6b2"},{url:"/_next/static/chunks/pages/auth/signin-f410cb1ecb629ede.js",revision:"f410cb1ecb629ede"},{url:"/_next/static/chunks/pages/auth/signout-50207cd2cc4addef.js",revision:"50207cd2cc4addef"},{url:"/_next/static/chunks/pages/auth/signup-60edb32b009a2191.js",revision:"60edb32b009a2191"},{url:"/_next/static/chunks/pages/explore-9d2fe6a1d2e5ebdc.js",revision:"9d2fe6a1d2e5ebdc"},{url:"/_next/static/chunks/pages/explore/category/%5Bname%5D-bc246a27ccbc0eaa.js",revision:"bc246a27ccbc0eaa"},{url:"/_next/static/chunks/pages/explore/restaurant/%5Bname%5D-46a6a745a91cde94.js",revision:"46a6a745a91cde94"},{url:"/_next/static/chunks/pages/favourite-b97321a72a20dbd9.js",revision:"b97321a72a20dbd9"},{url:"/_next/static/chunks/pages/index-176c2e32b33c2d9f.js",revision:"176c2e32b33c2d9f"},{url:"/_next/static/chunks/pages/messages-86efd3ac831458d2.js",revision:"86efd3ac831458d2"},{url:"/_next/static/chunks/pages/orders-c7d29e8e577f0fdf.js",revision:"c7d29e8e577f0fdf"},{url:"/_next/static/chunks/pages/search-7381e58c0e2ddd62.js",revision:"7381e58c0e2ddd62"},{url:"/_next/static/chunks/pages/settings-5c0a5b2d3ea32299.js",revision:"5c0a5b2d3ea32299"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/45e50297bd4a0a0b.css",revision:"45e50297bd4a0a0b"},{url:"/_next/static/media/Image.3b2e22fe.png",revision:"3b2e22fe"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"c430afc0a3ad9149a38bbc86a0cd104c"},{url:"/icon-256x256.png",revision:"c7d1cac23a5fcf1b5c2c087c50891f54"},{url:"/icon-384x384.png",revision:"736fac641feb9ddf4ad8ffa2f8020717"},{url:"/icon-512x512.png",revision:"57d49817c5c4724691e0b81e3ff44834"},{url:"/img/Image.png",revision:"c9e13e7455eee3483ce2f77d00f6dfdb"},{url:"/img/Map.png",revision:"d19fa8f405a2932b187cd4f7660b830b"},{url:"/img/Map.svg",revision:"13a4355b220cffe93fff599eca53e2e0"},{url:"/img/burgerKing.png",revision:"7bbb44cc7e1d54fcd38970a4f11050ba"},{url:"/img/burgerKing.svg",revision:"c1e24b3960722c5a6c291ca2a9cbce91"},{url:"/img/hamburger.png",revision:"9f3b9b9f3dabe2d27bd5fce260457a6d"},{url:"/img/user.svg",revision:"8893fec8dc3dfaca0a60c0797ace1f82"},{url:"/manifest.json",revision:"24920fa1e31e96b71e712f36abf9d3f7"},{url:"/media/cart1.png",revision:"5565a8d7295729677e3333cae530a45e"},{url:"/media/cart2.png",revision:"d8b0ea080153562d441e75d5679e04f9"},{url:"/media/food.png",revision:"1c74fa2f19fd48a6099df111aebe1768"},{url:"/media/restaurant.png",revision:"9e69afd83317ed37b78bb80742c092b4"},{url:"/media/restaurantLogo.png",revision:"60a9fc2088cdfd4bf4228cab0a8acaac"},{url:"/media/salade.png",revision:"d93814fb00070900f261b38f8a1aaa4d"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
