import axiosInterceptors from '@/configs/axiosConfig';
export default async function updateTodoItemName(obj) {
    try {
        const res = await axiosInterceptors.put(import.meta.env.VITE_UPDATE_TODO + '/' + obj.id, {
            item_name: obj.item_name,
        });
        const data = res.data;
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
