const StarshipCard = ({starship}) => {

    return (
        <section>
            <ul>
            <h2>Starship Details</h2>
            <p>Name: {starship.name} </p>
            <p>Class: {starship.class} </p>
            <p>Model: {starship.model} </p>
            <p>Manufacturer: {starship.manufacturer} </p>
            </ul>
        </section>
    );
};

export default StarshipCard;
