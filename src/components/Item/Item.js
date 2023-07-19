import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, insigne, name, img, price, category, stock}) => {
    return (
        <div className="cards">
        <article className="cards">
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
                <section>
                <p>
                    ${price}
                </p>
                <p>
                    {stock}
                </p>
                <footer>
                    <Link to={`/item/${id}`}>ver detalles</Link>
                </footer>
            </section>
            </header>
        </article>
        </div>
    )
}

export default Item