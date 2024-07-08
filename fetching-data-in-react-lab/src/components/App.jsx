import { useState, useEffect } from 'react';
import * as starshipService from "../services/starshipService";
import * as peopleService from "../services/peopleService";
import StarshipSearch from "./StarshipSearch";
import PeopleSearch from './PeopleSearch';
import StarshipList from './StarshipList';
import PeopleList from './PeopleList';

const App = () => {

  const [starships, setStarships] = useState([]);
  const [person, setPerson] = useState([]);

  const [searchIdentifier, setSearchIdentifier] = useState('');
  const [searchPerson, setSearchPerson] = useState('');

  const fetchData = async (starship) => {
      const data = await starshipService.getStarship(starship);
      const starshipData = data.map(starship => ({
        name: starship.name,
        class: starship.starship_class,
        model: starship.model,
        manufacturer: starship.manufacturer,
      }));
      setStarships(starshipData);
    };

    useEffect(() => {
      if (searchIdentifier) {
        fetchData(searchIdentifier);
      }
    }, [searchIdentifier]);
  
    console.log(starships);
    
/////////////////////////////////////////////////////////////
    const fetchPersonData = async (person) => {
      const data = await peopleService.getPerson(person);
      const personData = data.map(person => ({
        name: person.name,
        gender: person.gender,
        height: person.height,
      }));
      setPerson(personData);
    };

    useEffect(() => {
      if (searchPerson) {
        fetchPersonData(searchPerson);
      }
    }, [searchPerson]);
  
    console.log(person);
/////////////////////////////////////////////////////////////////////

  return (
    <main>
    <h1>Starships</h1>
    <StarshipSearch onSubmit={setSearchIdentifier} />
    <StarshipList starships={starships} />
    <h2>People</h2>
    <PeopleSearch onSubmit={setSearchPerson} />
    <PeopleList person={person} />
    </main>
  );
};

export default App;