import React from 'react'

export const GifGridItem = ( img ) => {

    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src={ img.url } alt={ img.title } />
            <p> { img.title } </p>
        </div>
    )
}
