import ProductTable from "../product-table/product-table.component.jsx";
import SearchBar from "../search-bar/search-bar.component.jsx";
import { useState } from "react";

const FilterableProductTable = ({ products }) => {
  const [searchString, setSearchString] = useState("");
  const [checkboxState, setCheckboxState] = useState(false);

  const tableStyle = {
    marginLeft: "40px",
  };

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchString(searchFieldString);
  };

  const onCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setCheckboxState(isChecked);
  };

  const getFilteredProducts = (products) => {
    return products.filter((p) => {
      const { name, stocked } = p;

      if (
        checkboxState &&
        searchString &&
        stocked &&
        name.toLowerCase().includes(searchString)
      )
        return p;

      if (
        !checkboxState &&
        searchString &&
        name.toLowerCase().includes(searchString)
      )
        return p;

      if (checkboxState && stocked && !searchString) return p;

      if (!checkboxState && !searchString) return p;
    });
  };

  return (
    <div style={tableStyle}>
      <SearchBar
        onCheckboxChangeHander={onCheckboxChange}
        onSearchChangeHandler={onSearchChange}
      />
      <ProductTable products={getFilteredProducts(products)} />
    </div>
  );
};

export default FilterableProductTable;
