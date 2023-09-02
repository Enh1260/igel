import { useState } from 'react'
import { Difficult } from '../../types/task'
import styles from './styles.module.css'


type Props = {
    value: Difficult,
    onChange: (v: Difficult) => void
}

function ButtonDifficult({value, onChange}: Props){
    const [isOpen, setIsOpen] = useState(true)
    const buttonListOptions = [
        {
            type: Difficult.Easy,
            style: `${styles.center} ${styles.easy}`
        },
        {
            type: Difficult.Medium,
            style: `${styles.center} ${styles.medium}`
        },
        {
            type: Difficult.Hard,
            style: `${styles.center} ${styles.hard}`
        }                
    ]
    const selectButton = (value: number) => {
        onChange(value)
        setIsOpen(false)
    }

    let buttonListItems = buttonListOptions.filter(btn => {
        return btn.type !== value
    })
    .map(btn => btn.type !== value && <li onClick={() => selectButton(btn.type)} className={btn.style}></li>)

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
        <div onMouseEnter={ () => setIsOpen(true) } onMouseLeave={ () => setIsOpen(false) } title="Сложность" className={ styles.buttonWrap }>
            <div  className={ styles.buttonBase}>
                { baseCenter }
            </div>
            {
            isOpen &&
            <ul className={ styles.buttonList }>
                { buttonListItems }
            </ul>                
            }

        </div>
        </>
    )
}

export default ButtonDifficult
