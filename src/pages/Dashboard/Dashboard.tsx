import { useEffect, useState } from "react";
import TaskApi from "../../api/task.api";
import findTask from "../../utils/findTask";
import { updateResult } from "../../api/task.api";
import AddTask from "../../components/addTask/AddTask";
import type { TTask } from "../../types/task";
import type { ICategory, ICategoryEdited } from "../../types/category";
import Main from "../../components/Main/Main";
import styles from './styles.module.css'
import "react-datepicker/dist/react-datepicker.css";
import CategoryApi from "../../api/category.api";
import CategoryList from "../../components/CategoryList";
import { isAuth } from "../../hooks/AuthContext";

function Home() {

const [taskList, setTaskList] = useState([])
const [categoryList, setCategoryList] = useState<ICategoryEdited[]>([])
const getData = async() => {
    const data = await TaskApi.findAll()
    setTaskList(data)

    const categories = await CategoryApi.findAll()
    const categoryEdited = categories.map(category => ({...category, isActive: false}));
    categoryEdited.unshift({id: 0, title: 'Общее', isActive: true})
    setCategoryList(categoryEdited)
}



const updateTask = async (column: string, value: string | boolean | number, id: number ) => {
    if(column === 'isdone'){
        const result = await TaskApi.updateIsDone({value, id})
        if(result[updateResult.OK]){
            if(!taskList) return
            const newTaskList = (taskList as TTask[]).map(task => {
                if(task.id === id) task.isComplete = value
                if(task.tasks){
                    const updatedTask = findTask(task.tasks, id)
                    if(updatedTask) updatedTask.isComplete = value
                }
                return task
            })
            setTaskList(newTaskList)
        }
    }
}
useEffect(() => {
    getData()
}, [])

    return(
        <>
            <div className={styles.wrapper}>
                <CategoryList categories={categoryList} setCategoryList={setCategoryList} />
                <AddTask />
                <Main update={updateTask} list={ taskList }></Main>
            </div>
        </>
    )
}

export default Home
