import './Editor.css'

function Editor(){
    return(
        <>
            <div className="body">
                <div class="code-editor">
                    <div class="code">
                        <div class="html-code">
                            <h1>Brain Fuck</h1>
                            <textarea></textarea>
                        </div>
                    </div>
                    <iframe id="result"></iframe>
                </div>
            </div>
        </>
    );
}

export default Editor;