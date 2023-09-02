import TaskList from "../TaskList/TaskList"
import styles from './styles.module.css'

const Main = (props: any) => {
    return(
        <>
        <div className={styles.main} >
            <TaskList update={props.update} list={props.list}></TaskList>
        </div>
        </>
    )
}

export default Main
