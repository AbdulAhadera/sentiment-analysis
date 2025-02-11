import { useState } from 'react';
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from './pages/MainPage';

function App() {
  const [mainPage, setMainPage] = useState(false)

  return (
    <BrowserRouter>
      {mainPage ?
        <>
          <>
            <MainPage />
          </>
        </>
        :
        <>
          <Navbar />
          <div className='px-2 md:px-10'>
            <Router />
          </div>
          <Footer />
        </>
      }
    </BrowserRouter>
  )
}

export default App;