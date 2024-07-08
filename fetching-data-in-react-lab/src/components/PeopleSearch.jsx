import { useState } from 'react';

const PeopleSearch = (props) => {
    const [person, setPerson] = useState('');

    const _handleSearch = (event) => {
        event.preventDefault();
        props.onSubmit(person);
        setPerson(''); // clears the input
    }

    const _handleStarshipChange = (event) => {
        setPerson(event.target.value);
    }

    return (
        <section>
            <form onSubmit={ _handleSearch }>
                <label>
                    Enter a person:
                    <input
                        type="search"
                        placeholder="Person's name"
                        required
                        autofocus
                        onChange={ _handleStarshipChange }
                        value={person}
                    />
                </label>
                <button>Search</button>
            </form>
        </section>
    )
};

export default PeopleSearch;