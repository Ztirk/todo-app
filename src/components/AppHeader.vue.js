import sun from '../assets/todo-app-main/images/icon-sun.svg';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const onClickTheme = () => {
    if (localStorage.theme == 'light') {
        localStorage.theme = 'dark';
        document.documentElement.classList.toggle('dark', true);
    }
    else {
        localStorage.theme = 'light';
        document.documentElement.classList.toggle('dark', false);
    }
}; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex place-items-center justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-[40px] font-bold tracking-[15px] text-[#FFFFFF]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (__VLS_ctx.onClickTheme) }, src: ((__VLS_ctx.sun)), });
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['place-items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-[40px]'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['tracking-[15px]'];
    __VLS_styleScopedClasses['text-[#FFFFFF]'];
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
            sun: sun,
            onClickTheme: onClickTheme,
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
