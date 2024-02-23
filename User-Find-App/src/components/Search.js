import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''

        }
    }
    onChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.keyword == '') {
            this.props.displayAlert('Anahtar Kelime Giriniz', 'danger')
        } else {
            this.props.searchUsers(this.state.keyword)
        }
    }
    render() {
        return (
            <div className='container p-0 '>
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input onChange={this.onChange} type="text" name="" className='form-control' placeholder='Anahtar kelime' id="" />
                        <button className='btn btn-primary' type="submit">Ara</button>
                    </div>
                </form>
                <button onClick={this.props.clearResult} className='btn btn-outline-danger mt-2 w-100'>Sonuçları Temizle</button>
            </div>
        )
    }
}

export default Search