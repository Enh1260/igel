import { Importance } from '../../types/task'
import ImportanceIcon from './ImportanceIcon'

import styles from './styles.module.css'

type Props = {
    value: Importance,
    onChange: (v: Importance) => void
}

function ButtonImportance({value, onChange}: Props){
    const iconColor = value === 0 ? '#D8D127' : '#DE3535'

    const changeValue = () => {
        const newValue = value === Importance.Low ? Importance.High : Importance.Low
        onChange(newValue)
    }
    return(
        <>
        <div title="Важность" onClick={() => changeValue()} className={ styles.buttonWrap }>
            <div className={ styles.buttonBase} >
                <ImportanceIcon color={ iconColor }></ImportanceIcon>
            </div>            
        </div>
        </>
    )
}

export default ButtonImportance
