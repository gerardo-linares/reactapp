
import { BrowserRouter, Routes , Route  } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';


const App = () => {

  return (
    <>  
        <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Destacados"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<h1><Cart/></h1>} />
            <Route path="/checkout" element={<h1>CheckOut</h1>} />
          </Routes>
          </CartProvider>
        </BrowserRouter>

    </>
  )
}

export default App;