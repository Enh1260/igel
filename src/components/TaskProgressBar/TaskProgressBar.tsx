import styles from './styles.module.css'
type TTaskProgressBarProps = {
    max: number,
    current: number
}
const TaskProgressBar = ({current, max}: TTaskProgressBarProps) => {
    const progressBarWidth = current / max * 100
    console.log(current, max, progressBarWidth )
    return(
        <>
            <div className={styles.container}>
                <div style={{width: progressBarWidth+'%'}} className={styles.bar}></div>
            </div>
        </>
    )
}

export default TaskProgressBar
