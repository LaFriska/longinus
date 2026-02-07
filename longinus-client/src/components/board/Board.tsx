import './Board.css'
import Column from '../column/Column'
import * as Utils from '../../util/Colours.ts'
import Task from '../task/Task.tsx';

function Board(){
    
    const sampleTitle = "Finish compilers assignment 1 and submit it on canvas."
    const sampleTitle1 = "Clean room."
    const sampleTitle2 = "Go to the grocery store and buy vegetables."
    const sampleCreatedDateTime = {
        day: 5, 
        month: 2,
        year: 2026,
        hour: 1,
        minute: 30
    }
    const sampleDeadline = {
        day: 5, 
        month: 2,
        year: 2026,
        hour: 1,
        minute: 30
    }
    
    return (
        <div className="board">
            <Column colour={Utils.BLUE} title='Fetched'>
                <Task colour={Utils.BLUE} title={sampleTitle} createdDateTime={sampleCreatedDateTime} deadline={sampleDeadline}/>
                <Task colour={Utils.BLUE} title={sampleTitle1} createdDateTime={sampleCreatedDateTime} deadline={sampleDeadline}/>
                <Task colour={Utils.BLUE} title={sampleTitle2} createdDateTime={sampleCreatedDateTime} deadline={sampleDeadline}/>
            </Column>
            <Column colour={Utils.RED} title='Issued' />
            <Column colour={Utils.GREEN} title='Retired' />
            
        </div>
    )
    
}

export default Board;