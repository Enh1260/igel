import UrgencyHardIcon from '../../../assets/icons/UrgencyHardIcon.svg'
import UrgencyDefaultIcon from '../../../assets/icons/UrgencyDefaultIcon.svg'
import { Urgency } from '../../../types/task'

const IconTaskUrgency = (props) => {
    const urgencyIcon = props.value === Urgency.Low ? UrgencyDefaultIcon : UrgencyHardIcon
    return (<img height={props.height} src={ urgencyIcon } alt="" />)
}

export default IconTaskUrgency
