export const initialState = {
    todos: [
      
    ],
};


const reducer = (state, action) => {
    console.log(action)

    switch(action.type ) {
        case "ADD_TODO":
       return {
        ...state,
        todos: [action.payload, ...state.todos ]
       };


       case "COMPLATE_TODO":
        return {
         ...state,
         todos: state.todos.map(todo => {
            if(todo.id !== action.payload){
                return todo;
            }

            return {
                ...todo,
                isComplated: !todo.isComplated,
            };
         })
        };

             default: 
             return {
                ...state,
             };

    };
};

export default reducer;