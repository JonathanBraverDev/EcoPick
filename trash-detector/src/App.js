import logo from './logo.svg';
import './App.css';
import GoogleMapComponent from './GoogleMapComponent';
import Top from './top-app';
import Down from './app-down';
import Chips from './chips';

function App() {
  return (
    <div className="App">
      <Top></Top>
      <GoogleMapComponent />
      <Chips></Chips>
      <Down></Down>
    </div>
  );
}

export default App;
