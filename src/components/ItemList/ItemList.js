import Item from "../Item/Item";

const ItemList = ({products}) => {
  if (!products) {
    return <p>No hay productos disponibles.</p>;
  }
  
    return (
        <div className="cards"> {/* Aplicar la clase "cards" aquí */}
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          insigne={product.insigne}
          name={product.name}
          img={product.img}
          price={product.price}
          category={product.category}
          stock={product.stock}
        />
      ))}
    </div>
    )
}

export default ItemList;