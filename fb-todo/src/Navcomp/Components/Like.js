import React, { useState } from 'react'
import "./Like.css"

function Like() {
    const [Like, setLike] = useState(0)
    const  [Heart,setHeart] = useState(0)
    const  [Haha,setHaha] = useState(0)
    const  [Angry,setAngry] = useState(0)
    const  [Wow,setWow] = useState(0)
    const  [Cry,setCry] = useState(0)

    function likeHandle(){setLike(Like+1);}
    function HeartHandle(){setHeart(Heart+1);}
    function HahaHandle(){setHaha(Haha+1);}
    function AngryHandle(){setAngry(Angry+1);}
    function WowHandle(){setWow(Wow+1);}
    function CryHandle(){setCry(Cry+1);}


    return (
        <div className="reactionbox">
            <div className="cnt">{Like} <span className="emoji" onClick={likeHandle} aria-label="Like" role="img">👍</span></div>
            <div className="cnt">{Heart} <span className="emoji" onClick={HeartHandle} aria-label="Heart" role="img">❤️</span></div>
            <div className="cnt">{Angry} <span className="emoji" onClick={AngryHandle} aria-label="Angry" role="img">😡</span></div>
            <div className="cnt">{Haha} <span className="emoji" onClick={HahaHandle} aria-label="Haha" role="img">😆</span></div>
            <div className="cnt">{Wow} <span className="emoji" onClick={WowHandle} aria-label="Wow" role="img">😮</span></div>
            <div className="cnt">{Cry} <span className="emoji" onClick={CryHandle} aria-label="Cry" role="img">😢</span></div>            
        </div>
    )
}

export default Like
