import TaskItem from "../TaskItem/TaskItem"
const TaskList = (props) => {

    const itemsList = props.list.map(task => {
        return(<TaskItem update={props.update} task={task} />)
    })
    return(
        <>
        {itemsList}
        </>
    )
}

export default TaskList
