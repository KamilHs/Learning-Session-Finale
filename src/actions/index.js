export const ADD_BUTTON_PRESSED = "ADD_BUTTON_PRESSED";
export const TODO_STATUS_CHANGE = "TODO_STATUS_CHANGE";
export const INPUT_VALUE_CHANGE = "INPUT_VALUE_CHANGE";



export const addButtonPressed = (title) => {        
    return {
        type: ADD_BUTTON_PRESSED,
        payload: {
            title,
            done:false
        }
    }
}


export const inputValueChange = (value) => ({
    type: INPUT_VALUE_CHANGE,
    payload: {
        value,
    }
})

export const todoStatusChange = (index)=>({
    type:TODO_STATUS_CHANGE,
    payload:{
        index,
    }
})