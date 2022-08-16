import React, {Component} from 'react'
import { render } from 'react-dom';
import ProfileCard from './components/ProfileCard'

class App extends Component {
  constructor() {
  supper();

  this.handleClick=this.handleClick.Click.bind(this)

  this.state = {
    writers: {
      loading:false,
      list:[]
    }
  }

  thishandleClick(){
    this.setState({
      writers:{
        loading:true,
      }
    })

setTimeout(async() => {
  let resp =await("/writer.json");
  let result =await resp.json()
})

    this.setState({
      writers: {
        loading: false,
        list:result
      }
    })


  }

  }
render(){
  const{
    writers: { loading, list }
  } =this.state;
}

if(loading) {
  return (
    <div>
      <h1>writers profile</h1>
      <div className='container'>
        <div className='card action'>
        <p className='infotext'> loading</p>
       
        </div>          
     
    </div>
    </div>
  )
  
}
}

export default App