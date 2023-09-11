import { api, ApiResponse } from './'
import type { ICategory, ICategoryCreate, ICategoryUpdate, ICategoryDelete } from '../types/category';

export interface IStorehouseCreate{
    name: string;
    comment: string | null;
}

export enum updateResult {
    OK,
    ERROR
}


const CategoryApi = {
    create(data: ICategoryCreate): any {
        try {
            return api.post('/category', data).then(res => {
                return res.data
            })
        } catch (e) {
            return console.error(e)
        }
    },
    async findAll(): Promise<ICategory[]> {
        const result = await api.get('/category')
        return result.data
    },
    async update(data: ICategoryUpdate) : Promise<Array<updateResult>> {
        const result = await api.patch('/category', data)
        return result.data
    },
    async delete(data: ICategoryDelete){
        const result = await api.delete('/category', data)
        return result.data
    }
}

export default CategoryApi
