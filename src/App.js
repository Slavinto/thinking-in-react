import FilterableProductTable from "./components/filterable-product-table/filterable-product-table.component";
import { PRODUCTS } from "./data/products.data.js";

const App = () => {
  return (
    <div>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
};

export default App;
