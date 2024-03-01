import React, {useContext, useState} from 'react'
import { UsersContext } from '../context/usersContext'
import { AlertContext } from '../context/alertContext'


const Search = () => {
    const [keyword, setKeyword] = useState('')
    const {searchUsers,clearUsers}  = useContext(UsersContext)
    const {displayAlert} =  useContext(AlertContext)
    const onChange = (e) => {
        setKeyword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (keyword === '') {
            displayAlert('Anahtar Kelime Giriniz', 'warning')
        } else {
            searchUsers(keyword)
            setKeyword('')
        }
    }

    return (
        <div className='container p-0 '>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input onChange={onChange} type="text" name="" className='form-control' placeholder='Anahtar kelime' id="" />
                    <button className='btn btn-primary' type="submit">Ara</button>
                </div>
            </form>
            <button onClick={clearUsers} className='btn btn-outline-danger mt-2 w-100'>Sonuçları Temizle</button>
        </div>
    )
}

export default Search