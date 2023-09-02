import { Urgency } from '../../types/task'
import UrgencyHardIcon from '../../assets/icons/UrgencyHardIcon.svg'
import UrgencyDefaultIcon from '../../assets/icons/UrgencyDefaultIcon.svg'
import styles from './styles.module.css'

type Props = {
    value: Urgency,
    onChange: (v: Urgency) => void
}

function ButtonUrgency({value, onChange}: Props){

    const urgencyIcon = value === Urgency.Low ? UrgencyDefaultIcon : UrgencyHardIcon

    const changeValue = () => {
        const newValue = value === Urgency.Low ? Urgency.High : Urgency.Low
        onChange(newValue)
    }
    return(
        <>
        <div title="Срочность" onClick={() => changeValue()} className={ styles.buttonWrap }>
            <div className={ styles.buttonBase} >
                <img src={ urgencyIcon } alt="" />
            </div>            
        </div>
        </>
    )
}

export default ButtonUrgency
