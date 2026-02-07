import { useEffect, useRef, useState } from 'react'

type EditableTextProp = {
    initialText: string,
    onSave: (newText: string) => void 
    className: string
    
}

function EditableText(props: EditableTextProp){
    
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(props.initialText)
    const [tmpText, setTmpText] = useState(props.initialText)
    const inputRef = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        if(editing) inputRef.current?.focus();
    }, [editing])
    
    function handleBlur(){
        setEditing(false)
        props.onSave(text)
    }
    
    function handleKeypress(e: React.KeyboardEvent){
        if(e.key == "Enter"){
            setText(tmpText)
            handleBlur()
        }else if(e.key == "Escape"){
            inputRef.current?.blur();
            setTmpText(text);
        }
    }
    
    function changeHandler(e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.value.length < 16){
            setTmpText(e.target.value)
        }
    }
    
    return (
        editing ? (
            <input
            ref={inputRef}
            value={tmpText}
            onChange={changeHandler}
            onBlur={handleBlur}
            onKeyDown={handleKeypress}
            />
        ) : (
            <span onClick={() => setEditing(true)} style={{ cursor: "pointer" }}>
                <p>{text}</p>
            </span>
        )
            
    )
    
}

export default EditableText;