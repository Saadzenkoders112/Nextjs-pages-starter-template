import * as Yup from "yup";

const SUPPORTED_FORMATS = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

// FILE SIZE OF 10MB
const FILE_SIZE = 10 * 1024 * 1024;

export const personalDetailsSchema = Yup.object().shape({
  file: Yup.mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported Format", (value) => {
      return (
        value && value instanceof File && SUPPORTED_FORMATS.includes(value.type)
      );
    })
    .test("fileSize", "File size must not exceed 10 MB", (value) => {
      return value && value instanceof File && value.size <= FILE_SIZE;
    }),
  age: Yup.number()
    .min(18, "Age must be atleast 18")
    .max(100, "Age must not exceed 100"),
  full_name: Yup.string().required("Name is required"),
  service: Yup.string().required("Service is required"),
  rank: Yup.string().required("Rank is required"),
  language: Yup.string().required("Language is required"),
});
