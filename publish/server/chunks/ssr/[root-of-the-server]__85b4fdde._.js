module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/contexts/MockAuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockAuthProvider",
    ()=>MockAuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function MockAuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for existing session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedUser = localStorage.getItem('mockUser');
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser);
                setUser(userData);
                setSession({
                    user: userData
                });
                console.log('MockAuth: Restored user session', userData);
            } catch (error) {
                console.error('MockAuth: Error parsing saved user', error);
                localStorage.removeItem('mockUser');
            }
        }
    }, []);
    const signUp = async (email, password, userData)=>{
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        // Check if user already exists
        const existingUser = localStorage.getItem('mockUser');
        if (existingUser) {
            const parsedUser = JSON.parse(existingUser);
            if (parsedUser.email === email) {
                setLoading(false);
                return {
                    error: {
                        message: 'User already exists'
                    }
                };
            }
        }
        // Create new user
        const newUser = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            user_metadata: {
                name: userData?.name || 'User',
                company: userData?.company || ''
            },
            created_at: new Date().toISOString()
        };
        // Save to localStorage
        localStorage.setItem('mockUser', JSON.stringify(newUser));
        setUser(newUser);
        setSession({
            user: newUser
        });
        setLoading(false);
        return {
            error: null
        };
    };
    const signIn = async (email, password)=>{
        console.log('MockAuth: Sign in attempt', {
            email,
            password: '***'
        });
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        // Check for demo credentials
        if (email === 'demo@nvibe.ai' && password === 'demo123') {
            const demoUser = {
                id: 'demo-user',
                email: 'demo@nvibe.ai',
                user_metadata: {
                    name: 'Demo User',
                    company: 'NVibe AI'
                },
                created_at: new Date().toISOString()
            };
            localStorage.setItem('mockUser', JSON.stringify(demoUser));
            setUser(demoUser);
            setSession({
                user: demoUser
            });
            setLoading(false);
            console.log('MockAuth: Demo user signed in', demoUser);
            return {
                error: null
            };
        }
        // Check for existing user
        const existingUser = localStorage.getItem('mockUser');
        if (existingUser) {
            const parsedUser = JSON.parse(existingUser);
            if (parsedUser.email === email) {
                setUser(parsedUser);
                setSession({
                    user: parsedUser
                });
                setLoading(false);
                console.log('MockAuth: Existing user signed in', parsedUser);
                return {
                    error: null
                };
            }
        }
        setLoading(false);
        console.log('MockAuth: Invalid credentials');
        return {
            error: {
                message: 'Invalid credentials'
            }
        };
    };
    const signOut = async ()=>{
        localStorage.removeItem('mockUser');
        setUser(null);
        setSession(null);
    };
    const value = {
        user,
        session,
        loading,
        signUp,
        signIn,
        signOut
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/MockAuthContext.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__85b4fdde._.js.map