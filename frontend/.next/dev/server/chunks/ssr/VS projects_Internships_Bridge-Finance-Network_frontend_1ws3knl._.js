module.exports = [
"[project]/VS projects/Internships/Bridge-Finance-Network/frontend/src/components/resend/resend.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/VS projects/Internships/Bridge-Finance-Network/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/VS projects/Internships/Bridge-Finance-Network/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ContactFormResend() {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        const res = await fetch('/api/send-resend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                message
            })
        });
        setStatus(res.ok ? 'success' : 'error');
    }
    if (status === 'success') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Thanks! Your message was sent."
        }, void 0, false, {
            fileName: "[project]/VS projects/Internships/Bridge-Finance-Network/frontend/src/components/resend/resend.tsx",
            lineNumber: 24,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "resend-email",
                    children: "Email Address"
                }, void 0, false, {
                    fileName: "[project]/VS projects/Internships/Bridge-Finance-Network/frontend/src/components/resend/resend.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "resend-email",
                    type: "email",
                    name: "email",
                    required: true,
                    value: email,
                    onChange: (e)=>setEmail(e.target.value),
                    className: "border border-gray-300 p-2 rounded"
                }, void 0, false, {
                    fileName: "[project]/VS projects/Internships/Bridge-Finance-Network/frontend/src/components/resend/resend.tsx",
                    lineNumber: 31,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    id: "resend-message",
                    name: "message",
                    required: true,
                    value: message,
                    onChange: (e)=>setMessage(e.target.value),
                    className: "border border-gray-300 p-2 rounded"
                }, void 0, false, {
                    fileName: "[project]/VS projects/Internships/Bridge-Finance-Network/frontend/src/components/resend/resend.tsx",
                    lineNumber: 40,
                    columnNumber: 7
                }, this),
                status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm",
                    children: "Failed to send. Please try again."
                }, void 0, false, {
                    fileName: "[project]/VS projects/Internships/Bridge-Finance-Network/frontend/src/components/resend/resend.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$VS__projects$2f$Internships$2f$Bridge$2d$Finance$2d$Network$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: status === 'submitting',
                    className: "bg-blue-500 text-white p-2 rounded",
                    children: status === 'submitting' ? 'Sending...' : 'Submit'
                }, void 0, false, {
                    fileName: "[project]/VS projects/Internships/Bridge-Finance-Network/frontend/src/components/resend/resend.tsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/VS projects/Internships/Bridge-Finance-Network/frontend/src/components/resend/resend.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = ContactFormResend;
}),
"[project]/VS projects/Internships/Bridge-Finance-Network/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/VS projects/Internships/Bridge-Finance-Network/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=VS%20projects_Internships_Bridge-Finance-Network_frontend_1ws3knl._.js.map