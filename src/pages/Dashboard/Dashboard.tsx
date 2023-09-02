import { useEffect, useState } from "react";
import TaskApi from "../../api/task.api";
import findTask from "../../utils/findTask";
import { updateResult } from "../../api/task.api";
import AddTask from "../../components/addTask/AddTask";
import type { TTask } from "../../types/task";
import Main from "../../components/Main/Main";
import styles from './styles.module.css'
import "react-datepicker/dist/react-datepicker.css";

function Home() {

const [taskList, setTaskList] = useState([])
const getData = async() => {
    const data = await TaskApi.findAll()
   // console.log(data)

        setTaskList(data)

    
 //   console.log(taskList)

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
                <AddTask />
                <Main update={updateTask} list={ taskList }></Main>
            </div>
            

        </>
    )
}

export default Home
