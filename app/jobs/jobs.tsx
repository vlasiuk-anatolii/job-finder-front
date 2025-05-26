"use client";

import { Typography, CircularProgress, Box } from "@mui/material";
import JobsGrid from "./jobs-grid";
import { SearchButton } from "./searchButton";
import { IJob } from "./interfaces/job.interface";

export default function Jobs({jobs}: {jobs: IJob[]}) {
	if (!jobs) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
				<CircularProgress />
			</Box>
		);
	}

	if (!jobs?.length) {
		return (
			<Box sx={{ textAlign: "center", mt: 4 }}>
				<Typography>No jobs available at the moment.</Typography>
			</Box>
		);
	}

	return (
		<>
			<SearchButton />
			<JobsGrid jobs={jobs} />
		</>
	);
}
