import styles from "./styles.module.css"
import {useDispatch, useSelector} from "react-redux";
import { deleteTask, selectSort, toggleTaskCompleted} from "../../../tasksSlice";

const TasksItem = ({id, text, completed}) => {
	const sortOption = useSelector(state => state.tasksReducer.sortOption)
	const dispatch = useDispatch();
	const onCheckBoxChangeHandle = () => {
		dispatch(toggleTaskCompleted( {id}));
		dispatch(selectSort({sortOption}));
	}
	return (
		<div className={completed ? styles.taskItem + " " + styles.completed : styles.taskItem}>
			<input  className={styles.taskItemCheckbox} type="checkbox" checked={completed} onChange={onCheckBoxChangeHandle}/>
			<div className={styles.taskItemText}>{text}</div>
			<div className={styles.taskItemDeleteButton} onClick={() => dispatch(deleteTask( {id}))}/>
		</div>
	);
};

export default TasksItem;