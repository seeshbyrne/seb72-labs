// GET THE EXTERNAL STUFF FIRST
import { useState, useEffect } from "react";
import * as trackService from '../services/trackService';

// THEN GET THE INTERNAL STUFF (our code)

import TrackList from "./TrackList";
import TrackDetail from "./TrackDetail"; 
import TrackForm from "./TrackForm";

const Dashboard = () => {
    const [trackList, setTrackList] = useState([]);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const tracks = await trackService.index();
                if (tracks.message) {
                    throw new Error(tracks.message);
                }
                setTrackList(tracks);
            } catch (error) {
            console.error(error);
            }
        };
        fetchTracks();
    }, []); // empty array means this function only runs once

    const toggleShowForm = (track) => {
        setShowForm(!showForm);
    };

    const handleAddTrack = async (trackData) => {
        try {
        // Call trackService.create, assign return value to newTrack
            const track  = await trackService.create(trackData);
            // Add the track object and the current trackList to a new array, and
            // set that array as the new trackList
            setTrackList([...trackList, track]);
            setShowForm(false); // hide the form again

            if (track.message) {
                throw new Error(track.message);
            }

        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdateTrack = async (trackData) => {
        try {
            const track = await trackService.update(trackData);
            setShowForm(false); // hide the form again

            if (track.message) {
                throw new Error(track.message);
            }

            // make a copy of track list
            // find the index of the track that changed
            // replace the track at that index
            // set that new state

            const updatedTrackList = [...trackList]; // making the copy
            const updatedIndex = updatedTrackList.findIndex((t) => t._id === track._id);  // find index
            updatedTrackList[updatedIndex] = track; //replace the track
            setTrackList(updatedTrackList); // set new state
            setSelectedTrack(track);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveTrack = async (id) => {
        try {
            await trackService.deleteTrack(id);
            setSelectedTrack(null);
            const updatedTrackList = trackList.filter((t) => t._id !== id);
            setTrackList(updatedTrackList);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <TrackList
                tracks={ trackList }
                updateSelectedTrack={ setSelectedTrack }
                toggleShowForm={ toggleShowForm }  //changes state of form
                showForm={ showForm }  // knows whether currently true or false
            />
            {
            showForm
            ?
            <TrackForm
                selectedTrack={ selectedTrack }
                handleSubmit={ selectedTrack ? handleUpdateTrack : handleAddTrack } 
            />
            :
            <TrackDetail 
                selectedTrack={ selectedTrack }
                toggleShowForm={ toggleShowForm }
                handleRemoveTrack={ handleRemoveTrack }
            />
            }
        </>
    );
};

export default Dashboard;