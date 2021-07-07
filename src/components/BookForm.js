import React, {useContext, useState} from 'react';
import { BookContext } from "../context/BookContext";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const {addBook} = useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
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
