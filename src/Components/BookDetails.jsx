import React from 'react'

function BookDetails({ api1 }) {
    console.log(api1)
    return (
        <div className='bookDetails'>
            {api1 &&
                api1.map((item, index) => (
                    <div key={index} className="detailsCard">
                        <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} /> 
                        <h3>{item.volumeInfo.title}</h3>
                        <p>{item.volumeInfo.title}</p>
                        <button></button>
                    </div>
                ))}
        </div>
    )
}

export default BookDetails