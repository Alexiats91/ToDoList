import styles from "./styles.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addTask, selectSort} from "../../tasksSlice";
import {useEffect, useRef, useState} from "react";

const TasksForm = ({modal, setModal}) => {
	const [text, setText] = useState( '' );
	const dispatch = useDispatch();
	const sortOption = useSelector(state => state.tasksReducer.sortOption)
	const addNewTask = (e) => {
		e.preventDefault();
		if( text !== '' ) {
			dispatch( addTask( { text } ) );
			dispatch( selectSort( { sortOption } ) );
			setText( '' );
			setModal( false );
		}
	};
	//використовуємо useRef та useEffect, щоб input в модульному вікні був у фокусі
	const inputRef = useRef(null);
	useEffect(() => {
		if (modal) {
			inputRef.current.focus();
		}
	}, [modal]);

	return (
		<form className={styles.tasksForm}>
			<input className={styles.tasksFormInput}
				   type="text"
				   ref={inputRef}
				   placeholder='Type text here'
				   value={text}
				   onChange={(e) => setText( e.target.value )}
			/>
			<button className={styles.tasksFormButton} onClick={addNewTask}>ADD</button>
		</form>
	);
};

export default TasksForm;