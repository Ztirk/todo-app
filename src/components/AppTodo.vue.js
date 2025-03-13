import AppHeader from './AppHeader.vue';
import AppInput from './AppInput.vue';
import AppFooter from './AppFooter.vue';
import AppPagination from './AppPagination.vue';
import getTodo from '@/apis/getTodo';
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import updateTodoItemName from '@/apis/updateTodoItemName';
import updateTodoIsDone from '@/apis/updateTodoIsdone';
import updateTodoIndex from '@/apis/updateTodoIndex';
import deleteTodo from '@/apis/deleteTodo';
import addTodo from '@/apis/addTodo';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const loading = ref(false);
const todoList = ref([]);
const error = ref('');
const all = ref(true);
const active = ref(false);
const completed = ref(false);
async function fetchTodo() {
    error.value = '';
    todoList.value = [];
    loading.value = true;
    try {
        todoList.value = await getTodo();
        console.log(todoList.value);
    }
    catch (err) {
        console.log(err);
        error.value = err.toString();
    }
    finally {
        loading.value = false;
    }
}
fetchTodo();
const el = ref();
const onDragStart = (e) => {
    // console.log('start', e)
};
const onDragEnd = (e) => {
    // console.log('onEnd', e)
};
const onDragUpdate = () => {
    sortIdxTodoList();
    updateTodoIndex(todoList.value);
};
const sortIdxTodoList = () => {
    for (const i in todoList.value) {
        todoList.value[Number(i)].idx = Number(i);
    }
};
const onCheck = (idx) => {
    const id = todoList.value[idx].id;
    const is_done = !todoList.value[idx].is_done;
    todoList.value[idx].is_done = is_done;
    updateTodoIsDone({
        id: id,
        is_done: is_done,
    });
};
const onUnFocus = (e, idx) => {
    const item_name = e.target.value;
    const obj = {
        item_name: item_name,
        id: todoList.value[idx].id,
    };
    updateTodoItemName(obj);
};
const onDelete = async (id, idx) => {
    todoList.value.splice(idx, 1);
    deleteTodo(id);
    onDragUpdate();
};
const onAddTodo = async (e) => {
    if (e.key == 'Enter') {
        const item_name = e.target.value;
        const currentIdx = todoList.value.length;
        const obj = {
            id: '',
            idx: currentIdx,
            is_done: false,
            item_name: item_name,
        };
        e.target.value = '';
        todoList.value.push(obj);
        const id = await addTodo(obj);
        todoList.value[currentIdx].id = id;
    }
};
const onClickAll = () => {
    all.value = true;
    active.value = false;
    completed.value = false;
};
const onClickActive = () => {
    all.value = false;
    active.value = !active.value;
    completed.value = false;
};
const onClickCompleted = () => {
    all.value = false;
    active.value = false;
    completed.value = !completed.value;
};
const onClickClear = () => {
    const todos = [...todoList.value];
    todoList.value = [];
    for (const obj of todos) {
        deleteTodo(obj.id);
    }
};
const filterTodo = () => {
    if (all.value) {
        return todoList.value;
    }
    else if (active.value) {
        return todoList.value.filter((obj) => obj.is_done);
    }
    else {
        return todoList.value.filter((obj) => !obj.is_done);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] max-[376px]:w-[327px] drop-shadow-md") }, });
    // @ts-ignore
    [AppHeader,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(AppHeader, new AppHeader({ ...{ class: ("mb-[40px]") }, }));
    const __VLS_1 = __VLS_0({ ...{ class: ("mb-[40px]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [AppInput,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(AppInput, new AppInput({ ...{ 'onOnAddTodo': {} }, ...{ class: ("mb-[24px]") }, }));
    const __VLS_6 = __VLS_5({ ...{ 'onOnAddTodo': {} }, ...{ class: ("mb-[24px]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_10;
    const __VLS_11 = {
        onOnAddTodo: (__VLS_ctx.onAddTodo)
    };
    let __VLS_7;
    let __VLS_8;
    var __VLS_9;
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VueDraggable;
    /** @type { [typeof __VLS_components.VueDraggable, typeof __VLS_components.VueDraggable, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onStart': {} }, ...{ 'onUpdate': {} }, ...{ 'onEnd': {} }, ref: ("el"), modelValue: ((__VLS_ctx.todoList)), disabled: ((__VLS_ctx.active || __VLS_ctx.completed ? true : false)), animation: ((150)), ghostClass: ("ghost"), ...{ class: ("flex flex-col gap-0 max-h-[394.68px] overflow-y-auto") }, }));
    const __VLS_14 = __VLS_13({ ...{ 'onStart': {} }, ...{ 'onUpdate': {} }, ...{ 'onEnd': {} }, ref: ("el"), modelValue: ((__VLS_ctx.todoList)), disabled: ((__VLS_ctx.active || __VLS_ctx.completed ? true : false)), animation: ((150)), ghostClass: ("ghost"), ...{ class: ("flex flex-col gap-0 max-h-[394.68px] overflow-y-auto") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    // @ts-ignore navigation for `const el = ref()`
    __VLS_ctx.el;
    var __VLS_18 = {};
    let __VLS_19;
    const __VLS_20 = {
        onStart: (__VLS_ctx.onDragStart)
    };
    const __VLS_21 = {
        onUpdate: (...[$event]) => {
            __VLS_ctx.onDragUpdate();
        }
    };
    const __VLS_22 = {
        onEnd: (__VLS_ctx.onDragEnd)
    };
    let __VLS_15;
    let __VLS_16;
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filterTodo()))) {
        // @ts-ignore
        [AppInput,];
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(AppInput, new AppInput({ ...{ 'onOnUnFocus': {} }, ...{ 'onOnCheck': {} }, ...{ 'onOnDelete': {} }, key: ((item.id)), id: ((item.id)), item_name: ((item.item_name)), is_done: ((item.is_done)), idx: ((item.idx)), }));
        const __VLS_24 = __VLS_23({ ...{ 'onOnUnFocus': {} }, ...{ 'onOnCheck': {} }, ...{ 'onOnDelete': {} }, key: ((item.id)), id: ((item.id)), item_name: ((item.item_name)), is_done: ((item.is_done)), idx: ((item.idx)), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        let __VLS_28;
        const __VLS_29 = {
            onOnUnFocus: (__VLS_ctx.onUnFocus)
        };
        const __VLS_30 = {
            onOnCheck: (__VLS_ctx.onCheck)
        };
        const __VLS_31 = {
            onOnDelete: (__VLS_ctx.onDelete)
        };
        let __VLS_25;
        let __VLS_26;
        var __VLS_27;
    }
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.PreviewList;
    /** @type { [typeof __VLS_components.PreviewList, typeof __VLS_components.previewList, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ list: ((__VLS_ctx.todoList)), }));
    const __VLS_34 = __VLS_33({ list: ((__VLS_ctx.todoList)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    // @ts-ignore
    [AppPagination,];
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(AppPagination, new AppPagination({ ...{ 'onOnClickAll': {} }, ...{ 'onOnClickActive': {} }, ...{ 'onOnClickCompleted': {} }, ...{ 'onOnClickClear': {} }, count: ((__VLS_ctx.todoList.filter((d) => !d.is_done).length)), highlight: ((__VLS_ctx.all ? 'all' : __VLS_ctx.active ? 'active' : __VLS_ctx.completed ? 'completed' : '')), }));
    const __VLS_39 = __VLS_38({ ...{ 'onOnClickAll': {} }, ...{ 'onOnClickActive': {} }, ...{ 'onOnClickCompleted': {} }, ...{ 'onOnClickClear': {} }, count: ((__VLS_ctx.todoList.filter((d) => !d.is_done).length)), highlight: ((__VLS_ctx.all ? 'all' : __VLS_ctx.active ? 'active' : __VLS_ctx.completed ? 'completed' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    let __VLS_43;
    const __VLS_44 = {
        onOnClickAll: (__VLS_ctx.onClickAll)
    };
    const __VLS_45 = {
        onOnClickActive: (__VLS_ctx.onClickActive)
    };
    const __VLS_46 = {
        onOnClickCompleted: (__VLS_ctx.onClickCompleted)
    };
    const __VLS_47 = {
        onOnClickClear: (__VLS_ctx.onClickClear)
    };
    let __VLS_40;
    let __VLS_41;
    var __VLS_42;
    // @ts-ignore
    [AppFooter,];
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(AppFooter, new AppFooter({ ...{ class: ("mt-[49px]") }, }));
    const __VLS_49 = __VLS_48({ ...{ class: ("mt-[49px]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-1/2'];
    __VLS_styleScopedClasses['top-1/2'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['w-[540px]'];
    __VLS_styleScopedClasses['max-[376px]:w-[327px]'];
    __VLS_styleScopedClasses['drop-shadow-md'];
    __VLS_styleScopedClasses['mb-[40px]'];
    __VLS_styleScopedClasses['mb-[24px]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-0'];
    __VLS_styleScopedClasses['max-h-[394.68px]'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['mt-[49px]'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "el": __VLS_18,
    };
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
            AppHeader: AppHeader,
            AppInput: AppInput,
            AppFooter: AppFooter,
            AppPagination: AppPagination,
            VueDraggable: VueDraggable,
            todoList: todoList,
            all: all,
            active: active,
            completed: completed,
            el: el,
            onDragStart: onDragStart,
            onDragEnd: onDragEnd,
            onDragUpdate: onDragUpdate,
            onCheck: onCheck,
            onUnFocus: onUnFocus,
            onDelete: onDelete,
            onAddTodo: onAddTodo,
            onClickAll: onClickAll,
            onClickActive: onClickActive,
            onClickCompleted: onClickCompleted,
            onClickClear: onClickClear,
            filterTodo: filterTodo,
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
