import './Board.css'
import Column from '../column/Column'
import * as Utils from '../../util/Colours.ts'
import { BLUE, GREEN, RED } from '../../util/Colours'

function Board(){
    
    return (
        <div className="board">
            <Column colour={Utils.BLUE} title='Fetched' />
            <Column colour={Utils.RED} title='Issued' />
            <Column colour={Utils.GREEN} title='Retired' />
        </div>
    )
    
}

export default Board;