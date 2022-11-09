import ProductCategoryRow from "../product-category-row/product-category-row.component.jsx";
import ProductRow from "../product-row/product-row.component.jsx";

const ProductTable = ({ products }) => {
  //   const productTableHeaderStyle = {
  //     display: "inline-block",
  //     width: "100px",
  //   };

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const rows = [];

  categories.forEach((cat) => {
    rows.push(<ProductCategoryRow key={cat} category={cat} />);
    products.forEach((product) => {
      const { category, price, name } = product;
      if (category === cat)
        rows.push(<ProductRow key={name} name={name} price={price} />);
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <td>
            <h2>Name</h2>
          </td>
          <td>
            <h2>Price</h2>
          </td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
