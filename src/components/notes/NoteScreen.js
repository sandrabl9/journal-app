import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>

        <NoteAppBar />

        <div className='notes__content'>
            <input
               type='text'
               placeholder='Someone title'
               className='notes__title-input'
               autoComplete='off'
            />
            <textarea
                placeholder='What happened today?'
                className='notes__textarea'
                autoComplete='off'
            >
            </textarea>
            <div className='notes__image'>
                <img
                src='https://www.cambio16.com/wp-content/uploads/2017/04/fotos-impresionantes-imagenes-que-parecen-modificadas-con-photoshop-7.jpeg'
                alt='cloud'
                
                />

            </div>

        </div>


    </div>
  )
}
