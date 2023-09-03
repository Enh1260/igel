import styles from './styles.module.css'
import { Importance } from '../../types/task'

type TaskTextfieldProps = {
    importance: Importance,
    value: string
 }

const TaskTextfield = ({importance, value}: TaskTextfieldProps) => {
    const textfieldStyles = (Number(importance) === Number(Importance.Low)) ?
    `${styles.textfield} ${styles.low}`
    :`${styles.textfield} ${styles.high}`

    return(
        <>
            <div className={textfieldStyles}>{value}</div>
        </>
    )
}

export default TaskTextfield
