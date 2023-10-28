import { Importance } from '../../types/task';
import styles from './styles.module.css';
import { useState } from 'react';

type TProps = {
    value: Importance,
    onChange: (v: Importance) => void
}

const ToggleImportance = ({value, onChange}: TProps) => {
    const toggleStyles = value === Importance.Low ? 
        `${styles.toggle} ${styles.togglePositionLeft}` : 
        `${styles.toggle} ${styles.togglePositionRight}`;
    const toggleBtnStyles = value === Importance.Low ? 
        `${styles.toggleBtn} ${styles.positionLeft}` : 
        `${styles.toggleBtn} ${styles.positionRight}`;

    const toggleHandler = () => {
        const newValue = value === Importance.Low ? Importance.High : Importance.Low
        onChange(newValue)        
    }

    return(
        <div onClick={toggleHandler} className={toggleStyles}>
            {value === Importance.Low && <span className={styles.titleRight}>Обычно</span>} 
            {value === Importance.High && <span className={styles.titleLeft}>Важно</span>}
            <div className={toggleBtnStyles}></div>
            <input type="checkbox" />
        </div>
        
    )
}

export default ToggleImportance