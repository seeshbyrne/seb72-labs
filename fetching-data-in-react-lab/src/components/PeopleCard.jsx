const PeopleCard = ({person}) => {

    return (
        <section>
            <ul>
            <h2>Person Details</h2>
            <p>Name: {person.name} </p>
            <p>Gender: {person.gender} </p>
            <p>Height: {person.height} </p>
            </ul>
        </section>
    );
};

export default PeopleCard;
