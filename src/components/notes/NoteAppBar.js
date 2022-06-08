import React from 'react'

export const NoteAppBar = () => {
  return (
    <div className='notes__appbar'>
        <span>30 de Junio 2022</span>
        <div>
            <button className='btn'>
                Picture
            </button>
            <button className='btn'>
                Save
            </button>
        </div>
    </div>
  )
}
