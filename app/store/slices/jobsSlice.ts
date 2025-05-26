import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CustomError } from "@/app/common/utils/fetch";
import { IJob } from "@/app/jobs/interfaces/job.interface";
import {
	API_URL,
	RAPID_API_HOST,
	RAPID_API_KEY,
} from "@/app/common/constants/api";
import axios from "axios";

interface JobsState {
	detailsJob: IJob;
	searchResults: IJob[];
	loading: boolean;
	error: string | null;
}

const initialState: JobsState = {
	detailsJob: {} as IJob,
	searchResults: [],
	loading: false,
	error: null,
};

export const fetchJobs = createAsyncThunk(
	"jobs/fetchJobs",
	async (query: string, thunkAPI) => {
		try {
			const fetchUrl = `${API_URL}/search?query=${query}`;
			const options = {
				method: "GET",
				url: `${fetchUrl}`,

				headers: {
					"x-rapidapi-key": `${RAPID_API_KEY}`,
					"x-rapidapi-host": `${RAPID_API_HOST}`,
				},
			};
			const response = await axios.request(options);

			if (response.status < 200 || response.status >= 300) {
				throw new Error(
					`Error ${response.status}: ${response.statusText}`
				);
			}
			const resultJobs = await response.data.data;
			return resultJobs;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error instanceof Error
					? error.message
					: "An unknown error occurred"
			);
		}
	}
);

export const fetchDatailsJob = createAsyncThunk(
	"posts/fetchDatailsJob",
	async (jobId: string, thunkAPI) => {
		try {
			const fetchUrl = `${API_URL}/job-details?job_id=${jobId}`;
			const options = {
				method: "GET",
				url: `${fetchUrl}`,

				headers: {
					"x-rapidapi-key": `${RAPID_API_KEY}`,
					"x-rapidapi-host": `${RAPID_API_HOST}`,
				},
			};
			const response = await axios.request(options);

			if (response.status < 200 || response.status >= 300) {
				throw new Error(
					`Error ${response.status}: ${response.statusText}`
				);
			}
			const resultJob = await response.data.data[0];
			return resultJob;
		} catch (err) {
			return thunkAPI.rejectWithValue(
				err instanceof Error ? err.message : "An unknown error occurred"
			);
		}
	}
);
			

const jobsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchJobs.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				fetchJobs.fulfilled,
				(state, action: PayloadAction<IJob[] | CustomError>) => {
					state.loading = false;
					if (Array.isArray(action.payload)) {
						state.searchResults = action.payload;
					} else {
						state.error =
							action.payload.message || "Failed to load";
					}
				}
			)
			.addCase(fetchJobs.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Failed to load";
			})
			
			.addCase(fetchDatailsJob.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchDatailsJob.fulfilled,
				(state, action: PayloadAction<IJob>) => {
					state.loading = false;
					state.detailsJob = action.payload;
				}
			)
			.addCase(fetchDatailsJob.rejected, (state, action) => {
				state.loading = false;
				state.error =
					(action.payload as string) || "Failed to get deatils job";
				state.detailsJob = {} as IJob;
			});
	},
});

export const jobsReducer = jobsSlice.reducer;
