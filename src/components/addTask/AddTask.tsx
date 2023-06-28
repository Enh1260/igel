import { useState } from 'react';
import ButtonDifficult from '../ButtonDifficult/ButtonDifficult';
import ButtonImportance from '../ButtonImportance/ButtonImportance';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './styles.module.css'
import { TTask, Difficult, Urgency, Importance } from '../../types/task';
import ButtonUrgency from '../ButtonUrgency/ButtonUrgency';



function AddTask(){
    const [isOpen, setIsOpen] = useState(false)
    const [newTask, setNewTask] = useState<TTask>({
        text: '',
        difficult: Difficult.Easy,
        urgency: Urgency.Low,
        importance: Importance.Low,
        deadline: null,
        isActive: true
    })
    return(
        <>
        {
            !isOpen ? <button onClick={ () => setIsOpen(true) } className={ styles.addButton }>+</button>
            : 
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
                <input onChange={(e) => setNewTask({...newTask, text: e.target.value}) } placeholder='Текст задачи' type="text" />
                <DatePicker selected={newTask.deadline} onChange={(date) => setNewTask({...newTask, deadline: date})} />
                <textarea onChange={(e) => setNewTask({...newTask, comment: e.target.value})}></textarea>
                <button onClick={() => console.log(newTask)}>Да</button>
                <button onClick={ () => setIsOpen(false) }>Отмена</button>
            </div>
        }

 
        </>
    )
}

export default AddTask
