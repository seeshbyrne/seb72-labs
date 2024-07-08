import { useState } from 'react';

const StarshipSearch = (props) => {
    const [identifier, setIdentifier] = useState('');

    const _handleSearch = (event) => {
        event.preventDefault();
        props.onSubmit(identifier);
        setIdentifier(''); // clears the input
    }

    const _handleStarshipChange = (event) => {
        setIdentifier(event.target.value);
    }

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={ _handleSearch }>
                <label>
                    Enter a starship:
                    <input
                        type="search"
                        placeholder="Starship name"
                        required
                        autofocus
                        onChange={ _handleStarshipChange }
                        value={identifier}
                    />
                </label>
                <button>Search</button>
            </form>
        </section>
    )
};

export default StarshipSearch;