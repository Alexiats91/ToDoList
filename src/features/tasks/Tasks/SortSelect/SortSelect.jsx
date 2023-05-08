import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeSortOption, deleteAllCompleted, selectSort} from "../../tasksSlice";

const SortSelect = ({setModal}) => {
	const sortOption = useSelector(state => state.tasksReducer.sortOption);
	const dispatch = useDispatch();
	const selectOption = (e) => {
		dispatch( changeSortOption({ sortOption: e.target.value }));
		dispatch( selectSort({sortOption: e.target.value } ) );
	}
	return (<div className={styles.wrap}>
			<div className={styles.buttons}>
				<button className={styles.addTaskButton} onClick={()=>setModal(true)}>Add task</button>
				<button className={styles.deleteCompletedTask} onClick={() => dispatch(deleteAllCompleted())}>Delete all completed</button>
			</div>
			<select className={styles.select} value={sortOption} onChange={selectOption} name="sortSelect">
				<option disabled>Sort by:</option>
				<option value='date'>Date</option>
				<option value='notCompletedFirst'>Not completed first</option>
				<option value='completedFirst'>Completed first</option>
				<option value='onlyCompleted'>Only completed</option>
				<option value='onlyNotCompleted'>Only not completed</option>
			</select>
		</div>
	);
};

export default SortSelect;