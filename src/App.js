import { useState, useEffect } from 'react';
import Loading from './Loading';
import './App.css';
import Tours from './Tours';
import t from './Tour.module.css';
import ts from './Tours.module.css';

const URL = 'https://course-api.com/react-tours-project';

function App() {
  const [load, setLoad] = useState(false);
  const [tours, setTours] = useState([]);

  let deleteTour = (id) => {
    let newTours = tours.filter(elem => elem.id !== id);
    setTours(newTours);
  }

  const getTours = async () => {
    setLoad(true);
    try {
      const responce = await fetch(URL);
      const tours = await responce.json();
      setLoad(false);
      setTours(tours);
      console.log(tours);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  }

  useEffect(() => {
    getTours();
  }, []);

  if (load) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className={ts.title}>
          No tours left
        </div>
        <button className={t.btn_delete} onClick={getTours}>refresh</button>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} setTours={setTours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
