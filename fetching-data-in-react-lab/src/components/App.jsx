import { useState, useEffect } from 'react';
import * as starshipService from "../services/starshipService";
import StarshipSearch from "./StarshipSearch";
import StarshipList from './StarshipList';

const App = () => {

  const [starships, setStarships] = useState([]);
  const [searchIdentifier, setSearchIdentifier] = useState('');


  const fetchData = async (starship) => {
      const data = await starshipService.getStarship(starship);
      const starshipData = data.map(starship => ({
        name: starship.name,
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

  return (
    <>
    <h1>Starships</h1>
    <StarshipSearch onSubmit={setSearchIdentifier} />
    <StarshipList starships={starships} />
    </>
  );
};

export default App;