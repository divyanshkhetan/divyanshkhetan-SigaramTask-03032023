import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListingPage from './pages/ProductListingPage';
import CartItemListPage from './pages/CartItemListPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>


      <Routes>
        <Route path="/" element= {<ProductListingPage />} />
        <Route path="/cart" element={< CartItemListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
