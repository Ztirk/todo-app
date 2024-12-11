import Header from './Header.vue';
import Input from './Input.vue';
import List from './List.vue';
import Footer from './Footer.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px]") }, });
    // @ts-ignore
    [Header,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({ ...{ class: ("mb-[40px]") }, }));
    const __VLS_1 = __VLS_0({ ...{ class: ("mb-[40px]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [Input,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Input, new Input({ ...{ class: ("mb-[24px]") }, }));
    const __VLS_6 = __VLS_5({ ...{ class: ("mb-[24px]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    [List,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(List, new List({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    // @ts-ignore
    [Footer,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(Footer, new Footer({ ...{ class: ("mt-[49px]") }, }));
    const __VLS_16 = __VLS_15({ ...{ class: ("mt-[49px]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-1/2'];
    __VLS_styleScopedClasses['top-1/2'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['w-[540px]'];
    __VLS_styleScopedClasses['mb-[40px]'];
    __VLS_styleScopedClasses['mb-[24px]'];
    __VLS_styleScopedClasses['mt-[49px]'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Header: Header,
            Input: Input,
            List: List,
            Footer: Footer,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
