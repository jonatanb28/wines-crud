
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateProduct from './Components/CreateProduct';
import EditProduct from './Components/EditProduct';
import Products from './Components/Products.jsx';
import Details from './Components/Details.jsx';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Products/>} />
            <Route path='/create' element={<CreateProduct/>} />
            <Route path='/edit/:id' element={<EditProduct/>} />
            {/* <Route path='/details/:id' element={<Details/>} /> */}
          </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
