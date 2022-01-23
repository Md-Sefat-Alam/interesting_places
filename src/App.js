import './App.css'
function App() {
  return (
    <div className="App">


      <header className="flex justify-between bg-gray-600 py-2 fixed w-full">
        <div className="font-bold text-3xl cursor-pointer select-none w-1/2">
          <h3 className="text-yellow-600 mx-4">Interesting <span className="font-bold text-gray-900">Places</span></h3>
        </div>
        <nav className='w-1/2'>
          <ul className='flex text-gray-500'>
            <li className='cursor-pointer select-none mx-2 font-bold text-xl text-gray-400 hover:text-gray-300'>Home</li>
            <li className='cursor-pointer select-none mx-2 text-xl hover:text-gray-300'>Favorite Place</li>
            <li className='cursor-pointer select-none mx-2 text-xl hover:text-gray-300'>About Us</li>
            <li className='cursor-pointer select-none mx-2 text-xl hover:text-gray-300'>Blogs</li>
          </ul>
        </nav>
      </header>
      {/* end header */}

      <main>

      </main>
      {/* End Main Part of web page */}

      <footer>

      </footer>
      {/* End footer */}

    </div>
  );
}
export default App;
