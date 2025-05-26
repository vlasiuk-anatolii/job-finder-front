"use client";

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateProfileModal from "./create-profile-modal";
import { useState } from "react";

export default function CreateProfileFab() {
    const [modalVisible, setModalVisible] = useState(false);
	
	const openModal = () => setModalVisible(true);
	const closeModal = () => setModalVisible(false);

	return (
		<> 
            <CreateProfileModal open={modalVisible} onClose={closeModal} />
			<div className="absolute left-10 bottom-10">
				<Fab color="primary" onClick={openModal}>
					<AddIcon />
				</Fab>
			</div>
		</>
	);
}