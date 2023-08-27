import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Home from './Components/Home'
import Cart from "./Components/Cart";
import Footer from './Components/Footer'
import WishList from "./Components/WishList";
import BlogPage from "./Components/BlogPage";
import Page404 from "./Components/Page404";
import ScrollToTop from "./Components/ScrollToTp"

function App() {
  return (
    <Router>
    <ScrollToTop/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Products />} />
        <Route path="/BlogPage" element={<BlogPage/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/WishList" element={<WishList/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
