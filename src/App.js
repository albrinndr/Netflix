import './App.css';
import { originals, actions, trending } from './urls'
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={trending} title="Trending Now" isSmall />
      <RowPost url={actions} title="Action" isSmall />
    </div>
  );
}

export default App;
