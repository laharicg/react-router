import React from 'react'
import Comment from "../Comment/Comment"


import Like from "../Like"

function PostDisplay(props) {
    return (
        <div className="border border-primary">
            {props.Input.result.map((item,i) => {
                    return (
                        <div key={i}>
                        <div >{item}</div>
                        <Like></Like>
                        <Comment></Comment><hr />
                        </div>)
                })}
            
        </div>
    )
}

export default PostDisplay
