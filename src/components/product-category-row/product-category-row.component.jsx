const ProductCategoryRow = ({ category }) => {
  const catStyle = {
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "10px",
  };
  return (
    <tr>
      <th style={catStyle} colSpan="2">
        {category}
      </th>
    </tr>
  );
};

export default ProductCategoryRow;
