import "./App.css";
import Arrivals from "./assets/components/arriwals/Arrivals";
import Category from "./assets/components/category/Category";
import Header from "./assets/components/header/Header";
import Products from "./assets/components/products/Products";
import Slider from "./assets/components/slider/Slider";
import "./index.css";
function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Category />
      <Arrivals />
      <Products/>
    </div>
  );
}

export default App;
