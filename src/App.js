import React from 'react';
import './App.css';
import {connect} from 'react-redux';



const mapStateToProps=(state)=>{
  return{
    age:state.age
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onAgeUp: ()=>dispatch({type:'AGE_UP'}),
    onAgeDown: ()=>dispatch({type:'AGE_DOWN'})
  }
}

class App extends React.Component{

  render(){
    return(
      <div className='App'>
        
        <h1>{this.props.age}</h1>
        <br />
        <button onClick={this.props.onAgeUp}>Increase</button>
        <button onClick={this.props.onAgeDown}>Decrease</button>
        
      </div>
    )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
