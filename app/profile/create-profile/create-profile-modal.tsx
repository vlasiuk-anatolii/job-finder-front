"use client";

import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useUser } from "@/app/store/useUser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMemo } from "react";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface CreateProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  desiredJob: Yup.string().required("Desired job is required"),
  about: Yup.string().required("About me is required"),
});

export default function CreateProfileModal({ open, onClose }: CreateProfileModalProps) {
  const {
    username,
    desiredJobTitle,
    aboutMe,
    updateUsername,
    updateDesiredJobTitle,
    updateAboutMe,
  } = useUser();

  const initialValues = useMemo(() => ({
    name: username || "",
    desiredJob: desiredJobTitle || "",
    about: aboutMe || "",
  }), [username, desiredJobTitle, aboutMe]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      updateUsername(values.name.trim());
      updateDesiredJobTitle(values.desiredJob.trim());
      updateAboutMe(values.about.trim());
      handleClose();
    },
    enableReinitialize: true,
  });

  const handleClose = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <Typography variant="h5">Create Profile</Typography>

            <TextField
              name="name"
              label="Name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
              name="desiredJob"
              label="Desired Job"
              variant="outlined"
              value={formik.values.desiredJob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.desiredJob && Boolean(formik.errors.desiredJob)}
              helperText={formik.touched.desiredJob && formik.errors.desiredJob}
            />

            <TextField
              name="about"
              label="About Me"
              variant="outlined"
              multiline
              rows={4}
              value={formik.values.about}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.about && Boolean(formik.errors.about)}
              helperText={formik.touched.about && formik.errors.about}
            />

            <Button type="submit" variant="contained">
              Create Profile
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
