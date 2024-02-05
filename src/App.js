import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header";

function App() {
  return (
    <div>
      {/*npm install -D tailwindcss*/}
      {/*npx tailwindcss init*/}
      {/*npm i @reduxjs/toolkit react-redux react-icons react-router-dom react-loader-spinner*/}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
