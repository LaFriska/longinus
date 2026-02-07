import '../../css/App.css'
import './Column.css'

/*
Colour 1 to 3 goes from lightest colour to darkest.
*/
type ColumnProps = {
    colour1: string,
    colour2: string, 
    colour3: string,
    title: string
}

function Column(props: ColumnProps){
    
    const colour1Style = {
        backgroundColor: props.colour1
    }
    
    const colour3Style = {
        backgroundColor: props.colour3
    }
    
    return (
        <div style={colour1Style} className="column">
            <div style={colour3Style} className="sectionHeader">
                <p className="sectionHeaderText">{props.title}</p>
            </div>
        </div>
    )
    
}

export default Column;