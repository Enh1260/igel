import { useState } from 'react'
import { Urgency } from '../../types/task'
import styles from './styles.module.css'

type Props = {
    value: Urgency,
    onChange: (v: Urgency) => void
}

function ButtonUrgency({value, onChange}: Props){
    const [isOpen, setIsOpen] = useState(true)
  //  const [selectedStatus, setSelectedStatus] = useState(value)
    const selectButton = (value: number) => {
    //    setSelectedStatus(value)
        onChange(value)
        setIsOpen(false)
    }
    let baseCenter = (<div className={ styles.center +' '+ styles.easy }></div>)
    if(value === Urgency.Low){
        baseCenter = (<div className={ styles.center +' '+ styles.easy }></div>)
    }else if(value === Urgency.High){
        baseCenter = (<div className={ styles.center +' '+ styles.hard }></div>)
    }
    return(
        <>
        <div title="Срочность" className={ styles.buttonWrap }>
            <div onClick={ () => setIsOpen(!isOpen) } className={ styles.buttonBase}>
                { baseCenter }
            </div>
            {
            isOpen &&
            <ul className={ styles.buttonList }>
                <li className={ styles.buttonBase } onClick={() => selectButton(Urgency.Low)}>
                    <div className={ styles.center +' '+ styles.easy }></div>
                </li>
                <li className={ styles.buttonBase } onClick={() => selectButton(Urgency.High)}>
                    <div className={ styles.center +' '+ styles.hard }></div>
                </li>
            </ul>                
            }

        </div>
        </>
    )
}

export default ButtonUrgency
