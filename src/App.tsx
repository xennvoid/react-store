import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './layout/Layout';
import Cart from './pages/Cart/Cart';
import Products from './pages/Products/Products';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Terms from './pages/Terms/Terms';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<SingleProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="terms" element={<Terms />} />
          <Route path="contacts" element={<p>Contacts</p>} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;