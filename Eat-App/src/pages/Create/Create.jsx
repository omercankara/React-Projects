import React, { useEffect, useRef, useState } from 'react'
import "./Create.css"
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'



function Create() {
  const [baslik, setBaslik] = useState('')
  const [aciklama, setAciklama] = useState('')
  const [hazirlanisi, setHazirlanisİ] = useState('')
  const [malzeme, setMalzeme] = useState('')
  const [malzemeler, setMalzemeler] = useState([])
  const [resim, setResim] = useState('')
  const [url, setUrl] = useState('')
  const malzemeInput = useRef(null)
  const { color,mode } = useContext(ThemeContext)
  const navigate = useNavigate()

  const { postData, data } = useFetch("http://localhost:3000/tarifler", "POST")


  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ baslik, aciklama, malzemeler, hazirlanisi, resim, url })
    console.log(data)

  }

  useEffect(() => {
    if (data) {
      navigate("/")
    }
  }, [data, navigate])


  const handleAddMalzeme = (e) => {
    e.preventDefault()
    const item = malzeme.trim()
    if (item && !malzemeler.includes(item)) { //malzeme yoksa
      setMalzemeler(prevItems => [...prevItems, item]) //önceki elemanların içine ekle
    }
    setMalzeme('')
    malzemeInput.current.focus()
    malzemeInput.current.valu = ""
  }

  return (
    <div className={`text-${mode==="dark" ? "light" : "dark"} border-${mode==="dark" ? "light" : "dark"}}`}>
      
        <h2>Yeni Tarif Ekle</h2>
        <form onSubmit={handleSubmit}>

          <div className='mb-3'>
            <label htmlFor="baslik" className="form-label">Başlık</label>
            <input type="text" onChange={(e) => setBaslik(e.target.value)} name="baslik" id='baslik' className='form-control' />
          </div>


          <div className='mb-3'>
            <label htmlFor="aciklama" className="form-label">Açıklama</label>
            <input type="text" onChange={(e) => setAciklama(e.target.value)} name="aciklama" id='aciklama' className='form-control' />
          </div>


          <div className="mb-3">
            <label htmlFor='malzemeler'>
              Malzemeler
              <ul>
                {malzemeler.map(item => <li key={item}  >{item} </li>)}
              </ul>
            </label>

            <div className="input-group">
              <input ref={malzemeInput} type="text" name='malzeme' onChange={(e) => setMalzeme(e.target.value)} className='form-control' />
              <button onClick={handleAddMalzeme} type='button' className='btn btn-secondary'>+</button>
            </div>

          </div>


          <div className='mb-3'>
            <label htmlFor="İ" className="form-label">Hazırlanış</label>
            <textarea type="text" onChange={(e) => setHazirlanisİ(e.target.value)} name="hazirlanisİ" id='hazirlanisİ' className='form-control' />
          </div>


          <div className='mb-3'>
            <label htmlFor="resim" className="form-label">Resim</label>
            <input type="text" onChange={(e) => setResim(e.target.value)} name="resim" id='resim' className='form-control' />
          </div>


          <div className='mb-3'>
            <label htmlFor="url" className="form-label">Url</label>
            <input type="text" onChange={(e) => setUrl(e.target.value)} name="url" id='url' className='form-control' />
          </div>


          <button type='submit' className={`btn btn-${color}`}>Ekle</button>
        </form>

      </div>
 
  )
}


export default Create