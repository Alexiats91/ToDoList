import {createSlice} from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [
            {
                id: 1,
				date: 2022,
                completed: false,
                text: "This is new task",
                disabled: true,
                example: true,
            },
            {
                id: 2,
				date: 2023,
                completed: true,
                text: "This task is done",
                disabled: true,
                example: true,
            }
        ],
		sortOption: 'date',
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks = state.tasks.filter(task => !task.hasOwnProperty("example"));
            state.tasks.push({
                id: Date.now(),
                date: Date.now(),
                completed: false,
                text: action.payload.text,
            });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },
        toggleTaskCompleted: (state, action) => {
            const toggledTask = state.tasks.find(task => task.id === action.payload.id);
            toggledTask.completed = !toggledTask.completed;
        },
        selectSort: (state, action) => {
        	switch( action.payload.sortOption ){
        		case 'date':
        			state.tasks = state.tasks.sort((a, b) => a.date - b.date);
        			break;
        		case 'notCompletedFirst':
					state.tasks = state.tasks
						.sort((a, b) => a.date - b.date)
						.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1);
        			break;
        		case 'completedFirst':
					state.tasks = state.tasks
						.sort((a, b) => a.date - b.date)
						.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? -1 : 1);
        			break;
        		default:
        			state.tasks = state.tasks.sort((a, b) => a.date - b.date);
        	}
        },
        deleteAllCompleted: (state) => {
            state.tasks = state.tasks.filter(task => !task.completed);
        },
		changeSortOption: (state, action) => {
			state.sortOption = action.payload.sortOption;
		}
    }
})

export const {addTask, deleteTask, toggleTaskCompleted, selectSort, deleteAllCompleted, changeSortOption} = tasksSlice.actions;

export default tasksSlice.reducer;
