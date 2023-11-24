import { useState } from 'react'
import './Editor.css'
import BrainFck from './BrainFck'

function Editor(){
    const [txt, setTxt] = useState("");
    const text = "Test Result";

    const handleChange = (event) =>{
        setTxt(event.target.value);
    }

    return(
        <>
            <div className="body">
                <div className="code-editor">
                    <div className="code">
                        <div className="html-code">
                            <h1>Brain Fuck</h1>
                            <textarea onChange={handleChange} value={txt}></textarea>
                        </div>
                    </div>
                    <pre id="result"><BrainFck text={txt} /></pre>
                </div>
            </div>
        </>
    );
}

export default Editor;