import '../../css/App.css'
import './Column.css'
import EditableText from '../editabletext/EditableText.tsx'
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
    
    function onTitleSave(text: string){
        
    }
    
    return (
        <div style={{backgroundColor: WHITE}} className="column">
            <div style={sectionHeaderColour} className="sectionHeader">
                <EditableText className="sectionHeaderText" initialText={props.title} onSave={onTitleSave}/>
            </div>
        </div>
    )
    
}

export default Column;