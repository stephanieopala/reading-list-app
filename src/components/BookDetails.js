import React, {useContext} from 'react';
import {BookContext} from "../context/BookContext";

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);

    return (
        <div className="book-details">
            <div>
                <h3 className="title">TITLE: {book.title}</h3>
                <p className="author">AUTHOR: {book.author}</p>
            </div>
            <img src="../delete-bin.png" className="delete-btn" onClick={() => dispatch({type: "REMOVE_BOOK", id: book.id})}/>
        </div>
    )
}

export default BookDetails;
