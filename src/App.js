import React from 'react';
import './App.css';
import {connect} from 'react-redux'

function App(props) {
  console.log(props.list)
  return (
    <div className="App">
      <h1>Daily Todo Lists</h1>
      <div className="add-task">
        <input type="text" placeHolder="Add your todo" onChange={(e)=>props.inputValue(e.target.value)}/>
        <button onClick={()=>props.add(props.input)} className="add-btn" ><i className="fas fa-plus"/></button>
      </div>
      {props.list.map(el=>
      
        <div className="tasks" style={{backgroundColor:!(props.list.indexOf(el)%2)?'rgb(42, 187, 156)':'white'}}>
          
         <div onClick={()=>props.complete(el.id)}> {el.complete ? <i className="fas fa-check-circle"/>:<i className="fas fa-circle" style={{color:props.list.indexOf(el)%2?'rgb(42, 187, 156)':'white'}}/>}</div>
<h2 style={{textDecoration:el.complete?"line-through":"none",color:props.list.indexOf(el)%2?'rgb(42, 187, 156)':'white'}}>{el.task}</h2>

<button className="edit-btn" onClick={()=>props.edit(el.id)} ><i class="far fa-edit"></i></button>
<button className="delete-btn"onClick={()=>props.delete(el.id)}><i class="far fa-trash-alt"></i></button>
</div>
        )}
    </div>
  );
}


const mapDispatchToProps= dispatch =>{
  return {
    inputValue:(input)=> dispatch({type:'SET_INPUT',payload:input}),
    add: (task) =>  dispatch({type:'ADD',payload:task}),
    edit: (id)=>dispatch({type:"EDIT",payload:id}),
    delete: (id)=>dispatch ({type:'DELETE',payload:id}),
    complete: (id)=>dispatch ({type:'COMPLETE',payload:id})
   
  }
}
const mapStateToProps=(state) =>{
  return {
    input:state.input,
    list:state.list
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
