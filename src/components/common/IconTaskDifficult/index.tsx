import { Difficult } from "../../../types/task"
import styles from './styles.module.css'

const IconTaskDifficult = (props) => {
    if(props.value === Difficult.Easy){
        return <div className={ styles.center +' '+ styles.easy } style={{ height: props.height, width: props.height }}></div>
    }
    if(props.value === Difficult.Medium){
        return <div className={ styles.center +' '+ styles.medium } style={{ height: props.height, width: props.height }}></div>
    }
    if(props.value === Difficult.Hard){
        return <div className={ styles.center +' '+ styles.hard } style={{ height: props.height, width: props.height }}></div>
    }

}

export default IconTaskDifficult
