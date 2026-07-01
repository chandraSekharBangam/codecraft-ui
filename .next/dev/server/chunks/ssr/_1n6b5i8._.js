module.exports = [
"[project]/data/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/twitter-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentType",
    ()=>contentType,
    "default",
    ()=>TwitterImage,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-rsc] (ecmascript)");
;
;
;
const size = {
    width: 1200,
    height: 630
};
const contentType = 'image/png';
function TwitterImage() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 76,
            background: '#ffffff',
            color: '#05070d',
            fontFamily: 'Arial, sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: '#2567e6',
                    fontSize: 32,
                    fontWeight: 700
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name
            }, void 0, false, {
                fileName: "[project]/app/twitter-image.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 20,
                    maxWidth: 880,
                    fontSize: 74,
                    lineHeight: 1.03,
                    fontWeight: 800
                },
                children: "Design systems for production frontends."
            }, void 0, false, {
                fileName: "[project]/app/twitter-image.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 30,
                    display: 'flex',
                    gap: 16,
                    color: '#05070d',
                    fontSize: 26,
                    fontWeight: 700
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Next.js"
                    }, void 0, false, {
                        fileName: "[project]/app/twitter-image.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "React"
                    }, void 0, false, {
                        fileName: "[project]/app/twitter-image.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "TypeScript"
                    }, void 0, false, {
                        fileName: "[project]/app/twitter-image.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Tailwind CSS"
                    }, void 0, false, {
                        fileName: "[project]/app/twitter-image.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/twitter-image.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/twitter-image.tsx",
        lineNumber: 14,
        columnNumber: 7
    }, this), size);
}
}),
"[project]/app/twitter-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/twitter-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/", params, "twitter-image", false);
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + '?' + "7addfa679315e76d"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
}),
"[project]/app/twitter-image--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/twitter-image--metadata.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=_1n6b5i8._.js.map