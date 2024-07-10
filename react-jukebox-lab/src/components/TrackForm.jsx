import { useState } from 'react';

const TrackForm = (props) => {
    // formData state to control the form
    const initialState = {
        title: '',
        artist: ''
    };

    // If track data has been passed as props, we set formData as that track object.
    // Otherwise, we can assume this is a new track form, and use the empty initialState object.

                                    //track selected >> editing track        // new form (there is no track selected)    
    const [formData, setFormData] = useState(props.selectedTrack || initialState);

    const handleTitleChange = (event) => {
        const updatedFormData = {...formData, title: event.target.value};
        setFormData(updatedFormData);
    };

    const handleArtistChange = (event) => {
        const updatedFormData = {...formData, artist: event.target.value};
        setFormData(updatedFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(formData);
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>
                    Title: 
                    <input
                        value={ formData.title }
                        onChange={handleTitleChange}
                        required
                    />
                </label>
                <label>
                    Artist: 
                    <input
                        value={ formData.artist }
                        onChange={handleArtistChange}
                        required
                    />
                </label>
                <button>
                    { props.selectedTrack ? 'Update track' : 'Add new track'}
                </button>
            </form>
        </div>
    );
};

export default TrackForm;