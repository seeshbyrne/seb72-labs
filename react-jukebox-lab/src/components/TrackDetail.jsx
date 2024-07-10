const TrackDetail = (props) => {
    const { selectedTrack } = props;
    // conditional rendering
    if (selectedTrack === null) {
        return (
            <div>
                <h1>No Details</h1>
            </div>
        ); // aka if there is no selected track, then we say there are no details
    }

    return (
        <div>
            <h1> { selectedTrack.title } </h1>
            <h2> Artist: { selectedTrack.artist } </h2>
            <button onClick={() => props.toggleShowForm()}>Edit</button>
            <button onClick={() => props.handleRemoveTrack(selectedTrack._id)}>Delete</button>
        </div>
    )
};

export default TrackDetail;