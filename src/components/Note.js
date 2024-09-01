import React from 'react'



const Note = ({note: {title, content, timeCreated, timeEdited, imgScr}}) => {
    console.log(timeCreated)
    return (
    <div>
        <title>{title}</title>
        <h1>Time created: {timeCreated ? timeCreated.toLocaleDateString('en-US') : ""}</h1>
        {/* <h2>Time edited: {timeEdited.toLocaleDateString('en-US')}</h2> */}
        <p1>{content}</p1>
        <img src={imgScr}/>




    </div>
  )
}

export default Note
