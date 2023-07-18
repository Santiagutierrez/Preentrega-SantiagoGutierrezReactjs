const Item = ({id, name, img, price, stock}) => {
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="itemImage"/>
            </picture>
            <section>
                <p>
                    {price}
                </p>
                <p>
                    {stock}
                </p>
                <footer>
                    <button>
                        ver detalle
                    </button>
                </footer>
            </section>
        </article>
    )
}

export default Item