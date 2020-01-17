
const TaskReducer=(state=[],action)=>{
    if (action.type==="ADD"){ return state=[...state,{task:action.payload,id:Math.random(),completed:false}]}
    else  if (action.type==="DELETE"){return state= state.filter(el=> el.id!==action.payload)}
    else if (action.type==="EDIT"){
        let newTask=prompt("Edit your task title", "")
        return state.map(el => (el.id===action.payload) ? {...el,task:newTask}:el)}
    else if (action.type==="COMPLETE"){return state.map(el => (el.id===action.payload) ? {...el,complete:!el.complete}:el)}
    else return state

    
}
export default TaskReducer;