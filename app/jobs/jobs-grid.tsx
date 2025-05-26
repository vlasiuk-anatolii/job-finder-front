"use client";

import { IJob } from "./interfaces/job.interface";
import { Grid } from "@mui/material";
import Job from "./job";

interface JobGridProps {
	jobs: IJob[];
}

export default function JobsGrid({ jobs }: JobGridProps) {
	return (
		<Grid
			container
			spacing={3}
			sx={{ height: "85vh", overflowY: "scroll" }}
		>
			{jobs.map((job) => (
				<Grid key={job.job_id} size={{ xs: 12, sm: 6, lg: 4 }}>
					<Job job={job} />
				</Grid>
			))}
		</Grid>
	);
}
