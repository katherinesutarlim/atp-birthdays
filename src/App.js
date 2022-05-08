import './App.css';
import moment from 'moment';
import players from './data/players_100.json';

function App() {
  players.forEach(player => (player.DOBmoment = moment(player.DOB, "YYYYMMDD")));
  players.sort((a,b) => {
    const dateA = a.DOBmoment.format("DDYYYY");
    const dateB = b.DOBmoment.format("DDYYYY");
    // const isSameOrBefore = a.DOBmoment.isSameOrBefore(b.DOBmoment);
    // const isSameOrAfter = a.DOBmoment.isSameOrAfter(b.DOBmoment);
    if (dateA === dateB) {
      return 0;
    }
    if (dateA < dateB) {
      return -1;
    }
    return 1;
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tennis Players Birthdays
        </h1>
      </header>
      <div className='header-row'>
        {[...Array(12).keys()].map(index => (
          <div className='column' key={index}>
            <div className='header-cell'>
              {moment.months(index).substring(0, 3)}
            </div>
            {players.filter(player => {
              return player.DOBmoment.month() === index;
            }).map(player => (
              <div className='entry'>
                <h3>
                  {player['Full Name']}
                </h3>
                <p className='date'>
                  {player.DOBmoment.date()}
                </p>
                <p className='year'>
                  {player.DOBmoment.year()}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
