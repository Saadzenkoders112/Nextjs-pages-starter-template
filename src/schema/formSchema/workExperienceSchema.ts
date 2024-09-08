import * as Yup from "yup";

export const workExperienceSchema = Yup.object().shape({
    career: Yup.array().min(1, "Atleast 1 career is required"),
    industry: Yup.string().required("Industry is required"),
    job_position: Yup.string().required("Job position is required"),
    job_position_level: Yup.string().required("Position level is required"),
    job_location: Yup.string().required("Job location is required"),
  });