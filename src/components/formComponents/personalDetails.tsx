import React from "react";
import { ErrorMessage, Field } from "formik";
import { Options, Languages, Rank } from "@/Data/personalDetailsData";

const PersonalDetails = () => {
    console.log(ErrorMessage)
  return (
    <div className="flex flex-col gap-2">
      <div className="text-2xl font-semibold">Basic Information</div>
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
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <Field
                      className="sr-only"
                      type="file"
                      name="file-upload"
                      id="file-upload"
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
      </div>
      <div className="text-slate-500 flex flex-wrap gap-2">
        Or Complete Your Profile <p className="text-green-500">Manually</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm relative text-slate-500" htmlFor="password">
            Full name
            <p className="absolute top-0 right-0 rounded-full text-red-500">
              *
            </p>
          </label>
          <Field
            className="input_field"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage className="text-sm text-red-500" name="full_name" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-slate-500" htmlFor="password">
            Age (optional)
          </label>
          <Field
            className="input_field"
            type="number"
            name="age"
            placeholder="Enter Age"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm relative text-slate-500" htmlFor="password">
            Branch of service
            <p className="absolute top-0 right-0 rounded-full text-red-500 ">
              *
            </p>
          </label>
          <Field className="input_field" as="select" name="service" placeholder="Select...">
            {Options?.map((option) => <option value={option}>{option}</option>)}
          </Field>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm relative text-slate-500" htmlFor="password">
            Rank
            <p className="absolute top-0 right-0 rounded-full text-red-500 ">
              *
            </p>
          </label>
          <Field className="input_field" as="select" name="service" placeholder="Select...">
            {Rank?.map((rank) => <option value={rank}>{rank}</option>)}
          </Field>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm relative text-slate-500" htmlFor="password">
            Languages
            <p className="absolute top-0 right-0 rounded-full text-red-500 ">
              *
            </p>
          </label>
          <Field className="input_field" as="select" name="service" placeholder="Select">
            {Languages?.map((language) => (
              <option value={language}>{language}</option>
            ))}
          </Field>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
