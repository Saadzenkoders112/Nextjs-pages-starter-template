import * as Yup from "yup";

const SUPPORTED_FORMATS = ["png", "jpg", "jpeg"];

const fileSchema = Yup.object({
  url: Yup.string().required("File is required"),
  format: Yup.mixed().test("fileFormat", "Unsupported Format", (value) => {
    if (typeof value == "string") {
      const fileExtension = value.split(".")[1];
      return SUPPORTED_FORMATS.includes(fileExtension ?? "");
    }
    return false;
  }),
});

export const personalDetailsSchema = Yup.object().shape({
  file: fileSchema,
  age: Yup.number()
    .min(18, "Age must be atleast 18")
    .max(100, "Age must not exceed 100"),
  full_name: Yup.string().required("Name is required"),
  service: Yup.string().required("Service is required"),
  rank: Yup.string().required("Rank is required"),
  language: Yup.string().required("Language is required"),
});
