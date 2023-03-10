import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Character from './components/Character';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
    <Header />
    <Footer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/character/:id' element={<Character></Character>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
