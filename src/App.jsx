import { Routes,Route } from 'react-router-dom';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './views/Home/Home';



function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
