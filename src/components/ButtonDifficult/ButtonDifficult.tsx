import { useState } from 'react'
import { Difficult } from '../../types/task'
import styles from './styles.module.css'

type Props = {
    value: Difficult,
    onChange: (v: Difficult) => void
}

function ButtonDifficult({value, onChange}: Props){
    const [isOpen, setIsOpen] = useState(true)
  //  const [selectedStatus, setSelectedStatus] = useState(value)
    const selectButton = (value: number) => {
    //    setSelectedStatus(value)
        onChange(value)
        setIsOpen(false)
    }
    let baseCenter = (<div className={ styles.center +' '+ styles.easy }></div>)
    if(value === Difficult.Easy){
        baseCenter = (<div className={ styles.center +' '+ styles.easy }></div>)
    }else if(value === Difficult.Medium){
        baseCenter = (<div className={ styles.center +' '+ styles.medium }></div>)
    }else if(value === Difficult.Hard){
        baseCenter = (<div className={ styles.center +' '+ styles.hard }></div>)
    }
    return(
        <>
        <div title="Сложность" className={ styles.buttonWrap }>
            <div onClick={ () => setIsOpen(!isOpen) } className={ styles.buttonBase}>
                { baseCenter }
            </div>
            {
            isOpen &&
            <ul className={ styles.buttonList }>
                <li className={ styles.buttonBase } onClick={() => selectButton(Difficult.Easy)}>
                    <div className={ styles.center +' '+ styles.easy }></div>
                </li>
                <li className={ styles.buttonBase } onClick={() => selectButton(Difficult.Medium)}>
                    <div className={ styles.center +' '+ styles.medium }></div>
                </li>
                <li className={ styles.buttonBase } onClick={() => selectButton(Difficult.Hard)}>
                    <div className={ styles.center +' '+ styles.hard }></div>
                </li>
            </ul>                
            }

        </div>
        </>
    )
}

export default ButtonDifficult
