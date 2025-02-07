import { BrowserRouter } from "react-router-dom";
import Router from './Router';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Router />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;