import { useState } from 'react';
import styles from './styles.module.css'
import AddTaskModal from '../AddTaskModal/AddTaskModal'
const TaskItemMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <div className={ styles.btn+' '+props.className }>
            <div className={ styles.btnIcon }>
                <div className={ styles.btnDot }></div>
                <div className={ styles.btnDot }></div>
                <div className={ styles.btnDot }></div>
            </div>
            <ul className={ styles.list }>
           
                <li className={ styles.item } onClick={() => setIsOpen(true)}>Добавить</li>
                <li className={ styles.item }>Сложность</li>
                <li className={ styles.item }>Важность</li>
                <li className={ styles.item }>Срочность</li>
            </ul>
        </div>
        { isOpen && <AddTaskModal setIsOpen={ setIsOpen } taskParentId={props.task.id} /> }
        </>
    )
}

export default TaskItemMenu
