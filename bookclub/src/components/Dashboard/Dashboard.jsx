import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you, and only you, can see a dashboard
        of all of your things.
      </p>

        <h2>Find your book</h2>
        <div className="search">
            <input type="text" placeholder="Enter Your Book Name" />
            <button>search</button>
        </div>
        
    </main>
  );
};

export default Dashboard;
