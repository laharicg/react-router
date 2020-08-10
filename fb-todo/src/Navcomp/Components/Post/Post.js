import React,{useState} from 'react'
import PostInput from "./PostInput"
import PostDisplay from "./PostDisplay"

function Post() {
    const [Input, setInput] = useState({result :[]})

    function postAdd(element){
        setInput({result:[...Input.result,element]})        
    }

    return (
        <div>
            <h1 className="Bootstrap heading">Timeline</h1>
            <br></br>
            <PostInput  Add={postAdd}></PostInput>
            <br></br>
            <PostDisplay  Input={Input}></PostDisplay>
        </div>
    )
}

export default Post
