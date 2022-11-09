import ProductTable from "../product-table/product-table.component.jsx";
import SearchBar from "../search-bar/search-bar.component.jsx";

const FilterableProductTable = ({ products }) => {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
};

export default FilterableProductTable;
