import Accepticon from '../../assets/icons/AcceptIcon.svg'
import styles from './styles.module.css'

type TProps = {
    isComplete: boolean,
    onChange: (v: boolean) => void
}

const CheckboxDone = ({isComplete, onChange}: TProps) => {
    const onClickHandler = (e: any) => {
        onChange(e.target.value)
    }
    return(
        <>
        <div className={styles.wrap}>
            <input className={styles.checkbox} type="checkbox"  />
            <div className={styles.icon} onClick={onClickHandler}>
                { isComplete && <img className={styles.img} src={Accepticon} alt="checked" /> }
            </div>
        </div>
        </>
    )
}

export default CheckboxDone
