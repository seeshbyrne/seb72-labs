import PeopleCard from "./PeopleCard";

const PeopleList = ({ person }) => {

    return (
        <div>
            {person.map(person => (
                <PeopleCard key={person.name} person={person} />
            ))}
        </div>
    )
};

export default PeopleList;
