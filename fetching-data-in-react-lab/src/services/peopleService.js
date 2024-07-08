// make all API/fetch calls from this module

const BASE_URL = "https://swapi.dev/api/people/";

const getPerson = async (person) => {
    try {
        const queryString = "?search=" + person;
        const response = await fetch(BASE_URL + queryString);
        const data = await response.json();
        console.log('data', data);
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export { getPerson };