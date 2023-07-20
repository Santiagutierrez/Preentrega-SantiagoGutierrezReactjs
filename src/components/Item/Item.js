import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, insigne, name, img, price, category, stock}) => {
    return (
        <div className="cards">
        <article className="cards">
            <header>
                <picture className="itemImage">
                    <img src={img} alt={name} className="itemImage"/>
                </picture>
                <p className="item-insigne">
                    {insigne}
                </p>
                <h2 className="item-name">
                    {name}
                </h2>
                <section className="item">
                <p>
                    ${price}
                </p>
                <p>
                    {stock}
                </p>
                <footer className="item">
                    <Link to={`/item/${id}`}>ver detalles</Link>
                </footer>
            </section>
            </header>
        </article>
        </div>
    )
}

export default Item