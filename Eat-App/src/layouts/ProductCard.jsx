import React, { useContext } from 'react'
import "../layouts/productCard.css"
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
function ProductCard({ tarif }) {
    const { color,mode } = useContext(ThemeContext)
    return (
        <div className="col-md-3">
            <div className={`card border-${mode ==="dark" ? "light" : "dark"} mb-3`} >
                <img alt="test" className='card-img-top' src={`img/${tarif.resim}`} />
                <div className="card-body">
                    <div className="card-title fw-bold">{tarif.baslik}</div>
                    <p className="aciklama card-text">
                        {tarif.aciklama}
                    </p>
                    <Link to={`/tarifler/${tarif.id}`} className={`btn btn-outline-${color}`}>Tarifi İncele</Link>
            </div>
        </div>
        </div >
    )
}


export default ProductCard