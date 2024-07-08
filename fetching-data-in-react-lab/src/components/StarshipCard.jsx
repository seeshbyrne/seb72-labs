const StarshipCard = ({starship}) => {

    return (
        <section>
            <h2>Starship Details</h2>
            <p>Name: {starship.name} </p>
            <p>Model: {starship.model} </p>
            <p>Manufacturer: {starship.manufacturer} </p>
        </section>
    );
};

export default StarshipCard;
