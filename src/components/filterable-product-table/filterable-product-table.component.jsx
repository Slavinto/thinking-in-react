import ProductTable from "../product-table/product-table.component.jsx";
import SearchBar from "../search-bar/search-bar.component.jsx";

const FilterableProductTable = () => {
    return (
        <div>
            <SearchBar />
            <ProductTable />
        </div>
    )
}

export default FilterableProductTable;