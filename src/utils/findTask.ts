import { TTask } from "../types/task"
const findTask = (taskList: TTask[] , id: number) => {
    if(!Array.isArray(taskList)) return new Error('FindTask должен принимать массив из задач')
    if(taskList.length === 0) return null

    let result = null
    taskList.forEach(task => {
        if(task.id === id) result = task
        if(!result && task.tasks){
            let subResult = findTask(task.tasks, id)
            if(subResult) result = subResult
        }
    })
    return result
}

export default findTask
