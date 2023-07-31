import "./App.css";
import HomePage from './pages/HomePage'
import AllBeersPage from './pages/AllBeersPage'
import RandomBeerPage from './pages/RandomBeerPage'
import AddBeersPage from './pages/AddBeerPage'
import BeerDetailsPage from './pages/BeerDetailsPage'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
     
      <Routes>

        <Route path ='/' element={<HomePage />}></Route>
        <Route path ='/beers' element={<AllBeersPage />}></Route>
        <Route path ='/random-beer' element={<RandomBeerPage />}></Route>
        <Route path ='/new-beer' element={<AddBeersPage />}></Route>
        <Route path ='/beers/:beerId' element={<BeerDetailsPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
