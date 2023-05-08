import styles from "./styles.module.css";

const MyModal = ( { children, modal, setModal } ) => {
	return (
		<div className={ modal ? styles.myModal + " " + styles.active : styles.myModal } onClick={()=>setModal(false)}>
			<div className={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
				{ children }
			</div>
		</div>
	);
};

export default MyModal;