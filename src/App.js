
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider >
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/contacto' element={<ContactForm />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
      <div>
        <img src='https://roparevolver.com/cdn/shop/files/R_v24_0001_4512x3012_crop_center.jpg?v=1692983103' data-sizes='auto' className='img-locals' />
        <div className='locals'>
          <h1>LOCAL</h1>
          <br />
          <h2>MALABIA 1150, VILLA CRESPO</h2>
          <br />
          <h2>BUENOS AIRES, ARGENTINA</h2>
          <br />
          <p>Lunes - Domingo 10 - 20hs</p>
        </div>
      </div>
      <footer className='footer'>
        <div className='newsletter'>
          <h3>NEWSLETTER</h3>
          <p>Subscribite a nuestro Newsletter y recibí un 5% descuento para tu primera compra.</p>
        </div>
        <div className='direction'>
          <h3>ROPA REVOLVER</h3>
          <p>MALABIA 1150 - CP 1414 - CABA</p>
        </div>
        <div className='social'>
        <a href='https://www.facebook.com/roparevolver' target='_blank' rel='noopener noreferrer' className='icon'>
          <img src='https://cdn-icons-png.flaticon.com/512/20/20673.png'></img>
        </a>
        <a href='https://www.instagram.com/roparevolver/' target='_blank' rel='noopener noreferrer' className='icon'>
          <img src='https://cdn-icons-png.flaticon.com/512/1384/1384015.png'></img>
        </a>
        </div>
        <div className='legal'>
          <p>LEGALES</p>
          <br />
          <a href='https://roparevolver.com/pages/politica-de-cambios-y-devoluciones'>Politica de Cambios y Devoluciones</a>
          <br />
          <a href='https://roparevolver.com/policies/refund-policy'>Politica de Reembolso</a>
          <br />
          <a href='https://roparevolver.com/policies/shipping-policy'>Politicas de Envíos</a>
          <br />
          <a href='https://roparevolver.com/policies/privacy-policy'>Politicas de Privacidad</a>
          <br />
          <a href='https://roparevolver.com/policies/terms-of-service'>Términos y Condiciones</a>
        </div>
        <p className='trademark'>© 2023 Ropa Revolver, Buenos Aires, Argentina</p>
      </footer>
    </div>
  );
}

export default App;
