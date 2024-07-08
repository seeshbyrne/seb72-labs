// make all API/fetch calls from this module

const BASE_URL = "https://swapi.dev/api/starships/";

const getStarship = async (identifier) => {
    try {
        const queryString = "?search=" + identifier;
        const response = await fetch(BASE_URL + queryString);
        const data = await response.json();
        console.log('data', data);
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export { getStarship };