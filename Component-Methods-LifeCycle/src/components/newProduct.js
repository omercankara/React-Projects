import React from 'react'
class NewProduct extends React.Component {
    saveProduct = (event) => {
        event.preventDefault()
        const name = event.target.elements.p_name.value
        const price = event.target.elements.p_price.value
        const img = event.target.elements.p_image.value
        const product = {
            name: name,
            price: price,
            img:img
        }
        this.props.saveProduct(product)
    }
    render() {
        return (
            <form className='card card-body mb-3' onSubmit={this.saveProduct}>
                <div className="mb-3">
                    <label htmlFor='p_name'>Name</label>
                    <input className='form-control' type="text" name="p_name" id="p_name" />
                </div>
                <div className="mb-3">
                    <label htmlFor='p_price'>Price</label>
                    <input className='form-control' type="text" name="p_price" id="p_price" />
                </div>
                <div className="mb-3">
                    <label htmlFor='p_image'>İmage</label>
                    <input className='form-control' type="text" name="p_image" id="p_image" />
                </div>
                <button className='btn btn-primary' type="submit">Ürün Ekle</button>
            </form>
        );
    }
}


export default NewProduct