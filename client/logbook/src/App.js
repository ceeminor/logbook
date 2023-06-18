import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from './pages/home/Home';
import Flights from './pages/flights/Flights'
import Error from './pages/error/Error';
import NotFound from './pages/notfound/NotFound';
import Navigation from './pages/global/Navigation';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/flights" element={<Flights/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
