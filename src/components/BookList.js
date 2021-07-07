import React, {useContext} from 'react';
import BookDetails from "./BookDetails";
import {BookContext} from "../context/BookContext";

const BookList = () => {
    const {books} = useContext(BookContext);

    return books.length ? (
        <div className="book-list">
                {books.map(book => {
                    return <BookDetails book={book} key={book.id}/>
                })}
        </div>
    ) : (
        false
    )
    
}

export default BookList;
