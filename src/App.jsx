import Navbar from "./components/layout/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/layout/Footer/Footer";
import SignUp from "././components/ui/SignUp/SignUp";
import Login from "././components/ui/Login/Login";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

//logika za router??

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}
export default App;
