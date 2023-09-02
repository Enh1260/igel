import { api, ApiResponse } from './'
import type { TTask, ITaskCreation, ITaskUpdate } from '../types/task'

export interface IStorehouseCreate{
    name: string;
    comment: string | null;
}

export enum updateResult {
    OK,
    ERROR
}


const TaskApi = {
    create(data: ITaskCreation): any {
        try {
            return api.post('/task', data).then(res => {
                return res.data
            })
        } catch (e) {
            return console.error(e)
        }
    },
    async findAll(): Promise<TTask> {
        const result = await api.get('/task')
        return result.data
    },
    async updateIsDone(data: ITaskUpdate) : Promise<Array<updateResult>> {
        const result = await api.post('/task/isdone', data)
        return result.data
    }
}

export default TaskApi
