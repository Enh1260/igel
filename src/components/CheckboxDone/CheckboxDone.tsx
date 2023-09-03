import Accepticon from '../../assets/icons/AcceptIcon.svg'
import { Urgency } from '../../types/task'
import styles from './styles.module.css'

type TProps = {
    isComplete: boolean,
    urgency: Urgency
    onChange: (v: boolean) => void
}

const CheckboxDone = ({isComplete, urgency, onChange}: TProps) => {

    const checkboxStyles = (Number(urgency) === Number(Urgency.Low)) ? 
        `${styles.icon} ${styles.low}`
        : `${styles.icon} ${styles.high}`

    const onClickHandler = (e: any) => {
        onChange(e.target.value)
    }
    return(
        <>
        <div className={styles.wrap}>
            <input className={styles.checkbox} type="checkbox"  />
            <div className={checkboxStyles} onClick={onClickHandler}>
                { isComplete && <img className={styles.img} src={Accepticon} alt="checked" /> }
            </div>
        </div>
        </>
    )
}

export default CheckboxDone
