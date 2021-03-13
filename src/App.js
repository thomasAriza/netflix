
import './App.css';
import Banner from './components/Banner';
import Rows from './components/Rows';

function App() {
  return (
    <div className="app">
      <Banner className="banner"/>
      <Rows className="row_" title="Tendances" movieType="Trending"/>
      <Rows title="Orinaux de netflix" movieType="NetflixOriginals"/>
      <Rows title="Films romantiques" movieType="RomanceMovies"/>
      <Rows title="Comédies" movieType="ComedyMovies"/>
      <Rows title="Film d'horreur" movieType="HorrorMovies"/>
      
    </div>
  );
}

export default App;
