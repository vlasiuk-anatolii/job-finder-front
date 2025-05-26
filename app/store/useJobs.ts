import { useAppDispatch, useAppSelector } from './hooks';
import {
  fetchJobs,
  fetchDatailsJob
} from './slices/jobsSlice';
import { useCallback } from 'react';

export const useJobs = () => {
  const dispatch = useAppDispatch();

  const jobs = useAppSelector((state) => state.jobs.searchResults);
  const loading = useAppSelector((state) => state.jobs.loading);
  const error = useAppSelector((state) => state.jobs.error);
  const detailsJob = useAppSelector((state) => state.jobs.detailsJob);

  const loadJobs = useCallback((query: string) => {
    return dispatch(fetchJobs(query)).unwrap();
  }, [dispatch]);

  const loadDeatilsJob = useCallback((jobId: string) => {
   return dispatch(fetchDatailsJob(jobId)).unwrap();
  }, [dispatch]);
  

  return {
    jobs,
    loading,
    error,
    detailsJob,
    loadJobs,
    loadDeatilsJob
  };
};
