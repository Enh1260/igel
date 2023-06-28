import { useState } from 'react'
import { Importance } from '../../types/task'
import styles from './styles.module.css'

type Props = {
    value: Importance,
    onChange: (v: Importance) => void
}

function ButtonImportance({value, onChange}: Props){
    const [isOpen, setIsOpen] = useState(true)
  //  const [selectedStatus, setSelectedStatus] = useState(value)
    const selectButton = (value: number) => {
    //    setSelectedStatus(value)
        onChange(value)
        setIsOpen(false)
    }
    let baseCenter = (<div className={ styles.center +' '+ styles.easy }></div>)
    if(value === Importance.Low){
        baseCenter = (<div className={ styles.center +' '+ styles.easy }></div>)
    }else if(value === Importance.High){
        baseCenter = (<div className={ styles.center +' '+ styles.hard }></div>)
    }
    return(
        <>
        <div title="Важность" className={ styles.buttonWrap }>
            <div onClick={ () => setIsOpen(!isOpen) } className={ styles.buttonBase}>
                { baseCenter }
            </div>
            {
            isOpen &&
            <ul className={ styles.buttonList }>
                <li className={ styles.buttonBase } onClick={() => selectButton(Importance.Low)}>
                    <div className={ styles.center +' '+ styles.easy }></div>
                </li>
                <li className={ styles.buttonBase } onClick={() => selectButton(Importance.High)}>
                    <div className={ styles.center +' '+ styles.hard }></div>
                </li>
            </ul>                
            }

        </div>
        </>
    )
}

export default ButtonImportance
