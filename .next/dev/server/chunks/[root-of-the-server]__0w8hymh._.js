module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/data/site.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "footerGroups",
    ()=>footerGroups,
    "navItems",
    ()=>navItems,
    "siteConfig",
    ()=>siteConfig,
    "socialLinks",
    ()=>socialLinks
]);
const fallbackUrl = 'https://codecraft-ui.vercel.app';
const siteConfig = {
    name: 'CodeCraft UI',
    shortName: 'CodeCraft UI',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
    description: 'CodeCraft UI designs and ships premium React, Next.js, TypeScript, and Tailwind CSS interface systems for teams that want production-ready frontends.',
    email: 'chandrasekharbangam@gmail.com',
    github: 'https://github.com/chandraSekharBangam',
    linkedin: 'https://www.linkedin.com/in/chandra-sekhar-b-62a0a7316',
    creator: 'Chandra Sekhar Bangam',
    keywords: [
        'CodeCraft UI',
        'Next.js UI components',
        'React component library',
        'Tailwind CSS templates',
        'TypeScript frontend',
        'SaaS website design',
        'frontend development'
    ]
};
const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Components',
        href: '/hero'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Pricing',
        href: '/pricing'
    },
    {
        label: 'CTA',
        href: '/cta'
    },
    {
        label: 'FAQs',
        href: '/faqs'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
];
const footerGroups = [
    {
        title: 'Explore',
        links: [
            {
                label: 'Components',
                href: '/hero'
            },
            {
                label: 'Pricing',
                href: '/pricing'
            },
            {
                label: 'Conversion CTA',
                href: '/cta'
            },
            {
                label: 'FAQs',
                href: '/faqs'
            }
        ]
    },
    {
        title: 'Company',
        links: [
            {
                label: 'About',
                href: '/about'
            },
            {
                label: 'Contact',
                href: '/contact'
            },
            {
                label: 'Email',
                href: `mailto:${siteConfig.email}`
            },
            {
                label: 'LinkedIn',
                href: siteConfig.linkedin
            }
        ]
    },
    {
        title: 'Stack',
        links: [
            {
                label: 'Next.js',
                href: 'https://nextjs.org'
            },
            {
                label: 'React',
                href: 'https://react.dev'
            },
            {
                label: 'Tailwind CSS',
                href: 'https://tailwindcss.com'
            },
            {
                label: 'TypeScript',
                href: 'https://www.typescriptlang.org'
            }
        ]
    }
];
const socialLinks = [
    {
        label: 'GitHub',
        href: siteConfig.github
    },
    {
        label: 'LinkedIn',
        href: siteConfig.linkedin
    },
    {
        label: 'Email',
        href: `mailto:${siteConfig.email}`
    }
];
}),
"[project]/app/manifest.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>manifest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-route] (ecmascript)");
;
function manifest() {
    return {
        name: `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].name} - Premium Next.js UI systems`,
        short_name: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].shortName,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].description,
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#05070d',
        theme_color: '#05070d',
        icons: [
            {
                src: '/CodeCraftfavicon.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/apple-icon.png',
                sizes: '180x180',
                type: 'image/png'
            }
        ]
    };
}
}),
"[project]/app/manifest--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/manifest.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/manifest+json";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "manifest";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./manifest.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/app/manifest--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/manifest--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/manifest.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0w8hymh._.js.map