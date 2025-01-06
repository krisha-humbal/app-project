
import './App.css';
// import ResponsiveAppBar from './Component/ResponsiveAppbar'
// import MUICard from './Component/Card';

// import Footer from './Component/Footer';
import Home from './Pages/Home'
import About from './Pages/About';
import Support from './Pages/Support';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
   <Routes>
      <Route path='/'>
        <Route index element={<Home />}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Support' element={<Support/>}></Route>

        <Route></Route>

      </Route>
   
   </Routes>
  );
}

export default App;
