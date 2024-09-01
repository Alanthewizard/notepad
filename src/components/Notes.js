import React from 'react'
import Note from './Note.js'

let currentDate = new Date()

const notes = [{
title:"Title 1",
content:"Content 1",
timeCreated: currentDate,
timeEdited: NaN,
imgScr: "",
},{
title:"Title 2",
content:"Content 2",
timeCreated: currentDate,
timeEdited: currentDate,
imgScr: "https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg",
},{
title:"Title 3",
content:"Content 3",
timeCreated: currentDate,
timeEdited: currentDate,
imgScr: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/800px-Stray_kitten_Rambo002.jpg",
},
]

function Notes() {
  return (
    <div>
      {notes.map((note) => {return <Note note={note}/>} )}
    </div>
  )
}

export default Notes