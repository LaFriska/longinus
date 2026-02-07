import '../../css/App.css'
import './Column.css'
import EditableText from '../editabletext/EditableText.tsx'
import { WHITE } from '../../util/Colours.ts'

/*
Colour 1 to 3 goes from lightest colour to darkest.
*/
type ColumnProps = {
    colour: string,
    title: string,
    children?: React.ReactNode
}

function Column(props: ColumnProps){
    
    const sectionHeaderColour = {
        backgroundColor: props.colour
    }
    
    function onTitleSave(_text: string){
        //TODO to be done when backend is implemented
    }
    
    return (
        <div style={{backgroundColor: WHITE}} className="column">
            <div style={sectionHeaderColour} className="sectionHeader">
                <EditableText className="sectionHeaderText" initialText={props.title} onSave={onTitleSave}/>
            </div>
            {props.children}
        </div>
    )
    
}

export default Column;