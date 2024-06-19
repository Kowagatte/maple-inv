import './App.css';
import Inventory from './maple/Inventory';
import ItemSearch from './app/ItemSearch';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <Inventory/>
        <ItemSearch/>
      </header>
    </div>
  );
}

export default App;
