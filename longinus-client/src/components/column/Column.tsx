import '../../css/App.css'
import './Column.css'
import { WHITE } from '../../util/Colours.ts'

/*
Colour 1 to 3 goes from lightest colour to darkest.
*/
type ColumnProps = {
    colour: string,
    title: string
}

function Column(props: ColumnProps){
    
    const sectionHeaderColour = {
        backgroundColor: props.colour
    }
    
    return (
        <div style={{backgroundColor: WHITE}} className="column">
            <div style={sectionHeaderColour} className="sectionHeader">
                <p className="sectionHeaderText">{props.title}</p>
            </div>
        </div>
    )
    
}

export default Column;