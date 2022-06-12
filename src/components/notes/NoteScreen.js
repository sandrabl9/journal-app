import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleteNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {

  const dispatch = useDispatch()

  const { active: note } = useSelector( state=> state.notes )

  const [ formValues, handleInputChange, reset ] = useForm( note )

  const { body, title, id } = formValues

  const activeId =  useRef( note.id )

  useEffect(() => {

    // Solo se va a ejecutar si la nota.id cambia, y si cambia esa va a ser la nueva nota activa

    if ( note.id !== activeId.current) { 
      reset( note )
      activeId.current = note.id
    }
  
  }, [note, reset])

  useEffect(() => {
    dispatch( activeNote( formValues.id, {...formValues}))
  
  }, [dispatch, formValues])

  const handleDelete = () => {
    
    dispatch(startDeleteNote(id))

  }
  
  

  return (
    <div className='notes__main-content'>

        <NoteAppBar />

        <div className='notes__content'>
            <input
                type='text'
                placeholder='Someone title'
                className='notes__title-input'
                autoComplete='off'
                name='title'
                value={ title }
                onChange={ handleInputChange }
            />
            <textarea
                placeholder='What happened today?'
                className='notes__textarea'
                autoComplete='off'
                name='body'
                value={ body }
                onChange={ handleInputChange }
            >
            </textarea>
           {
            
            ( note.url ) &&

                <div className='notes__image'>
                    <img
                    src={ note.url }
                    alt='cloud'
                    />
                </div>
            }

        </div>
        <button 
          className='btn btn-danger'
          onClick={ handleDelete }
        >
          Delete
        </button>


    </div>
  )
}
