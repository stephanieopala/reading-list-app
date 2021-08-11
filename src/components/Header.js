import React, {useContext} from 'react';
import {BookContext} from "../context/BookContext";

const Header = () => {
    const {books} = useContext(BookContext);

    return (
        <div className="header" >
            <h1 >My Reading List</h1>
            <p>You have <span>{books.length}</span> books to get through</p>
        </div>
    )
}

export default Header;
