import { Career } from "@/types/Interfaces/form-interfaces/work-exprience.interface";
import { Field, FormikErrors, FormikValues, useFormikContext } from "formik";
import React, { ChangeEvent, useState } from "react";
import { Industry, Position } from "@/Data/workExperienceData";

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
  const [careerError, setCareerError] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | "">("");
  const [editCareerObj, setEditCareerObj] = useState<Career>({
    career_field: "",
    job_title: "",
    skills: [],
  });
  const [newEditSkill, setNewEditSkill] = useState<string | null>("");

  const { values, setFieldValue } = useFormikContext<FormikValues>();


  const handleAddCareer = () => {
    if (
      !(
        careerObj.career_field == "" ||
        careerObj.job_title == "" ||
        careerObj.skills.length == 0
      )
    ) {
      values.career.push(careerObj);
      setCareerError(null);
      setCareerObj({
        career_field: "",
        job_title: "",
        skills: [],
      });
    } else {
      setCareerError("All fields must be filled!");
    }
  };

  const handleAddChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handleEditCareer = () => {
    if (
      !(
        editCareerObj.career_field == "" ||
        editCareerObj.job_title == "" ||
        editCareerObj.skills.length == 0
      )
    ) {
      values.career[editIndex] = editCareerObj;
      setCareerError(null);
      setEditCareerObj({
        career_field: "",
        job_title: "",
        skills: [],
      });
      setIsEdit(false);
    } else {
      setCareerError("All fields must be filled!");
    }
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditCareerObj((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditSkills = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEditSkill(e.target.value);
  };

  const handleEditSkill = () => {
    if (newEditSkill?.trim()) {
      setEditCareerObj((prev) => ({
        ...prev,
        skills: [...prev.skills, newEditSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  // FUNCTIONS FOR HANDLING EDIT STATE
  const handleEdit = (index: number) => {
    setEditIndex(index);
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setEditIndex("");
    setIsEdit(false);
  };

  // FUNCTIONS TO REMOVE ADDED SKILLS
  const removeAddSkill = (skillToRemove: string) => {
    setCareerObj((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const removeEditSkill = (skillToRemove: string) => {
    setEditCareerObj((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const removeCareer = (careerToRemove: Career) => {
    const updatedCareers = values.career.filter(
      (career) => career !== careerToRemove
    );
    setFieldValue("career", updatedCareers);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* WORK EXPERIENCE DIV */}
      <div>
        <p className="text-3xl font-semibold pb-4">Work Experience</p>
        <div className="border border-slate-300 p-4 rounded-lg ">
          <div className="flex justify-end">
            <button
              onClick={handleAddCareer}
              className="flex items-center justify-center text-white bg-green-500 w-[140px] p-1 gap-2 rounded-lg"
            >
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
              <label
                className="text-sm relative text-slate-500"
                htmlFor="career"
              >
                Career Field
                <p className="absolute top-0 right-0 rounded-full text-red-500">
                  *
                </p>
              </label>
              <input
                onChange={handleAddChange}
                type="text"
                name="career_field"
                className="input_field"
                placeholder="Enter Career"
                value={careerObj.career_field}
              />
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
                onChange={handleAddChange}
                type="text"
                name="job_title"
                className="input_field"
                placeholder="Enter job title"
                value={careerObj.job_title}
              />
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
                value={newSkill || ""}
              />
              <div className="flex justify-between items-center">
                <div className="p-1 flex gap-2 items-center flex-wrap">
                  {careerObj.skills?.map((skill, index) => (
                    <div
                      className="flex gap-2 items-center p-1 text-green-500 border border-green-500 text-xs rounded-lg"
                      key={index}
                    >
                      <p>{skill}</p>
                      <svg
                        onClick={() => removeAddSkill(skill)}
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
                <div>
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="button w-max"
                  >
                    Add skill
                  </button>
                </div>
              </div>
            </div>
          </div>
          {careerError && <p className="text-xs text-red-500">{careerError}</p>}
          {errors.career && (
            <p className="text-xs text-red-500">{errors.career}</p>
          )}
        </div>
      </div>

      {values.career.length !== 0 && (
        <div className="p-2 border border-slate-300 rounded-lg w-full">
          <table className="table-auto text-left text-slate-500">
            <thead className="font-semibold">
              <tr>
                <td className="px-16 py-4">Career field</td>
                <td className="px-16 py-4">Job title</td>
                <td className="px-16 py-4">Skills</td>
              </tr>
            </thead>
            <tbody>
              {values.career.map((career, index) => (
                <tr key={index}>
                  {isEdit && editIndex === index ? (
                    <>
                      <td className="px-12 py-1">
                        <input
                          onChange={handleEditChange}
                          type="text"
                          name="career_field"
                          className="input_field"
                          placeholder="Enter Career"
                          value={editCareerObj.career_field}
                        />
                      </td>
                      <td className="px-12 py-1">
                        <input
                          onChange={handleEditChange}
                          type="text"
                          name="job_title"
                          className="input_field"
                          placeholder="Enter job title"
                          value={editCareerObj.job_title}
                        />
                      </td>
                      <td className="px-12 py-1">
                        <input
                          onChange={handleEditSkills}
                          type="text"
                          name="skills"
                          className="input_field"
                          placeholder="Enter skills"
                          value={newEditSkill || ""}
                        />
                        <div className="flex justify-between items-center">
                          <div className="p-1 flex gap-2 items-center flex-wrap">
                            {editCareerObj.skills?.map((skill, i) => (
                              <div
                                className="flex gap-2 items-center p-1 text-green-500 border border-green-500 text-xs rounded-lg"
                                key={i}
                              >
                                <p>{skill}</p>
                                <svg
                                  onClick={() => removeEditSkill(skill)}
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
                          <div>
                            <button
                              type="button"
                              onClick={handleEditSkill}
                              className="button w-max mt-2"
                            >
                              Add skill
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-16">
                        <div className="flex gap-2 items-center">
                          <button className="button" onClick={handleEditCareer}>
                            Save
                          </button>
                          <button className="button" onClick={handleCancelEdit}>
                            Cancel
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-16 py-1">{career.career_field}</td>
                      <td className="px-16 py-1">{career.job_title}</td>
                      <td className="px-16 py-1 flex gap-2 flex-wrap">
                        {career.skills.map((skill, skillIndex) => (
                          <p
                            key={skillIndex}
                            className="text-green-500 border border-green-500 p-1 rounded-lg text-xs"
                          >
                            {skill}
                          </p>
                        ))}
                      </td>
                      <td className="px-16">
                        <div className="flex items-center gap-4">
                          <svg
                            onClick={() => handleEdit(index)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-pencil cursor-pointer"
                          >
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                            <path d="m15 5 4 4" />
                          </svg>
                          <svg
                            onClick={() => removeCareer(career)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trash-2 cursor-pointer"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                          </svg>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* CAREER ASPIRATIONS DIV */}
      <div className="p-4 border border-slate-300 rounded-lg">
        <div>
          <p className="font-semibold text-3xl">Career Aspirations</p>
          <p className="font-semibold text-green-500 mt-2">
            If you are not sure what you want to do, you can leave this blank
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="input_field_div">
            <label
              className="text-sm relative text-slate-500"
              htmlFor="industry"
            >
              Industry of interest
              <p className="absolute top-0 right-0 rounded-full text-red-500 ">
                *
              </p>
            </label>
            <Field
              className="input_field"
              as="select"
              name="industry"
              placeholder="Select..."
            >
              {Industry?.map((industry, index) => (
                <option key={index} value={industry}>
                  {industry}
                </option>
              ))}
            </Field>
            {errors.industry && typeof errors.industry === "string" ? (
              <p className="text-xs text-red-500">{errors.industry}</p>
            ) : null}
          </div>
          <div className="input_field_div">
            <label
              className="relative text-sm text-slate-500"
              htmlFor="job_position"
            >
              Job position of interest
              <p className="absolute top-0 right-0 rounded-full text-red-500 ">
                *
              </p>
            </label>
            <Field
              className="input_field"
              type="text"
              name="job_position"
              placeholder="Enter job position"
            />
            {errors.job_position && typeof errors.job_position === "string" ? (
              <p className="text-xs text-red-500">{errors.job_position}</p>
            ) : null}
          </div>
          <div className="input_field_div">
            <label
              className="text-sm relative text-slate-500"
              htmlFor="job_position_level"
            >
              Job position level
              <p className="absolute top-0 right-0 rounded-full text-red-500 ">
                *
              </p>
            </label>
            <Field
              className="input_field"
              as="select"
              name="job_position_level"
              placeholder="Select..."
            >
              {Position?.map((position, index) => (
                <option key={index} value={position}>
                  {position}
                </option>
              ))}
            </Field>
            {errors.position && typeof errors.position === "string" ? (
              <p className="text-xs text-red-500">{errors.position}</p>
            ) : null}
          </div>
          <div className="input_field_div">
            <label
              className="relative text-sm text-slate-500"
              htmlFor="job_location"
            >
              Job location
              <p className="absolute top-0 right-0 rounded-full text-red-500 ">
                *
              </p>
            </label>
            <Field
              className="input_field"
              type="text"
              name="job_location"
              placeholder="Enterj job location"
            />
            {errors.job_location && typeof errors.job_location === "string" ? (
              <p className="text-xs text-red-500">{errors.job_location}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExprience;
