import React, {useState, useRef} from 'react'


export default function Textform(props) {

    const [findText, setFindText] = useState("")
    
    const handleUpCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        if(text !== "" && text !== " "){
        props.setAlert("Changed to Uppercase", "success")
        }else{
            props.setAlert("TextBox is Empty", "warning")
        }
    }
    const handleLoCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        if(text !== "" && text !== " "){
            props.setAlert("Changed to Lowercase", "success")
            }else{
                props.setAlert("TextBox is Empty", "warning")
            }
    }
    const handleOnChangeFind = (e) => {
        setFindText(e.target.value.toLowerCase())
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleClear = (e) => {
        setText("")
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        if(text.value !== "" && text.value !== " "){
            props.setAlert("Copied to Clipboard!", "success")
            }else{
                props.setAlert("TextBox is Empty", "warning")
            }
    }
    const handlePaste = async () => {
        let pastedText = await navigator.clipboard.readText()
        setText(pastedText)
        if(pastedText !== "" && pastedText !== " "){
            props.setAlert("Pasted", "success")
            }else{
                props.setAlert("Nothing is Copied!", "warning")
            }
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const handleFind = () => {
        let word = text.toLowerCase().split(" ").filter((words)=> words!== "")
        let count = 0;
        word.map((val, index, array)=>{
            if(val === findText){
                count++;
            }
        })
        findText ? alert(`The word "${findText}" appears ${count} times in the text.`) : alert("Please enter something");
    }
    const capitalize = () => {
        let newText = text.toLowerCase().split(" ").filter((words)=> words !== "")
        newText = newText.map((word)=> {
            let text;
            if(word.startsWith(" ")){
               text = word.charAt(1).toUpperCase() + word.slice(2)
            }else{
               text = word.charAt(0).toUpperCase() + word.slice(1)
            }
            return text
        }).join(" ")
        setText(newText)
        console.log(newText);
        
    }
    const frequentWords = () =>{
        let count2 = 0;
        var word = text.toLowerCase().split(" ").filter((words)=> words !== "")
        function callMe() {
            let symbols = [...".,;:[{!#()+/?|"]
            symbols.map((sym, index2, arr)=>{
                word.map((val, index , array)=>{
                    let modWord
                    if(val.includes(sym)){
                        let modWordBeta = [...val]
                        if((modWordBeta.indexOf(sym) < (modWordBeta.length - 1)) || (modWordBeta.indexOf(sym) > 0)){
                            modWordBeta.splice(modWordBeta.indexOf(sym), 1)
                            word[index] = modWordBeta.join("")
                        }else if(modWordBeta.indexOf(sym) == (modWordBeta.length - 1)){
                            modWord = modWordBeta.slice(0, modWordBeta.indexOf(sym))
                            word[index] = modWord.join("")
                        }else if(modWordBeta.indexOf(sym) == 0){
                            modWord = modWordBeta.slice(modWordBeta.indexOf(sym)+1)
                            word[index] = modWord.join("")
                        }
                        word.forEach((val, i, arr)=>{
                            if(val == ""){
                                word.splice(i, 1)
                            }
                        })
                    }
                })
            })
        }
        callMe()
        let wordObj = ()=>{
            let frequentWordObj = {}
            for(let i of word){
                 frequentWordObj[i] = (frequentWordObj[i] || 0) +1
             }
            return frequentWordObj
        }
        const element = myRef.current
        for(let key in wordObj()){
            const tr = document.createElement("tr")
            const th = document.createElement("th")
            const td1 = document.createElement("td")
            const td2 = document.createElement("td")
            element.appendChild(tr)
            tr.appendChild(th)
            th.setAttribute("scope", "row")
            th.innerText = ++count2
            tr.appendChild(td1)
            td1.innerText = key
            tr.appendChild(td2)
            td2.innerText = wordObj()[key]
        }
    }
    const myRef = useRef();
    const [text, setText] = useState("")
    return (
    <>
        <div role="alert" aria-live="assertive" aria-atomic="true" className="toast fade position-fixed top-0 end-0 my-2 mx-2 p-2" data-bs-autohide="false" data-bs-theme={props.modeName}>
            <div className="toast-header">
                <strong className="me-auto">FIND </strong>
                <small></small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                <div className="d-flex" >
                    <input className="form-control me-2" placeholder="Search" onChange={handleOnChangeFind} value={findText}  />
                    <button className="btn btn-outline-success" onClick={handleFind}>Search</button>
                </div>
            </div>
        </div>
        <div className="modal fade" data-bs-theme={props.modeName} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Frequent Words</h1>
                        <button type="button" className="btn-close" onClick={()=>{myRef.current.innerHTML = ""}} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Word</th>
                            <th scope="col">Appearance</th>
                            </tr>
                        </thead>
                        <tbody ref={myRef}>
                        </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={()=>{myRef.current.innerHTML = ""}} data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={`container my-3 text-${props.textMode}`} data-bs-theme={props.modeName}>
            <div className='my-3 d-flex align-items-center justify-content-between'>
            <h1 className='d-inline-block'>{props.heading}</h1>
            <div>
            <button className={`btn btn-${props.btnMode} d-inline-block my-1`} onClick={handleCopy}>Copy Text</button>
            <button className={`btn btn-${props.btnMode} d-inline-block mx-2 my-1`} onClick={handlePaste}>Paste</button>
            </div>
            </div>
            <div className="mb-3 ">
                <textarea className="form-control txt-area" onChange={handleOnChange} placeholder='Enter text here...' value={text} id="myBox" rows={ props.rows }></textarea>
            </div>
            <button className={`btn btn-${props.btnMode} me-3 my-1`} disabled={text.length == 0} onClick={handleLoCase}>Convert to Lowercase</button>
            <button className={`btn btn-${props.btnMode} me-3 my-1`} disabled={text.length == 0} onClick={handleUpCase}>Convert to Uppercase</button>
            <button className={`btn btn-${props.btnMode} me-3 my-1`} disabled={text.length == 0} onClick={capitalize}>Capitalize Text</button>
            <button className={`btn btn-${props.btnMode} me-3 my-1`} disabled={text.length == 0} onClick={handleExtraSpaces}>Handle Extra Spaces</button>
            <button className={`btn btn-${props.btnMode} me-3 my-1`} disabled={text.length == 0} onClick={handleClear}>Clear Text</button>
            <button type="button" className={`btn btn-${props.btnMode} me-3 my-1`} disabled={text.length == 0} onClick={frequentWords} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Frequent Words
            </button>
            <button className={`btn btn-${props.btnMode} me-3 my-1`} disabled={text.length == 0} onClick={()=>document.getElementsByClassName("toast")[0].classList.add("show")}>Find</button>
        </div>
        
        <div className={`container my-2 text-${props.textMode}`} data-bs-theme={props.modeName}>
            <h1>Your text Summary</h1>
            <p>Text Length: {text.length} , Word Count: {text.split(' ').filter((word) => word !== '').length}</p>
            <p>{Math.floor(5.1 * text.split(' ').filter((word) => word !== '').length)/100} Minutes read</p>
            <h2 className='my-2'>Preview:</h2>
            <p>{text? text: "Nothing to Preview..."}</p>
        </div>
  </>
  )
}
