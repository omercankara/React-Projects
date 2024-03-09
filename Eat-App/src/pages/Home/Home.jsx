import React from 'react'
import "./home.css"
import ProductCard from '../../layouts/ProductCard'
import useFetch from '../../hooks/useFetch'


function Home() {
  const { data: tarifler, isLoading,error } = useFetch("http://localhost:3000/tarifler")
  return (
    <div className="row mt-3">
      {isLoading && <div className='alert alert-warning'>İçerik Yükleniyor</div> }
      {error && <div className='alert alert-danger'>{error}</div>}
      {
        tarifler && tarifler.map(tarif => (
          <ProductCard key={tarif.id} tarif={tarif} />
        ))
      }
    </div>
  )
}


export default Home