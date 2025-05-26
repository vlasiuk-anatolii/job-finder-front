"use client";

import { Card, CardActionArea, IconButton, Stack, Typography } from "@mui/material";
import { IJob } from "./interfaces/job.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { styleCard } from "../common/constants/styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useUser } from "../store/useUser";

interface JobProps {
	job: Partial<IJob>;
}

export default function Job({ job }: JobProps) {
	const router = useRouter();
	const {likedJobs, likeJob, unlikeJob} = useUser();
	const liked = likedJobs.some((likedJob) => likedJob.job_id === job.job_id);
	const handleLikeToggle = () => {
		if (liked) {
			if (job.job_id) {
				unlikeJob(job.job_id);
			}
		} else {
			if (job.job_id) {
				likeJob(job as IJob);
			}
		}
	};

	const handleCardClick = () => {
		router.push(`/jobs/${job.job_id}`);
	};

	return (
		<>
			<Card
				className={styleCard}
				sx={{ height: "500px", position: "relative" }}
			>
				<IconButton onClick={handleLikeToggle} color="error">
					{liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
				</IconButton>
				<CardActionArea
					onClick={handleCardClick}
					sx={{ height: "100%" }}
				>
					<Stack gap={2} height="100%" padding={2}>
						<Typography variant="h5">{job.job_title}</Typography>
						{job.employer_logo && (
							<Image
								src={job.employer_logo}
								width={32}
								height={32}
								className="object-contain"
								alt={`Logo of the job employer: ${job.employer_name}`}
								loading="lazy"
							/>
						)}

						<JobTypographyItem
							title={"Employer website"}
							payload={job.employer_website}
						/>
						<JobTypographyItem
							title={"Job publisher"}
							payload={job.job_publisher}
						/>
						<JobTypographyItem
							title={"Job employment type"}
							payload={job.job_employment_type}
						/>
						<JobTypographyItem
							title={"Job city"}
							payload={job.job_city}
						/>
						<JobTypographyItem
							title={"Job country"}
							payload={job.job_country}
						/>
						<JobTypographyItem
							title={"job salary"}
							payload={job.job_salary}
						/>
					</Stack>
				</CardActionArea>
			</Card>
		</>
	);
}

export const JobTypographyItem = ({
	title,
	payload,
}: {
	title: string;
	payload?: string | null;
}) => (
	<Typography variant="body2" color="text.secondary">
		{`${title}: `}
		<Typography component="span" fontWeight="medium" color="text.primary">
			{payload ?? "N/A"}
		</Typography>
	</Typography>
);
