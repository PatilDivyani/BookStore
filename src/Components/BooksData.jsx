import React from 'react'


function BooksData({api1,api2,loading}) {
   
    return (
        <div className='moreBooks'> 
            <h2>More Books</h2>
            <div className="booksData"  >
                {
                    loading &&
                    ( api2.map((item, index) => (
                            <img key={index} src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} /> ))
                    )
                }
                {
                    loading &&
                    ( api1.map((item, index) => (
                            <img key={index} src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} />))
                    )
                }
            </div>
        </div>
    )
}

export default BooksData