

const BookCard = ({book}) => {

    return (
        <section>
            <div className="card">

                <h2>Books below:</h2>

                <div className="bottom">
                    <p>Title: book title here </p>
                    <p>Author: </p>  
                </div>

            </div>    
        </section>
    );
};

export default BookCard;