import type { TTask } from "../../types/task"
import { Difficult, Importance, Urgency } from "../../types/task"
import TaskApi from "../../api/task.api"
import IconTaskDifficult from "../common/IconTaskDifficult"
import IconTaskImportance from "../common/IconTaskImportance"
import IconTaskUrgency from "../common/IconTaskUrgency"
import CheckboxDone from "../CheckboxDone/CheckboxDone"
import TaskTextfield from "../TaskTextfield/TaskTextfield"
import TaskItemMenu from "../TaskItemMenu/TaskItemMenu"
import TaskList from "../TaskList/TaskList"
import TaskProgressBar from "../TaskProgressBar/TaskProgressBar"
import styles from './styles.module.css'
import { useState } from "react"
const TaskItem = (props) => {
    console.log(props)
    const onChangeCheckboxHandle = async () => {
        props.update('isdone', !props.task.isComplete, props.task.id)
    }
    
    const iconTaskImportanceColor = props.task.importance === 0 ? '#D8D127' : '#DE3535'
    let difficultType = (<div className={styles.difficultEasy +' '+ styles.difficult}></div>) 
        if(props.task.difficult === Difficult.Medium){
            difficultType =  (<div className={styles.difficultMedium +' '+ styles.difficult}></div>)
        }
        if(props.task.difficult === Difficult.Hard){
            difficultType =  (<div className={styles.difficultHard +' '+ styles.difficult}></div>)
        }
        const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC',
        }
        const computedDate = (date: string) => {
            const dateObj = new Date(date)
            return dateObj.toLocaleString("ru", dateOptions)
        }
        const [isHiderowVisible, setIsHiderowVisible] = useState(false)

        const handleClick = () => {
            setIsHiderowVisible(!isHiderowVisible)
        }

        const maxSubTasks = props.task.tasks?.length || 0
        const currentDoneSubTasks = (): number => {
            if(props.task.tasks && props.task.tasks.length > 0){
                return props.task.tasks.filter(subtask => subtask.isComplete).length
            }else{
                return 0
            }
        } 

    return(
        <>
            <div className={styles.task}>
                <div className={styles.container} onClick={handleClick}>
                    { isHiderowVisible && <div className={styles.hiderow}>
                        <div className={styles.creationDate}>{computedDate(props.task.createdAt)}</div>
                        {props.task.deadlineAt && 
                            <div className={styles.deadline}>{ computedDate(props.task.deadlineAt)}</div>
                        } 
                    </div>}
                    <div className={styles.mainrow}>
                        <div className={styles.row}>
                            <CheckboxDone 
                                onChange={onChangeCheckboxHandle} 
                                isComplete={props.task.isComplete} 
                                urgency={props.task.urgency} />
                            <TaskTextfield importance={props.task.importance} value={props.task.text} />                            
                        </div>
                        <TaskItemMenu task={props.task} className={styles.menuBtn} />
                    </div>


                    { props.task.comment && <div className={styles.comment}>{props.task.comment}</div> }
                    
                </div>
                { props?.task?.tasks?.length > 0 &&
                    <div className={styles.barRow}>
                        <TaskProgressBar current={currentDoneSubTasks()} max={maxSubTasks} /> 
                    </div>
                }
                { props?.task?.tasks && 
                        <div className={styles.sublist}>
                            <TaskList update={props.update} list={props.task.tasks} />
                        </div>
                    }  
            </div>                          
        </>
    )
}

export default TaskItem
