"use client";

import {
	Card,
	Stack,
} from "@mui/material";

import { styleCard } from "../common/constants/styles";

import CreateProfileModal from "./create-profile/create-profile-modal";
import { useState } from "react";
import { useUser } from "../store/useUser";
import { JobTypographyItem } from "../jobs/job";

export default function Profile() {
	const [modalVisible, setModalVisible] = useState(false);
	const closeModal = () => setModalVisible(false);
	const { username, desiredJobTitle, aboutMe } = useUser();

	return (
		<>
			<CreateProfileModal open={modalVisible} onClose={closeModal} />

			<Card
				className={styleCard}
				sx={{ height: "500px", position: "relative" }}
			>
				<Stack gap={3} height="100%" padding={2}>
					<JobTypographyItem	title={"Name"}	payload={username}/>
					<JobTypographyItem	title={"Desired Job Title"}	payload={desiredJobTitle}/>
					<JobTypographyItem	title={"About Me"}	payload={aboutMe}/>
				</Stack>
			</Card>
		</>
	);
}
