"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Box, Card, CircularProgress, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Image } from "antd";
import { styleCard } from "@/app/common/constants/styles";
import { useJobs } from "@/app/store/useJobs";
import { JobTypographyItem } from "../job";

export default function SingleJob() {
	const { jobId } = useParams();
	const { detailsJob, loading, error, loadDeatilsJob } = useJobs();

	useEffect(() => {
		loadDeatilsJob(jobId as string);
	}, [jobId, loadDeatilsJob]);

	if (loading) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
				<CircularProgress />
			</Box>
		);
	}

	if (error) {
		return (
			<Box sx={{ textAlign: "center", mt: 4 }}>
				<Typography color="error">{error}</Typography>
			</Box>
		);
	}

	if (!detailsJob) {
		return (
			<Box sx={{ textAlign: "center", mt: 4 }}>
				<Typography>
					No details info available at the moment.
				</Typography>
			</Box>
		);
	}

	return (
		<>
			<Card className={styleCard}>
				<Grid container marginBottom={"2rem"} rowGap={3}>
					<Grid size={{ xs: 12 }} sx={{ paddingX: 2 }}>
						<Stack gap={3}>
							{detailsJob.employer_logo && (
								<Image
									src={detailsJob.employer_logo}
									width={100}
									height={100}
									sizes="100vw"
									alt="Logo of the job"
								/>
							)}
							<Typography variant="h2">
								{detailsJob.job_title}
							</Typography>
							<JobTypographyItem
								title={"Employer website"}
								payload={detailsJob.employer_website}
							/>
							<JobTypographyItem
								title={"Job publisher"}
								payload={detailsJob.job_publisher}
							/>
							<JobTypographyItem
								title={"Job employment type"}
								payload={detailsJob.job_employment_type}
							/>
							<JobTypographyItem
								title={"Job apply link"}
								payload={detailsJob.job_apply_link}
							/>
							<JobTypographyItem
								title={"Job description"}
								payload={detailsJob.job_description}
							/>
							<JobTypographyItem
								title={"Job city"}
								payload={detailsJob.job_city}
							/>
							<JobTypographyItem
								title={"Job country"}
								payload={detailsJob.job_country}
							/>
							<JobTypographyItem
								title={"Job benefits"}
								payload={detailsJob.job_benefits}
							/>
							<JobTypographyItem
								title={"Job salary"}
								payload={detailsJob.job_salary}
							/>

							{detailsJob.job_highlights?.Qualifications && (
								<>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Qualifications:
									</Typography>
									<ul>
										{detailsJob.job_highlights.Qualifications.map(
											(qualification, index) => (
												<li key={index}>
													<Typography variant="body2">
														{qualification}
													</Typography>
												</li>
											)
										)}
									</ul>
								</>
							)}
							{detailsJob.job_highlights?.Responsibilities && (
								<>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Responsibilities:
									</Typography>
									<ul>
										{detailsJob.job_highlights.Responsibilities.map(
											(responsibility, index) => (
												<li key={index}>
													<Typography variant="body2">
														{responsibility}
													</Typography>
												</li>
											)
										)}
									</ul>
								</>
							)}
						</Stack>
					</Grid>
				</Grid>
			</Card>
		</>
	);
}
