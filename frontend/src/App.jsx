import { useState } from 'react';
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
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
          <Navbar />
          <div className='px-3 md:px-10 bg-gradient-to-br from-bg-gradient-start to-bg-gradient-end'>
            <Router />
          </div>
          <Footer />
        </>
      }
    </BrowserRouter>
  )
}

export default App;