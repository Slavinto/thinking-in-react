const ProductRow = ({ name, price }) => {
  return (
    <tr>
      <td>
        <h4>{name}</h4>
      </td>
      <td>
        <h4>{price}</h4>
      </td>
    </tr>
  );
};
export default ProductRow;
