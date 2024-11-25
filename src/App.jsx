import "./App.css";
import Category from "./assets/components/category/Category";
import Footer from "./assets/components/footer/Footer";
import Header from "./assets/components/header/Header";
import Products from "./assets/components/products";
import Slider from "./assets/components/slider/Slider";
import "./index.css";
function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Category />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
