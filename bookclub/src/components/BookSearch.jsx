import { useState } from 'react';

const BookSearch = (props) => {
    // const [identifier, setIdentifier] = useState('');

    // const handleSearch = (event) => {
    //     event.preventDefault();
    //     props.onSubmit(identifier);
    //     setIdentifier(''); // clears the input
    // }


    // const handleBookChange = (event) => {
    //     setIdentifier(event.target.value);
    // }

    return (
        // <section>
        //     <h2>Search</h2>
        //     <form onSubmit={ handleSearch }>
        //         <label>
        //             Enter a book:
        //             <input
        //                 type="search"
        //                 placeholder="Search for a book"
        //                 required
        //                 autoFocus
        //                 onChange={ handleBookChange }
        //                 value={identifier}
        //                 />
        //         </label>
        //         <button>Search</button>
        //     </form>
        // </section>
    )
};

export default BookSearch;