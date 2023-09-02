import { useState } from 'react';
import ButtonDifficult from '../ButtonDifficult/ButtonDifficult';
import ButtonImportance from '../ButtonImportance/ButtonImportance';
import ButtonUrgency from '../ButtonUrgency/ButtonUrgency';
import TaskTextInput from '../TaskTextInput/TaskTextInput';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './styles.module.css'
import { ITaskCreation, Difficult, Urgency, Importance } from '../../types/task';
import TaskApi from '../../api/task.api';


function AddTask(){
    const [isOpen, setIsOpen] = useState(false)
    const [isTextValidatationError, setTextValidationError] = useState(false)
    const [newTask, setNewTask] = useState<ITaskCreation>({
        text: '',
        difficult: Difficult.Easy,
        urgency: Urgency.Low,
        importance: Importance.Low,
        deadline: null,
        comment: null
    })
    const createTask = (): void => {
        if(newTask.text === '') {
            setTextValidationError(true)
            return
        }
        TaskApi.create(newTask)
        setIsOpen(false)
    }
    return(
        <>
        {
            !isOpen ? <button onClick={ () => setIsOpen(true) } className={ styles.addButton }>+</button>
            : 
            <div className={ styles.wrapper }>
            <div className={ styles.addOpen }>
                <ButtonDifficult
                 value={ newTask.difficult } 
                 onChange={(v: Difficult) => setNewTask({...newTask, difficult: v}) } />
                <ButtonImportance
                 value={ newTask.importance }
                 onChange={(v: Importance) => setNewTask({...newTask, importance: v}) } />                 
                <ButtonUrgency
                    value={ newTask.urgency } 
                    onChange={(v: Urgency) => setNewTask({...newTask, urgency: v}) } /> 
                <TaskTextInput 
                    onChange={(v) => setNewTask({...newTask, text: v}) }
                    error={isTextValidatationError} />
                <DatePicker selected={newTask.deadline} onChange={(date) => setNewTask({...newTask, deadline: date})} />
                <textarea onChange={(e) => setNewTask({...newTask, comment: e.target.value})}></textarea>
                <button className={styles.accept + ' '+ styles.actionBtn} onClick={() => createTask()}></button>
                <button className={styles.cancel + ' '+ styles.actionBtn} onClick={() => setIsOpen(false)}></button>
            </div>
            </div>
        }
        </>
    )
}

export default AddTask
