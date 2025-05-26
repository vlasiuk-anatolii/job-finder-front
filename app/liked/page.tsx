'use client';

import { Box, Typography } from '@mui/material';
import PostsGrid from '@/app/jobs/jobs-grid';
import { useUser } from '@/app/store/useUser';

export default function LikedJobs() {
  const { likedJobs } = useUser();

  return (
    <Box sx={{ mt: 3, px: 2 }}>
      <Typography variant="h5" gutterBottom>
        Selected vacancies
      </Typography>

      {likedJobs.length > 0 ? (
        <PostsGrid jobs={likedJobs} />
      ) : (
        <Typography variant="body1" color="text.secondary">
          You do not have any vacancies saved yet.
        </Typography>
      )}
    </Box>
  );
}
