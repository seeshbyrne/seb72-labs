import { useState } from 'react';
import './App.css'

const Bookshelf = () => {

    const [books, setBooks] = useState([
        {title: 'First Book', author: 'Saoirse Byrne'}
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({title: '', author: ''});
    }

    return (
        <>
        <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                name="title"
                value={newBook.title}
                onChange={handleInputChange}/>

                <label htmlFor="author">Author: </label>
                <input
                name="author"
                value={newBook.author}
                onChange={handleInputChange}/>

                <button type="submit">Add Book</button>

            </form>
        </div>
        <div className="bookCardsDiv">
            {books.map((book, index) => (
            <div key={index} className="bookCard">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
            </div>
            ))}
        </div>
       </div>
      </>
    );
};

export default Bookshelf;