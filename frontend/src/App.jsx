import { useState } from 'react';
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import NavbarMobile from "./components/NavbarMobile";
import NavbarLaptop from "./components/NavbarLaptop";
import Footer from "./components/Footer";
import MainPage from './pages/MainPage';

function App() {
  const [mainPage, setMainPage] = useState(false);

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

          <div className='block sm:hidden'>
            <NavbarMobile />
          </div>
          <div className='hidden sm:block'>
            <NavbarLaptop />
          </div>

          <div className='px-3 md:px-10 pt-16 pb-3 bg-gradient-to-br from-bg-gradient-start to-bg-gradient-end'>
            <Router />
          </div>
          <Footer />
        </>
      }
    </BrowserRouter>
  )
}

export default App;