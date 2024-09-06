import * as Yup from "yup";

const SUPPORTED_FORMATS = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "application/pdf",
];

export const personalDetailsSchema = Yup.object().shape({
  file: Yup.mixed()
    .required("A file is required")
    .test("fileFormat", "Unsupported Format", (value) => {
      return (
        value && value instanceof File && SUPPORTED_FORMATS.includes(value.type)
      );
    }),
    full_name: Yup.string().required("Name is required"),
    service: Yup.string().required("Service is required"),
    rank: Yup.string().required("Rank is required"),
    language: Yup.string().required("Language is required")
});
