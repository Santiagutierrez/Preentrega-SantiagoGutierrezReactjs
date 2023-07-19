import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        <div className="cards"> {/* Aplica la clase "cards" aquí */}
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