import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NoteAppBar = () => {

  const dispatch = useDispatch()
  const { active } = useSelector( state => state.notes )


  const handleSave = () => {
    dispatch( startSaveNote( active ))
    
  }

  const handlePicture = () => {
    document.querySelector('#fileSelector').click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if ( file ) {
      dispatch( startUploading(file))
    }

  }

  return (
    <div className='notes__appbar'>
        <span>{ moment().format('LL') }</span>
        <input
          id='fileSelector'
          type='file'
          style={{ display: 'none'}}
          onChange={ handleFileChange }
        />
        <div>
            <button 
              className='btn btn-secondary'
              onClick={ handlePicture }
            >
                Picture
            </button>
            <button 
              className='btn btn-secondary mr-5 ml-5'
              onClick={ handleSave }
            >
                Save
            </button>
        </div>
    </div>
  )
}
