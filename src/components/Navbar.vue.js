import { RouterLink } from 'vue-router';
// 调整导航项顺序与页面区块对应
const navItems = [
    { name: '服务器特色', path: '#features' }, // 对应FeaturesSection
    { name: '主页', path: '#hero' }, // 新增主页导航
    { name: '加入我们', path: '#join' } // 对应JoinSection
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "navbar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-content" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/",
    ...{ class: "logo" },
}));
const __VLS_2 = __VLS_1({
    to: "/",
    ...{ class: "logo" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
    ...{ class: "fas fa-cloud" },
});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-links" },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navItems))) {
    const __VLS_4 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        key: (item.path),
        to: (item.path),
        ...{ class: "nav-link" },
    }));
    const __VLS_6 = __VLS_5({
        key: (item.path),
        to: (item.path),
        ...{ class: "nav-link" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_7.slots.default;
    (item.name);
    var __VLS_7;
}
/** @type {__VLS_StyleScopedClasses['navbar']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-content']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-cloud']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-links']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
            navItems: navItems,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
