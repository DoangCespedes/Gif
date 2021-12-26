import React from 'react'



export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <div className='d-inline-flex '>
                <img src={ url } alt={ title } />
            </div>
            {/* <div>
                <p> { title } </p>
            </div> */}
        </div>
    )
}
// contenedor d-flex justify-content-between

// card animate__animated animate__fadeIn