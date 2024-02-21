import React from 'react';

class SelectedProductList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.products.length == 0 ?
                        <div className='alert alert-warning'>
                            Seçilen Ürün Yok
                        </div>
                        :
                        <ol className="list-group list-group-numbered">
                            {this.props.products.map((item, index) => (
                                <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                                    <div className="ms-2 me-auto">
                                        {item.product.name}
                                    </div>

                                    <span className="badge bg-primary rounded-pill me-2">{item.count}</span>
                                    <span className="badge bg-danger rounded-pill" onClick={() => this.props.DeleteProduct(item.product)}>X</span>
                                </li>
                            ))}
                        </ol>
                }
            </div>

        );
    }
}

export default SelectedProductList;
