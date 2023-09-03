import type { TTask } from "../../types/task"
import { Difficult, Importance, Urgency } from "../../types/task"
import TaskApi from "../../api/task.api"
import IconTaskDifficult from "../common/IconTaskDifficult"
import IconTaskImportance from "../common/IconTaskImportance"
import IconTaskUrgency from "../common/IconTaskUrgency"
import CheckboxDone from "../CheckboxDone/CheckboxDone"
import TaskItemMenu from "../TaskItemMenu/TaskItemMenu"
import TaskList from "../TaskList/TaskList"
import TaskProgressBar from "../TaskProgressBar/TaskProgressBar"
import styles from './styles.module.css'
const TaskItem = (props) => {
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
        const creationDate = new Date(props.task.createdAt)
        const computedCreationDate = creationDate.toLocaleString("ru", dateOptions)

        const deadlineDate = new Date(props.task.deadlineAt)
        const computedDeadlineDate = deadlineDate.toLocaleString("ru", dateOptions)

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
                <div className={styles.container}>
                    <CheckboxDone onChange={onChangeCheckboxHandle} isComplete={props.task.isComplete}></CheckboxDone>
                    <div className={styles.difficult}>
                        <IconTaskDifficult height={'0.6em'} value={Number(props.task.difficult)} />
                    </div>
                    
                    <div className={styles.importance}>
                        <IconTaskImportance height={'100%'} color={iconTaskImportanceColor} />
                    </div>
                    <IconTaskUrgency height={'100%'} value={props.task.urgency} />
                    <span className={styles.text}>{props.task.text }
                     </span>
                    {props.task.deadlineAt && <div className={styles.deadline}>{ computedDeadlineDate }</div>}
                    <div className={styles.creationDate}>{computedCreationDate}</div>
                    { props.task.comment && <span className={styles.comment}>{props.task.comment}</span> }
                    <TaskItemMenu task={props.task} className={styles.menuBtn} />
                </div>
                { props.task.tasks && <TaskProgressBar current={currentDoneSubTasks()} max={maxSubTasks} /> }
                { props.task.tasks && 
                        <div className={styles.sublist}>
                            <TaskList update={props.update} list={props.task.tasks} />
                        </div>
                    }  
            </div>                          
        </>
    )
}

export default TaskItem
