import styles from './styles.module.css'
type Props = {
    onChange: (v: string) => void
    error: boolean
}

const TaskTextInput = ({ onChange, error }: Props ) => {

    const onChangeHandler = (value: string) => {
        onChange(value)
        console.log(value)
    }
    return (
        <>
        <div className={ styles.wrapper }>
            <input onChange={(e) => onChangeHandler(e.target.value) } placeholder='Текст задачи' type="text" />
            {error && <div className={ styles.error }>Введите текст задачи</div>}
        </div>
            
        </>
    )
}

export default TaskTextInput
