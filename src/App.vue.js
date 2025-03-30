import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import JoinSection from './components/JoinSection.vue';
import Navbar from '@/components/Navbar.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof Navbar, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: "container" },
});
/** @type {[typeof HeroSection, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(HeroSection, new HeroSection({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof FeaturesSection, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(FeaturesSection, new FeaturesSection({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {[typeof JoinSection, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(JoinSection, new JoinSection({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            HeroSection: HeroSection,
            FeaturesSection: FeaturesSection,
            JoinSection: JoinSection,
            Navbar: Navbar,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
