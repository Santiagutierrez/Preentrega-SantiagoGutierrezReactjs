import ItemCount from "../CartWidget/itemCount"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article>
            <header>
                <picture>
                    <img src={img} alt={name}/>
                </picture>
                <h2>
                    {name}
                </h2>
            </header>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada ')} />
            </footer>
        </article>
    )
}

export default ItemDetail