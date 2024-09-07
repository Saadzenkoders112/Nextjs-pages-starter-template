import { Field, FormikErrors, FormikValues } from "formik";
import React, { useState } from "react";

interface WorkExpriencePrrops {
  errors: FormikErrors<FormikValues>;
}

const WorkExprience: React.FC<WorkExpriencePrrops> = ({ errors }) => {
  const [careerObj, setCareerObj] = useState<object | null>({})

  return (
    <div className="flex flex-col gap-2">
      {/* WORK EXPERIENCE DIV */}
      <div className="border border-slate-300 rounded-lg p-4">
        <div className="flex justify-end">
          <button className="flex items-center justify-center text-white bg-green-500 w-[140px] p-1 gap-2 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>Add Career</button>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 w-[500px]">
            <label className="text-sm relative text-slate-500" htmlFor="career">
              Career Field
              <p className="absolute top-0 right-0 rounded-full text-red-500">
                *
              </p>
            </label>
            <Field
              className="input_field"
              type="text"
              name="career.career_field"
              placeholder="Enter career"
            />
            {errors.career_field && typeof errors.career_field === "string" ? (
              <p className="text-xs text-red-500">{errors.career_field}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2 w-[500px]">
            <label className="text-sm relative text-slate-500" htmlFor="password">
              Job title/Position
              <p className="absolute top-0 right-0 rounded-full text-red-500">
                *
              </p>
            </label>
            <Field
              className="input_field"
              type="text"
              name="career.job_title"
              placeholder="Enter job title"
            />
            {errors.job_title && typeof errors.job_title === "string" ? (
              <p className="text-xs text-red-500">{errors.job_title}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2 w-[500px]">
            <label className="text-sm relative text-slate-500" htmlFor="password">
              SKills leveraged in Career Field
              <p className="absolute top-0 right-0 rounded-full text-red-500">
                *
              </p>
            </label>
            <Field
              className="input_field"
              type="text"
              name="career.skill"
              placeholder="Enter skills"
            />
            {errors.skill && typeof errors.skill === "string" ? (
              <p className="text-xs text-red-500">{errors.skill}</p>
            ) : null}
          </div>
        </div>
      </div>


      {/* CAREER ASPIRATIONS DIV */}
      <div></div>
    </div>
  );
};

export default WorkExprience;
