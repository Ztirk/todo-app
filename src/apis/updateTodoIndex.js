import axiosInterceptors from '@/configs/axiosConfig';
export default async function addTodo(d) {
    try {
        const res = await axiosInterceptors.post('https://addtodo-7ftcfvpbga-uc.a.run.app', d);
        const data = res.data;
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
