import React from 'react';
import ReactDom from 'react-dom/client';
var root = ReactDom.createRoot(document.getElementById("root"))

//Class component içerisinde state yapısı kullanılır
//function component içinde state yapısı kullanulmıyor hooks olmadan

class NewItem extends React.Component {
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            error: ''
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();
        if (item) {
            e.target.elements.txtItem.value = ""
            const error = this.props.addItem(item)
            this.setState({
                error: error
            })
        } else {
            console.log("Boş");
        }
    }
    render() {
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group">
                        <input className="form-control" name="txtItem" type="text" />
                        <button className="btn btn-success btn-sm" type="submit">Ekle</button>
                    </div>
                </form>
            </div>

        )
    }
}



//main component
function TodoList(props) {
    return (
        <div>
            <ul className="list-group">
                {
                    props.items.map((item, index) => <TodoItem key={index} item={item} deleteItems={props.deleteItems} />)
                }
            </ul>
            {
                props.items.length > 0 ?
                <p>
                    <button className="btn btn-outline-danger mt-3 float-end" onClick={props.clear}>Temizle</button>
                </p>
                :
                <div className="alert alert-warning">Herhangi bir görev yok</div>
            }


        </div>
    )
}


//child component
function TodoItem(props) {
    return (
        <li className="list-group-item">
            {props.item}
            <button className="btn btn-danger btn-sm float-end" onClick={() => { props.deleteItems(props.item) }}>X</button>
        </li>
    )
}


//child Component
function Header(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}


//Main components
class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.clearItems = this.clearItems.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItems = this.deleteItems.bind(this)
        this.state = {
            items: ["1", "2", "3"]
        }
    }
    deleteItems(item) {
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i;
            })
            return {
                items: arr
            }
        })
    }
    clearItems() {
        this.setState({
            items: []
        })
    }
    addItem(item) {
        if (!item) {
            return 'Lütfen eleman gir'
        } else if (this.state.items.indexOf(item) > -1) {
            return 'Bu eleman mevcut '
        }
        this.setState((prevState) => {
            return { items: prevState.items.concat(item) }
        })
    }

    render() {
        const data = {
            title: "React App",
            description: "Ömercan kara",
        }
        return (
            <div className="container my-3">
                <div className="card">
                    <div className="card-header">
                        <Header title={data.title} description={data.description} />
                    </div>
                    <div className="card-body">
                        <TodoList items={this.state.items} clear={this.clearItems} deleteItems={this.deleteItems} />

                    </div>
                    <div className="card-footer">
                        <NewItem addItem={this.addItem} />
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        const json = localStorage.getItem("items")
        const items = JSON.parse(json)
        if (items) {
            this.setState({
                items: items
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.items.length != this.state.items.length) {
            const json_string = JSON.stringify(this.state.items)
            localStorage.setItem("items", json_string)
        }
    }
}



root.render(<TodoApp />)