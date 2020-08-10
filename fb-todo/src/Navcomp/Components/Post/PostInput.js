import React,{useState} from 'react'
//import "./Post.css"

function PostInput(props) {

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
            <p>What's On Your Mind ?</p>
            <input className="inp" type="text" placeholder="" size="30" onChange={onChange}></input>
            <br></br>
            <br></br>
            <button className="btn btn-primary" type="Post" onClick={Submit}>Post</button>
        </div>
    )
}

export default PostInput
