import axiosInterceptors from '@/configs/axiosConfig';
export default async function updateTodoIsDone(obj) {
    try {
        const res = await axiosInterceptors.put(import.meta.env.VITE_UPDATE_TODO + '/' + obj.id, {
            is_done: obj.is_done,
        });
        const data = res.data;
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
