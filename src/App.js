import './App.css';
import PlaceList from './components/PlaceList';
import CenterList from "./components/CenterList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <img src="img/logo.png" />
        </h1>
      </header>
      <CenterList />
      <PlaceList />
    </div>
  );
}

export default App;
