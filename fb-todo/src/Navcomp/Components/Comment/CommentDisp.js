import React from 'react'

function CommentDisp(props) {
    return (
        <div>
            <ul>
                {props.Input.result.map((item,index) => {
                    return <div key={index}>{item}</div>
                })}
            </ul>
        </div>
    )
}

export default CommentDisp
