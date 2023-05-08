import styles from "./styles.module.css"
import TasksItem from "./TaskItem/TasksItem";
import {useSelector} from "react-redux";

const TasksList = () => {
	const sortOption = useSelector(state => state.tasksReducer.sortOption);
	let tasks = useSelector(state => state.tasksReducer.tasks);
	if (sortOption === 'onlyCompleted'){
		tasks = tasks.filter((task) => task.completed);
	}
	else if (sortOption === 'onlyNotCompleted'){
		tasks = tasks.filter((task) => !task.completed);
	}
	return (<>
			{tasks.length
			 ? <div className={styles.tasksList}>
				 {
					 tasks.map( task => <TasksItem key={task.id} {...task}/> )
				 }
			 </div>
			 : <h2 className={styles.noTasks}>No tasks</h2> }

		</>
	);
};

export default TasksList;