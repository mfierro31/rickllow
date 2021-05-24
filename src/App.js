import Navbar from './Navbar';
import Routes from './Routes';
import './App.css';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
