import styles from "./styles.module.css"
import TasksForm from "./TasksForm/TasksForm";
import TasksList from "./TasksList/TasksList";
import SortSelect from "./SortSelect/SortSelect";
import MyModal from "../../../components/MyModal/MyModal";
import {useState} from "react";

const Tasks = () => {
	const [modal, setModal] = useState(false);
	return (
		<div className={styles.tasksWrap}>
			<MyModal modal={modal} setModal={setModal}>
				<TasksForm modal={modal} setModal={setModal}/>
			</MyModal>
			<SortSelect setModal={setModal}/>
			<TasksList />
		</div>
	);
};

export default Tasks;