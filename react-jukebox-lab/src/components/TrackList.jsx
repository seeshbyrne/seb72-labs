

const TrackList = (props) => {
    const trackListItems = props.tracks.map((track) => (
        <li ley={ track._id }>
            <a href="#" onClick={ () => props.updateSelectedTrack(track)}>
                { track.title }
            </a>
        </li>
    ));

    const handleClick = () => {
        props.updateSelectedTrack(null); // forget any previously selected track
        props.toggleShowForm(); // actually show (or hide) the form
    };

    return (
        <div>
            <h1>Track List</h1>
            { props.tracks.length === 0 ? <h2>No Tracks Yet</h2> : <ul>{ trackListItems }</ul>}
            <button onClick={ handleClick }>
                { props.showForm ? 'Close form' : 'New Track'}
            </button>
        </div>
    )
};

export default TrackList;