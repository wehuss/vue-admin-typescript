import { ref } from 'vue';
import axios from 'axios';

export function useTest() {
    const value = ref('这是共享内容');
    console.log(value);
    return {
        value,
    };
}
export function useRequest<T1>(method: 'post' | 'get') {
    return async function<T2>({
        url,
        data,
        type = 'form',
        thenFun,
        thenMessage = '请求成功',
        catchFun,
        catchMessage = '请求失败',
    }: {
        url: string;
        data?: T1;
        type: 'form' | 'json' | 'formData';
        thenFun: (arg: any) => any;
        thenMessage: string;
        catchFun: (arg: any) => any;
        catchMessage: string;
    }) {
        axios.request<T2>({
            method,
        });
    };
}

// export function usePost<T>({
//     url,
//     data,
//     type = 'form',
//     thenFun,
//     thenMessage = '请求成功',
//     catchFun,
//     catchMessage = '请求失败',
// }: {
//     url: string;
//     data?: T;
//     type: 'form' | 'json' | 'formData';
//     thenFun: (arg: any) => any;
//     thenMessage: string;
//     catchFun: (arg: any) => any;
//     catchMessage: string;
// }) {
//     axios.request<>()
// }
