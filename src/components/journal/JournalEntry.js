import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
          className='journal__entry-picture'
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://www.cambio16.com/wp-content/uploads/2017/04/fotos-impresionantes-imagenes-que-parecen-modificadas-con-photoshop-11.jpeg)'

          }}
        >
        </div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Un día nuevo
            </p>
            <p className='journal__entry-content'>
                loremememmemloremmm loemmoe
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>

        </div>

    </div>
  )
}
