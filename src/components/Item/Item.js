const Item = ({id, insigne, name, img, price, category, stock}) => {
    return (
        <article>
            <header>
                <picture>
                    <img src={img} alt={name} className="itemImage"/>
                </picture>
                <p>
                    {insigne}
                </p>
                <h2>
                    {name}
                </h2>
            </header>
            <section>
                <p>
                    ${price}
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