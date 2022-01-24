import './App.css'
import AddNewPlace from './components/AddNewPlace/AddNewPlace';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PopularPlaces from './components/PopularPlaces/PopularPlaces';
function App() {
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
          <AddNewPlace />
        </section>
        {/* add a new place */}

        <section className='container popularPlaces'>
          <PopularPlaces />
        </section>


      </main>
      {/* End Main Part of web page */}

      <Footer />
      {/* End footer */}

    </div>
  );
}
export default App;
