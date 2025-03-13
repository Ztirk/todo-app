export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const __VLS_emit = defineEmits(['onClickAll', 'onClickActive', 'onClickCompleted', 'onClickClear']); /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_fnComponent = (await import('vue')).defineComponent({
        emits: {},
    });
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white h-[50px] border border-[#979797] rounded-b-[5px] flex justify-between items-center px-[24px] dark:bg-[#25273D]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-[#9495A5] text-[14px] italic") }, });
        (__VLS_ctx.count);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-[#9495A5] flex gap-[18px] max-[376px]:hidden") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.$emit('onClickAll');
                } }, ...{ class: ((`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${__VLS_ctx.highlight == 'all' ? 'text-[#3A7CFD]' : ''}`)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.$emit('onClickActive');
                } }, ...{ class: ((`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${__VLS_ctx.highlight == 'active' ? 'text-[#3A7CFD]' : ''}`)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.$emit('onClickCompleted');
                } }, ...{ class: ((`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${__VLS_ctx.highlight == 'completed' ? 'text-[#3A7CFD]' : ''}`)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.$emit('onClickClear');
                } }, ...{ class: ("text-[#9495A5] hover:text-[#494C6B] font-bold cursor-pointer text-[14px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white h-[50px] border border-[#979797] rounded-b-[5px] flex justify-between items-center px-[24px] mt-[16px] min-[376px]:hidden") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-[#9495A5] flex gap-[18px] justify-center w-full") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.$emit('onClickAll');
                } }, ...{ class: ((`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${__VLS_ctx.highlight == 'all' ? 'text-[#3A7CFD]' : ''}`)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.$emit('onClickActive');
                } }, ...{ class: ((`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${__VLS_ctx.highlight == 'active' ? 'text-[#3A7CFD]' : ''}`)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.$emit('onClickCompleted');
                } }, ...{ class: ((`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${__VLS_ctx.highlight == 'completed' ? 'text-[#3A7CFD]' : ''}`)) }, });
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['h-[50px]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-[#979797]'];
        __VLS_styleScopedClasses['rounded-b-[5px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['px-[24px]'];
        __VLS_styleScopedClasses['dark:bg-[#25273D]'];
        __VLS_styleScopedClasses['text-[#9495A5]'];
        __VLS_styleScopedClasses['text-[14px]'];
        __VLS_styleScopedClasses['italic'];
        __VLS_styleScopedClasses['text-[#9495A5]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-[18px]'];
        __VLS_styleScopedClasses['max-[376px]:hidden'];
        __VLS_styleScopedClasses['text-[#9495A5]'];
        __VLS_styleScopedClasses['hover:text-[#494C6B]'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['text-[14px]'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['h-[50px]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-[#979797]'];
        __VLS_styleScopedClasses['rounded-b-[5px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['px-[24px]'];
        __VLS_styleScopedClasses['mt-[16px]'];
        __VLS_styleScopedClasses['min-[376px]:hidden'];
        __VLS_styleScopedClasses['text-[#9495A5]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-[18px]'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['w-full'];
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
            return {};
        },
        emits: {},
        props: {
            count: Number,
            highlight: String,
        },
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        emits: {},
        props: {
            count: Number,
            highlight: String,
        },
    });
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
