import { Career } from "@/types/Interfaces/form-interfaces/work-exprience.interface";
import { Field, FormikErrors, FormikValues } from "formik";
import React, { ChangeEvent, useState } from "react";

interface WorkExpriencePrrops {
  errors: FormikErrors<FormikValues>;
}

const WorkExprience: React.FC<WorkExpriencePrrops> = ({ errors }) => {
  const [careerObj, setCareerObj] = useState<Career>({
    career_field: "",
    job_title: "",
    skills: [],
  });
  const [newSkill, setNewSkill] = useState<string | null>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCareerObj((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSkills = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill?.trim()) {
      setCareerObj((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* WORK EXPERIENCE DIV */}
      <div className="border border-slate-300 rounded-lg p-4">
        <div className="flex justify-end">
          <button className="flex items-center justify-center text-white bg-green-500 w-[140px] p-1 gap-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Career
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 w-[500px]">
            <label className="text-sm relative text-slate-500" htmlFor="career">
              Career Field
              <p className="absolute top-0 right-0 rounded-full text-red-500">
                *
              </p>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="career_field"
              className="input_field"
              placeholder="Enter Career"
            />
            {/* {errors.career_field && typeof errors.career_field === "string" ? (
              <p className="text-xs text-red-500">{errors.career_field}</p>
            ) : null} */}
          </div>
          <div className="flex flex-col gap-2 w-[500px]">
            <label
              className="text-sm relative text-slate-500"
              htmlFor="password"
            >
              Job title/Position
              <p className="absolute top-0 right-0 rounded-full text-red-500">
                *
              </p>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="job_title"
              className="input_field"
              placeholder="Enter job title"
            />
            {/* {errors.job_title && typeof errors.job_title === "string" ? (
              <p className="text-xs text-red-500">{errors.job_title}</p>
            ) : null} */}
          </div>
          <div className="flex flex-col gap-2 w-[500px]">
            <label
              className="text-sm relative text-slate-500"
              htmlFor="password"
            >
              SKills leveraged in Career Field
              <p className="absolute top-0 right-0 rounded-full text-red-500">
                *
              </p>
            </label>
            <input
              onChange={handleSkills}
              type="text"
              name="skills"
              className="input_field"
              placeholder="Enter skills"
            />
            <div className="flex justify-between items-center">
              <div className="p-1 flex gap-2 items-center flex-wrap">
                {careerObj.skills?.map((skill, index) => (
                  <div className="flex gap-2 items-center p-1 bg-green-500 text-white text-xs rounded-lg" key={index}>
                    <p>
                      {skill}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x cursor-pointer"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddSkill}
                className="button w-max"
              >
                Add skill
              </button>
            </div>
            {/* {errors.skill && typeof errors.skill === "string" ? (
              <p className="text-xs text-red-500">{errors.skill}</p>
              ) : null} */}
          </div>
        </div>
      </div>

      {/* CAREER ASPIRATIONS DIV */}
      <div></div>
    </div>
  );
};

export default WorkExprience;
