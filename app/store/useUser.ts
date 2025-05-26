import { useAppDispatch, useAppSelector } from "./hooks";
import { useCallback } from "react";
import {
	setUsername,
	setDesiredJobTitle,
	setAboutMe,
	addToLikedJobs,
	removeFromLikedJobs,
	clearLikedJobs,
} from "./slices/userSlice";
import { IJob } from "@/app/jobs/interfaces/job.interface";

export const useUser = () => {
	const dispatch = useAppDispatch();

	const username = useAppSelector((state) => state.user.username);
	const desiredJobTitle = useAppSelector((state) => state.user.desiredJobTitle);
	const aboutMe = useAppSelector((state) => state.user.aboutMe);
	const likedJobs = useAppSelector((state) => state.user.likedJobs);

	const updateUsername = useCallback((name: string) => {
		dispatch(setUsername(name));
	}, [dispatch]);

	const updateDesiredJobTitle = useCallback((title: string) => {
		dispatch(setDesiredJobTitle(title));
	}, [dispatch]);

	const updateAboutMe = useCallback((text: string) => {
		dispatch(setAboutMe(text));
	}, [dispatch]);

	const likeJob = useCallback((job: IJob) => {
		dispatch(addToLikedJobs(job));
	}, [dispatch]);

	const unlikeJob = useCallback((jobId: string) => {
		dispatch(removeFromLikedJobs(jobId));
	}, [dispatch]);

	const clearAllLiked = useCallback(() => {
		dispatch(clearLikedJobs());
	}, [dispatch]);

	return {
		username,
		desiredJobTitle,
		aboutMe,
		likedJobs,
		updateUsername,
		updateDesiredJobTitle,
		updateAboutMe,
		likeJob,
		unlikeJob,
		clearAllLiked,
	};
};
