const init =""

const InputReducer=(state=init,action)=> {
    if(action.type==='SET_INPUT') {
        return state=action.payload
    }else return state
}

export default InputReducer