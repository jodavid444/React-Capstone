import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import Header from './components/pages/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/details/:name"
          element={<Details />}
        />
      </Routes>
    </div>
  );
}

export default App;
