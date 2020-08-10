import React, { useState } from 'react'

function CommentInp(props) {

    const [entry,setEntry] = useState("")

    function onChange(e){
        setEntry(e.target.value)
    }

    function Submit(){
        props.Add(entry)
        setEntry("")
    }

    return (
        <div>
            <input  classname="input" type="text" placeholder="Add comment..." onChange={onChange}></input> &nbsp;
            <button className="btn btn-primary" type="button" onClick={Submit}>Comment</button>            
        </div>
    )
}

export default CommentInp
