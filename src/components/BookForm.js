import React, {useContext, useState} from 'react';
import { BookContext } from "../context/BookContext";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const {dispatch} = useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_BOOK", book: {
            title: title,
            author: author
        }});
        setTitle("");
        setAuthor("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter title..." required 
            value={title} onChange={(e) => setTitle(e.target.value)} />

            <input type="text" placeholder="Enter author..." required 
            value={author} onChange={(e) => setAuthor(e.target.value)} />

            <input type="submit" value="Add Book" />
        </form>
    )
}

export default BookForm;
