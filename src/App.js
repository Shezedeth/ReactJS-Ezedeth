import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Modelos Nike" />

      <ProductCard title={"Nike Vapormax Fliknit"} price={"$27000"} isRed={false} />
      <ProductCard title={"Nike Vapormax 360"} price={"$28000"} isRed={true} />
      <ProductCard title={"Nike Vapormax EVO"} price={"$28000"} isRed={true} />
      <Footer />
    </div>
  );
}

export default App;
