import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import iconCheck from '../assets/todo-app-main/images/icon-check.svg';
import iconCross from '../assets/todo-app-main/images/icon-cross.svg';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const __VLS_emit = defineEmits(['onUnFocus', 'onCheck', 'onDelete', 'onAddTodo']);
    // const textField = ref(null)
    // const func = () => {
    //   alert('helo')
    // }
    const onDragStart = (e) => {
        const offsetX = e.offsetX;
        const offsetWidth = e.target.offsetWidth;
        if (offsetX < offsetWidth - 30)
            e.stopPropagation();
    }; /* PartiallyEnd: #3632/scriptSetup.vue */
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
        // CSS variable injection 
        // CSS variable injection end 
        let __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onDragstart: (__VLS_ctx.onDragStart) }, ...{ class: ((`bg-white dark:bg-[#25273D] flex border-[#979797] border rounded-[5px]`)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-[64px] flex px-[24px] items-center") }, draggable: ("false"), });
        if (__VLS_ctx.is_done == false) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ onClick: ((e) => __VLS_ctx.$emit('onCheck', e, __VLS_ctx.idx)) }, ...{ class: ("h-[24px] aspect-square rounded-full cursor-pointer border-[#E3E4F1] border hover:border-[#C058F3]") }, });
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: () => { } }, ...{ class: ("bg-gradient-to-br from-[#55DDFF] to-[#C058F3] h-[24px] aspect-square rounded-full flex items-center justify-center cursor-pointer") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: ((e) => __VLS_ctx.$emit('onCheck', __VLS_ctx.idx)) }, src: ((__VLS_ctx.iconCheck)), });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onClick: () => { } }, ...{ onFocusout: ((e) => __VLS_ctx.$emit('onUnFocus', e, __VLS_ctx.idx)) }, ...{ onKeydown: ((e) => __VLS_ctx.$emit('onAddTodo', e)) }, placeholder: ("Create a new todo..."), ...{ class: ((`w-full dark:text-[#C8CBE7] ${__VLS_ctx.is_done ? 'line-through text-[#D1D2DA] dark:text-[#4D5067]' : ''}`)) }, value: ((__VLS_ctx.item_name)), });
        if (__VLS_ctx.id) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center place-items-center w-10 cursor-pointer") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (() => __VLS_ctx.$emit('onDelete', __VLS_ctx.id, __VLS_ctx.idx)) }, src: ((__VLS_ctx.iconCross)), });
        }
        if (__VLS_ctx.id) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center place-items-center w-10 cursor-pointer") }, });
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.FontAwesomeIcon;
            /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ((['fas', 'bars'])), }));
            const __VLS_2 = __VLS_1({ icon: ((['fas', 'bars'])), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        }
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['dark:bg-[#25273D]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['border-[#979797]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded-[5px]'];
        __VLS_styleScopedClasses['h-[64px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['px-[24px]'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['h-[24px]'];
        __VLS_styleScopedClasses['aspect-square'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['border-[#E3E4F1]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['hover:border-[#C058F3]'];
        __VLS_styleScopedClasses['bg-gradient-to-br'];
        __VLS_styleScopedClasses['from-[#55DDFF]'];
        __VLS_styleScopedClasses['to-[#C058F3]'];
        __VLS_styleScopedClasses['h-[24px]'];
        __VLS_styleScopedClasses['aspect-square'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['place-items-center'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['place-items-center'];
        __VLS_styleScopedClasses['w-10'];
        __VLS_styleScopedClasses['cursor-pointer'];
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
                FontAwesomeIcon: FontAwesomeIcon,
                iconCheck: iconCheck,
                iconCross: iconCross,
                onDragStart: onDragStart,
            };
        },
        emits: {},
        props: {
            id: String,
            item_name: String,
            is_done: Boolean,
            idx: Number,
        },
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        emits: {},
        props: {
            id: String,
            item_name: String,
            is_done: Boolean,
            idx: Number,
        },
        __typeEl: {},
    });
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
