const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

// GET all tracks
const index = async () => {
    try {
        const response = await fetch(BASE_URL); // gets the data
        return response.json(); // this returns a promise
        // returns and turns it into json data
    } catch (error) {
        console.log(error);
    }
};

const create = async (track) => {
    try {
        const response = await fetch(BASE_URL, {
            // We specify that this is a 'POST' request
            method: 'POST',
            // We're sending JSON data, so we attach a Content-Type header
            // and specify that the data being sent is type 'application/json'
            headers: {
                'Content-Type': 'application/json'  //this is how we let back end know we're sending JSOIN data
            },
            // The formData, converted to JSON, is sent as the body
            // This will be received on the backend as req.body
            body: JSON.stringify(track) //can only send strings here
            // turning JS object into the string
        })
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const update = async (track) => {
    try {
        const response = await fetch(BASE_URL + '/' + track._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(track)
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const deleteTrack = async (id) => {
    try {
        const response = await fetch(BASE_URL + '/' + id, {
            method: 'DELETE',
        });
        return response.json();
    } catch (error) {
    console.error(error);
    }
};

export { index, create, update, deleteTrack };