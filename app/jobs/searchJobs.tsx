"use client";

import { useState, useEffect, useMemo } from "react";
import {
	TextField,
	CircularProgress,
	Box,
	Typography,
	Paper,
} from "@mui/material";
import { useJobs } from "../store/useJobs";
import debounce from "lodash.debounce";
import PostsGrid from "../jobs/jobs-grid";
import { useUser } from "../store/useUser";

export default function SearchJobs() {
	const { desiredJobTitle } = useUser();
	const [query, setQuery] = useState("");
	const { jobs, loadJobs } = useJobs();
	const [loading, setLoading] = useState(false);

	const debouncedSearch = useMemo(() => {
		return debounce((value: string) => {
			setLoading(true);
			loadJobs(value).finally(() => setLoading(false));
		}, 1000);
	}, [loadJobs]);

	useEffect(() => {
		if (query.trim()) {
			debouncedSearch(query);
		}

		return () => {
			debouncedSearch.cancel();
		};
	}, [query, debouncedSearch]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const hasResults = jobs && jobs.length > 0;
	const noResults = jobs && jobs.length === 0 && !loading && query.trim();
	useEffect(() => {
		if (desiredJobTitle) {
			setQuery(desiredJobTitle);
			debouncedSearch(desiredJobTitle);
		}
	}, [desiredJobTitle, debouncedSearch]);

	return (
		<Box sx={{ margin: "0 auto", p: 2 }}>
			<Paper
				elevation={2}
				sx={{
					p: 2,
					mb: 3,
					borderRadius: 2,
				}}
			>
				<TextField
					fullWidth
					label="Find Job"
					variant="outlined"
					value={query}
					onChange={handleChange}
					sx={{ mb: 1 }}
				/>
			</Paper>

			{loading && (
				<Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
					<CircularProgress />
				</Box>
			)}

			{hasResults && (
				<Box sx={{ mt: 3 }}>
					<Typography variant="subtitle1" sx={{ mb: 2 }}>
						Found {jobs.length} result
						{jobs.length !== 1 ? "s" : ""}
					</Typography>
					<PostsGrid jobs={jobs} />
				</Box>
			)}

			{noResults && (
				<Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
					<Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
						<Typography color="text.secondary">
							{`No results found for ${query}`}
						</Typography>
					</Paper>
				</Box>
			)}
		</Box>
	);
}
