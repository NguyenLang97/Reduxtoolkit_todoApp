const initState = {
    filters: {
        search: '',
        status: 'All',
        prioriry: [],
    },
    todoList: [
        {
            id: 1,
            name: 'Learn Yoga',
            completed: false,
            prioriry: 'Medium',
        },
        {
            id: 2,
            name: 'Learn Redux',
            completed: false,
            prioriry: 'High',
        },
        {
            id: 3,
            name: 'Learn Javascript',
            completed: false,
            prioriry: 'Low',
        },
    ],
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case 'filters/searchFilterChange':
            return {
                ...state,
                filters: { ...state.filters, search: action.payload },
            };

        default:
            return state;
    }
};

export default rootReducer;
