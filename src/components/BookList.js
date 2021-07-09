import React, {useContext} from 'react';
import BookDetails from "./BookDetails";
import {BookContext} from "../context/BookContext";
import {ThemeContext} from "../context/ThemeContext";

const BookList = () => {
    const {books} = useContext(BookContext);
    const {theme} = useContext(ThemeContext);

    return books.length ? (
        <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
                {books.map(book => {
                    return <BookDetails book={book} key={book.id}/>
                })}
        </div>
    ) : (
        false
    )
    
}

export default BookList;
