import { ref } from 'vue';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const count = ref(0);
    function greet(event) {
        alert(`Hello ${name.value}!`);
        // `event` is the native DOM event
        if (event) {
            alert(event.target.tagName);
        }
    }
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
        // CSS variable injection 
        // CSS variable injection end 
        let __VLS_resolvedLocalAndGlobalComponents;
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
        /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ label: ("Create a new todo..."), ...{ class: ("font-normal text-[500px]") }, variant: ("outlined"), modelValue: ((__VLS_ctx.item_name)), singleLine: (true), }));
        const __VLS_2 = __VLS_1({ label: ("Create a new todo..."), ...{ class: ("font-normal text-[500px]") }, variant: ("outlined"), modelValue: ((__VLS_ctx.item_name)), singleLine: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        var __VLS_6 = {};
        __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.greet) }, ...{ class: ("border border-[#E3E4F1] h-[24px] aspect-square rounded-full") }, });
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
        __VLS_styleScopedClasses['font-normal'];
        __VLS_styleScopedClasses['text-[500px]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-[#E3E4F1]'];
        __VLS_styleScopedClasses['h-[24px]'];
        __VLS_styleScopedClasses['aspect-square'];
        __VLS_styleScopedClasses['rounded-full'];
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
                greet: greet,
            };
        },
        props: {
            id: Number,
            item_name: String,
            id_done: Boolean,
            idx: Number,
        },
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {
            id: Number,
            item_name: String,
            id_done: Boolean,
            idx: Number,
        },
        __typeEl: {},
    });
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
