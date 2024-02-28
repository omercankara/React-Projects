// import { Component } from "react"


// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 1
//     }
//   }
//   render() {
//     return (
//       <div>
//         <p>Buttona {this.state.count}  Kez tıklandı</p>
//         <button onClick={() => this.setState({count:this.state.count +1})}>İncrement</button>
//       </div>
//     )
//   }
// }



import { useState,useEffect } from "react"
function App(props) {
    //1.parametre verinin kendisi 2.parametre güncelleme yapacak method
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState(props.text)


    //Component yüklendiğinde çalışır didmount karsılıgı
    useEffect(() => {
        console.log("component did mount")
    },[])

    useEffect(() => { //count değerini dinlemeye alır
        console.log(count)
    },[count])
  
    return (
        <div>
            <p>Buttona {count}  Kez tıklandı</p>
            <p>{text}</p>
            <button onClick={() => setCount(count + 1)}>İncrement</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

App.defaultProps = {
    count:8,
    text:'Ömercan'
}

export default App


