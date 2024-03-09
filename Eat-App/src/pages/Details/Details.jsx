import React, { useContext } from 'react'
import "./Details.css"
import { useParams } from 'react-router-dom';
import { ThemeContext } from "../../Context/ThemeContext"
import useFetch from '../../hooks/useFetch'

function Details() {
  const { id } = useParams(); // url den id parametresini al
  const { mode, color } = useContext(ThemeContext)
  const url = "http://localhost:3000/tarifler/" + id

  const { data: tarif, isLoading } = useFetch(url)
  return (
    <div className={`text-${mode==="dark" ? "light" : "dark"} border-${mode==="dark" ? "light" : "dark"}}`}>
      <div className='row mt-3'>
        {isLoading && <div className='alert alert-warning'>İçerik Yükleniyor</div>}
        {
          tarif && (
            <>
              <div className="col-4">
                <img alt="resim" className='img-fluid rounded' src={`/img/${tarif.resim}`} />
                <hr />
              </div>

              <div className="col-8">
                <h5>
                  {tarif.baslik}
                </h5>
                <p>{tarif.aciklama}</p>
                <ul>{
                  tarif.malzemeler.map(malzeme => (
                    <li key={malzeme}>{malzeme}</li>
                  ))
                }
                </ul>
              </div>

              <div className="col-12 mt-3">
                <p>{tarif.hazirlanisi}</p>
                <a className={`btn btn-${color}`} href={tarif.url}>Tarifi İncele</a>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Details
