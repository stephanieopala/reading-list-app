import React, {useContext} from 'react';
import {BookContext} from "../context/BookContext";
import {ThemeContext} from "../context/ThemeContext";

const Header = () => {
    const {books} = useContext(BookContext);
    const {theme} = useContext(ThemeContext);
    return (
        <div className="header" style={{color: theme.syntax, background: theme.bg}}>
            <h1 >My Reading List</h1>
            <p>You have {books.length} books to get through</p>
        </div>
    )
}

export default Header;
