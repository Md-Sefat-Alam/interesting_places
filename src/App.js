import { useEffect, useState } from 'react';
import './App.css'
import AddNewPlace from './components/AddNewPlace/AddNewPlace';
import EditPopularPlaces from './components/EditPopularPlaces/EditPopularPlaces';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PopularPlaces from './components/PopularPlaces/PopularPlaces';
import SideBar from './components/SideBar/SideBar';
function App() {
  const [visableOrNot, setVisableOrNot] = useState({ right: '-9999px' });
  const [editVisableOrNot, setEditVisableOrNot] = useState({ right: '-9999px' });
  const [editKey, setEditKey] = useState(0);
  const [placesInfo, setPlacesInfo] = useState([]);

  // get data from local storage
  function getDataFromLocalStorage() {
    const exists = localStorage.getItem("popular_places_data");
    if (!exists) {
      setPlacesInfo(null);
    } else {
      setPlacesInfo(JSON.parse(exists));
    }
  }
  // get data from local storage
  useEffect(() => {
    const exists = localStorage.getItem("popular_places_data");
    if (!exists) {
      setPlacesInfo(null);
    } else {
      setPlacesInfo(JSON.parse(exists));
    }
  }, []);


  return (
    <div className="App">
      <Header />
      {/* end header */}
      <main>
        <div className='topStyleImg'>
          {/* this use only for top style */}
        </div>
        <div style={{ height: '200px' }}>
          {/* this only use for a long gap */}
        </div>

        <section className='container addNewPlace'>
          <AddNewPlace setVisableOrNot={setVisableOrNot} />
        </section>
        {/* add a new place */}

        <section className='container popularPlaces'>
          <PopularPlaces setEditKey={setEditKey} setEditVisableOrNot={setEditVisableOrNot} setVisableOrNot={setVisableOrNot} placesInfo={placesInfo} />
        </section>

        <SideBar getDataFromLocalStorage={getDataFromLocalStorage} visableOrNot={visableOrNot} setVisableOrNot={setVisableOrNot} />

        <EditPopularPlaces editKey={editKey} setEditKey={setEditKey} getDataFromLocalStorage={getDataFromLocalStorage} editVisableOrNot={editVisableOrNot} setEditVisableOrNot={setEditVisableOrNot} />

      </main>
      {/* End Main Part of web page */}

      <Footer />
      {/* End footer */}

    </div>
  );
}
export default App;
