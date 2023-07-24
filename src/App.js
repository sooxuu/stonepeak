import './App.css';
import PlaceList from './components/PlaceList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <img src="img/logo.png" />
        </h1>
      </header>
      <PlaceList />
    </div>
  );
}

export default App;
