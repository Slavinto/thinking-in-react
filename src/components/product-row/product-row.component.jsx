const ProductRow = ({ name, price, stocked }) => {
  const productRowStyle = {
    lineHeight: "5px",
    height: "20px",
    padding: "10px",
    color: `${stocked ? "#000" : "red"}`,
  };
  return (
    <tr>
      <td style={productRowStyle}>{name}</td>
      <td style={productRowStyle}>{price}</td>
    </tr>
  );
};
export default ProductRow;
