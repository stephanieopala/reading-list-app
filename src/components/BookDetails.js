import React, {useContext} from 'react';
import {BookContext} from "../context/BookContext";
import {ThemeContext} from "../context/ThemeContext";

const BookDetails = ({book}) => {
    const {removeBook} = useContext(BookContext);
    const {theme} = useContext(ThemeContext);

    return (
        <div className="book-details" style={{background: theme.bg, color: theme.syntax}}>
            <div>
                <h3 className="title">TITLE: {book.title}</h3>
                <p className="author">AUTHOR: {book.author}</p>
            </div>
             <button className="delete-btn" onClick={() => removeBook(book.id)}>Delete</button> 
        </div>
    )
}

export default BookDetails;
