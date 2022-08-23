import React from 'react'
import "../styles/loading.css"
export default function Loading() {
    return (
        <div className={'Loading component'}>
            <span>Loading</span>
            <div className='circle'>
                <h5>yukleniyor...</h5>
            </div>
        </div>
    )
}
