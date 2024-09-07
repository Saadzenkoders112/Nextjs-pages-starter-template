import React from "react";
import {
  Field,
  FormikErrors,
  FormikValues,
  useFormikContext,
} from "formik";
import { Options, Languages, Rank } from "@/Data/personalDetailsData";

interface PersonalDetailsProps {
  errors: FormikErrors<FormikValues>;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ errors }) => {
  const { values, setFieldValue } = useFormikContext<FormikValues>();

  // FUNCTION FOR HAND>LING FILE INPUT
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      setFieldValue("file", e.currentTarget.files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-2xlw font-semibold">Basic Information</div>
      <div className="flex flex-col gap-2">
        <p className="text-slate-500">Upload your resume</p>
        {/* FILE UPLOAD DIV */}
        <div className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg p-2">
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {!errors.file && (
                  <p className="text-slate-500">{values.file?.name}</p>
                )}
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
        {errors.file && typeof errors.file === "string" ? (
          <p className="text-xs text-red-500">{errors.file}</p>
        ) : null}
      </div>
      <div className="text-slate-500 flex flex-wrap gap-2 md:flex-col md:items-center">
        Or Complete Your Profile <p className="text-green-500">Manually</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-2 w-96">
          <label className="text-sm relative text-slate-500" htmlFor="password">
            Full name
            <p className="absolute top-0 right-0 rounded-full text-red-500">
              *
            </p>
          </label>
          <Field
            className="input_field"
            type="text"
            name="full_name"
            placeholder="Enter your name"
          />
          {errors.full_name && typeof errors.full_name === "string" ? (
            <p className="text-xs text-red-500">{errors.full_name}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label className="text-sm text-slate-500" htmlFor="password">
            Age (optional)
          </label>
          <Field
            className="input_field"
            type="number"
            name="age"
            placeholder="Enter Age"
          />
          {errors.age && typeof errors.age === "string" ? (
            <p className="text-xs text-red-500">{errors.age}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label className="text-sm relative text-slate-500" htmlFor="password">
            Branch of service
            <p className="absolute top-0 right-0 rounded-full text-red-500 ">
              *
            </p>
          </label>
          <Field
            className="input_field"
            as="select"
            name="service"
            placeholder="Select..."
          >
            {Options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Field>
          {errors.service && typeof errors.service === "string" ? (
            <p className="text-xs text-red-500">{errors.service}</p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-2 w-96">
          <label className="text-sm relative text-slate-500" htmlFor="password">
            Rank
            <p className="absolute top-0 right-0 rounded-full text-red-500 ">
              *
            </p>
          </label>
          <Field
            className="input_field"
            as="select"
            name="rank"
            placeholder="Select..."
          >
            {Rank?.map((rank, index) => (
              <option key={index} value={rank}>
                {rank}
              </option>
            ))}
          </Field>
          {errors.rank && typeof errors.rank === "string" ? (
            <p className="text-xs text-red-500">{errors.rank}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label className="text-sm relative text-slate-500" htmlFor="password">
            Languages
            <p className="absolute top-0 right-0 rounded-full text-red-500 ">
              *
            </p>
          </label>
          <Field
            className="input_field"
            as="select"
            name="language"
            placeholder="Select"
          >
            {Languages?.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </Field>
          {errors.language && typeof errors.language === "string" ? (
            <p className="text-xs text-red-500">{errors.language}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
