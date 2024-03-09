import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchBar() {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${keyword}`)
    }



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Search..."
                className="form-control" 
                onChange={(e) => setKeyword(e.target.value)}
                />
        </form>
    )
}


