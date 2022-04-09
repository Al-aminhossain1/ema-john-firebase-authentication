
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componant/Header/Header';
import Inventory from './Componant/Inventory/Inventory';
import OrderReview from './Componant/OrderReview/OrderReview';
import Shop from './Componant/Shop/Shop';
import About from './Componant/About/About';
import NotFound from './Componant/NotFound/NotFound'
import LogIn from './Componant/LogIn/LogIn';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/review' element={<OrderReview></OrderReview>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
