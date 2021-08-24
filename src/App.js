import MenuList from "./components/Menu/MenuList";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <MenuList />
      <Footer />
    </CartProvider>
  );
}

export default App;
