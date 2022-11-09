import ProductCategoryRow from "../product-category-row/product-category-row.component.jsx";
import ProductRow from "../product-row/product-row.component.jsx";

const ProductTable = () => {
  const productTableHeaderStyle = {
    display: "inline-block",
    width: "100px",
  };
  return (
    <div>
      <h2>
        <p>
          <span style={productTableHeaderStyle}>Name</span>
          <span style={productTableHeaderStyle}>Price</span>
        </p>
      </h2>
      <ProductCategoryRow />
      <ProductRow />
      <ProductRow />
      <ProductRow />
      <ProductCategoryRow />
      <ProductRow />
      <ProductRow />
      <ProductRow />
    </div>
  );
};

export default ProductTable;
