import React, { useState } from 'react'
import CommentInp from "./CommentInp"
import CommentDisp from "./CommentDisp"


function Comment() {

    const [Input, setInput] = useState({result :[]})

    function commentAdd(element){
        setInput({result:[...Input.result,element]})        
    }

    return (
        <div>
            <CommentInp Add={commentAdd}></CommentInp>
            <CommentDisp Input={Input}></CommentDisp>
        </div>
    )
}

export default Comment
