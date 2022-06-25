import NavBar from './component/NavBar';
import Banner from './component/Banner';
import MovieList from  './component/MovieList'
import Fav from './component/Fav'
import './App.css';

function App() {
  return (

    <div>
         <NavBar/>
         {/* <Banner/>
         <MovieList/> */}
         <Fav/>
    </div>
   
  );
}

export default App;
