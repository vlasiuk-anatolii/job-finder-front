import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IJob } from "@/app/jobs/interfaces/job.interface";

interface UserState {
	username: string | null;
	desiredJobTitle: string;
	aboutMe: string;
	likedJobs: IJob[];
}

const initialState: UserState = {
	username: null,
	desiredJobTitle: "",
	aboutMe: "",
	likedJobs: [],
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUsername(state, action: PayloadAction<string>) {
			state.username = action.payload;
		},
		setDesiredJobTitle(state, action: PayloadAction<string>) {
			state.desiredJobTitle = action.payload;
		},
		setAboutMe(state, action: PayloadAction<string>) {
			state.aboutMe = action.payload;
		},
		addToLikedJobs(state, action: PayloadAction<IJob>) {
			const exists = state.likedJobs.some(
				(job) => job.job_id === action.payload.job_id
			);
			if (!exists) {
				state.likedJobs.push(action.payload);
			}
		},
		removeFromLikedJobs(state, action: PayloadAction<string>) {
			state.likedJobs = state.likedJobs.filter(
				(job) => job.job_id !== action.payload
			);
		},
		clearLikedJobs(state) {
			state.likedJobs = [];
		},
	},
});

export const {
	setUsername,
	setDesiredJobTitle,
	setAboutMe,
	addToLikedJobs,
	removeFromLikedJobs,
	clearLikedJobs,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
