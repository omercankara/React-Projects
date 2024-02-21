import ProductList from './productList';
import Header from "./Header"
import NewProduct from './newProduct';
import React from 'react';
import SelectedProductList from './selectedProductList';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.selectProduct = this.selectProduct.bind(this)
        this.saveProduct = this.saveProduct.bind(this)
        this.DeleteProduct = this.DeleteProduct.bind(this)
        this.state = {
            products: [
                {
                    name: "iphone 15",
                    price: 50000,
                    img: "1.jpg"
                },
                {
                    name: "iphone 16",
                    price: 60000,
                    img: "2.jpg"
                },
                {
                    name: "iphone 17",
                    price: 60000,
                    img: "3.jpg"
                },
            ],
            selectedProducts: [

            ]
        }
    }


    DeleteProduct(product) {
        this.setState(() => {
            const index = this.state.selectedProducts.findIndex(p => p.product.name == product.name)
            if (index > -1) {
                this.state.selectedProducts.splice(index, 1) //index numarasından itibaren 1 elemanı sil
                return {
                    selectedProducts: this.state.selectedProducts
                }
            }
        })
    }

    componentDidMount() {
        const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'))
        if(selectedProducts){
            this.setState({
                selectedProducts:selectedProducts
            })
        }
    }
    componentDidUpdate() {
        const json_string = JSON.stringify(this.state.selectedProducts)
        localStorage.setItem("selectedProducts", json_string)
    }
    selectProduct(product) {
        this.setState((prevState) => {
            const index = this.state.selectedProducts.findIndex(p => p.product.name == product.name)
            //mevcut eleman var ise ilgili elemanın index numarasından countını arttır
            if (index > -1) {
                const updated_list = this.state.selectedProducts.map(item => {
                    if (item.product.name == product.name) {
                        item.count += 1;
                    }
                    return item
                })
                return {
                    selectedProducts: updated_list
                }
            }
            const prd = {
                count: 1,
                product: product
            }
            return { selectedProducts: prevState.selectedProducts.concat(prd) }
        })
    }

    saveProduct(product) {
        this.setState((prevState) => {
            return { products: prevState.products.concat(product) }
        })
    }

    render() {
        return (
            <div className='container mt-3'>
                <Header selectedProducts={this.state.selectedProducts} />
                <div className="row mt-3">
                    <div className="col-4">
                        <NewProduct saveProduct={this.saveProduct} />
                    </div>
                    <div className="col-4">
                        <ProductList selectProduct={this.selectProduct} products={this.state.products} />
                    </div>
                    <div className="col-4">
                        <SelectedProductList products={this.state.selectedProducts} DeleteProduct={this.DeleteProduct}></SelectedProductList>
                    </div>
                </div>
            </div>
        );
    }
}

export default App