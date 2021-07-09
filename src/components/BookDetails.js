import React, {useContext} from 'react';
import {BookContext} from "../context/BookContext";

const BookDetails = ({book}) => {
    const {removeBook} = useContext(BookContext);

    return (
        <div className="book-details">
            <div>
                <h3 className="title">TITLE: {book.title}</h3>
                <p className="author">AUTHOR: {book.author}</p>
            </div>
             <button className="delete-btn" onClick={() => removeBook(book.id)}>Delete</button> 
        </div>
    )
}

export default BookDetails;
