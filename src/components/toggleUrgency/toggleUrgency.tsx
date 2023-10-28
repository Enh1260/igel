import { Urgency } from '../../types/task';
import styles from './styles.module.css';

type TProps = {
    value: Urgency,
    onChange: (v: Urgency) => void
}

const ToggleUrgency = ({value, onChange}: TProps) => {
    const toggleStyles = value === Urgency.Low ? 
        `${styles.toggle} ${styles.togglePositionLeft}` : 
        `${styles.toggle} ${styles.togglePositionRight}`;
    const toggleBtnStyles = value === Urgency.Low ? 
        `${styles.toggleBtn} ${styles.positionLeft}` : 
        `${styles.toggleBtn} ${styles.positionRight}`;

    const toggleHandler = () => {
        const newValue = value === Urgency.Low ? Urgency.High : Urgency.Low
        onChange(newValue)        
    }

    return(
        <div onClick={toggleHandler} className={toggleStyles}>
            {value === Urgency.Low && <span className={styles.titleRight}>Обычно</span>} 
            {value === Urgency.High && <span className={styles.titleLeft}>Срочно</span>}
            <div className={toggleBtnStyles}></div>
            <input type="checkbox" />
        </div>
        
    )
}

export default ToggleUrgency