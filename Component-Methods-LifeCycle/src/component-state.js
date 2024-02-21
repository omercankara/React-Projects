var root = ReactDOM.createRoot(document.getElementById("root"))
class User extends React.Component {
    constructor(props){
        super(props);
        this.changeEmail = this.changeEmail.bind(this)
        this.state = {
            name:"Ömercan",
            email:"test@mail.com",
        }
        
    }
    changeEmail(){
        this.setState({
            name:"Can",
            email:"Eda"
        })
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <button onClick={this.changeEmail}>Update</button>
            </div>
        );
    }
}


root.render(<User/>)