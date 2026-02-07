import './Task.css'
import '../../css/App.css'
import * as Types from '../../util/Types.ts'

export type TaskProps = {
    title: string,
    colour: string,
    createdDateTime: Types.DateTime,
    deadline: Types.DateTime
}

function Task(props: TaskProps){
    
    // const borderStyle = {
    //     border: "1px solid " + props.co
    // }
    
    return (
        <div className="task">
            <div className="taskTitle">
                <p className="taskTitleText">{props.title}</p>
            </div>
            <div>
                <p className="taskDateTimeText">{ "Issued at " + Types.formatToString(props.createdDateTime)}</p>
            </div>
            <div>
                <p className="taskDateTimeText">{ "Due at " + Types.formatToString(props.deadline)}</p>
            </div>
            
        </div>
    )
}

export default Task 