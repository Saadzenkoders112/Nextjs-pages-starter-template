import { EducationInterface } from "@/types/Interfaces/form-interfaces/education.interface";
import { FormikErrors, FormikValues, useFormikContext } from "formik";
import React, { ChangeEvent, useState } from "react";

interface EducationProps {
  errors: FormikErrors<FormikValues>;
}

const Education: React.FC<EducationProps> = ({ errors }) => {
  const [educationObj, setEducationObj] = useState<EducationInterface>({
    education_level: "",
    institution: "",
    field: "",
  });
  const [newEducation, setNewEducation] = useState<string | null>("");
  const [educationError, setEducationError] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | "">("");
  const [editEducationObj, setEditEducationObj] = useState<EducationInterface>({
    education_level: "",
    institution: "",
    field: "",
  });
  const [newEditEducation, setNewEditEducation] = useState<string | null>("");

  const { values, setFieldValue } = useFormikContext<FormikValues>();

  const handleAddEducation = () => {
    if (
      !(
        educationObj.education_level == "" ||
        educationObj.institution == "" ||
        educationObj.field == ""
      )
    ) {
      values.education.push(educationObj);
      setEducationError(null);
      setEducationObj({
        education_level: "",
        institution: "",
        field: "",
      });
    } else {
      setEducationError("All fields must be filled!");
    }
  };

  const handleAddChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEducationObj((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //   const handleEducationField = (e: ChangeEvent<HTMLInputElement>) => {
  //     setNewEducation(e.target.value);
  //   };

  //   const handleAddSkill = () => {
  //     if (newEducation?.trim()) {
  //       setEducationObj((prev) => ({
  //         ...prev,
  //         skills: [...prev.skills, newEducation.trim()],
  //       }));
  //       setNewEducation("");
  //     }
  //   };

  const handleEditEducation = () => {
    if (
      !(
        editEducationObj.education_level == "" ||
        editEducationObj.institution == "" ||
        editEducationObj.field == ""
      )
    ) {
      values.career[editIndex] = editEducationObj;
      setEducationError(null);
      setEditEducationObj({
        education_level: "",
        institution: "",
        field: "",
      });
      setIsEdit(false);
    } else {
      setEducationError("All fields must be filled!");
    }
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditEducationObj((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //   const handleEditSkills = (e: ChangeEvent<HTMLInputElement>) => {
  //     setNewEditEducation(e.target.value);
  //   };

  //   const handleEditSkill = () => {
  //     if (newEditEducation?.trim()) {
  //       setEditEducationObj((prev) => ({
  //         ...prev,
  //         skills: [...prev.skills, newEditEducation.trim()],
  //       }));
  //       setNewEducation("");
  //     }
  //   };

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

  const removeEducation = (educationToRemove: EducationInterface) => {
    console.log(educationToRemove);
    const updatedEducation = values.education.filter(
      (education) => education !== educationToRemove
    );
    setFieldValue("education", updatedEducation);
  };

  console.log(values)
  console.log(educationObj)

  return (
    <div className="flex flex-col gap-2">
      {/* WORK EXPERIENCE DIV */}
      <div>
        <p className="text-3xl font-semibold pb-4">Education</p>
        <div className="border border-slate-300 p-4 rounded-lg ">
          <div className="flex justify-end">
            <button
              onClick={handleAddEducation}
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
              Add Eudcation
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-2 w-[500px]">
              <label
                className="text-sm relative text-slate-500"
                htmlFor="career"
              >
                Level of education
                <p className="absolute top-0 right-0 rounded-full text-red-500">
                  *
                </p>
              </label>
              <input
                onChange={handleAddChange}
                type="text"
                name="education_level"
                className="input_field"
                placeholder="Enter level"
                value={educationObj.education_level}
              />
            </div>
            <div className="flex flex-col gap-2 w-[500px]">
              <label
                className="text-sm relative text-slate-500"
                htmlFor="password"
              >
                Name of institution
                <p className="absolute top-0 right-0 rounded-full text-red-500">
                  *
                </p>
              </label>
              <input
                onChange={handleAddChange}
                type="text"
                name="institution"
                className="input_field"
                placeholder="Enter name"
                value={educationObj.institution}
              />
            </div>
            <div className="flex flex-col gap-2 w-[500px]">
              <label
                className="text-sm relative text-slate-500"
                htmlFor="password"
              >
                Field of study
                <p className="absolute top-0 right-0 rounded-full text-red-500">
                  *
                </p>
              </label>
              <input
                onChange={handleAddChange}
                type="text"
                name="field"
                className="input_field"
                placeholder="Enter field"
                value={educationObj.field}
              />
              {/* <div className="flex justify-between items-center">
                <div className="p-1 flex gap-2 items-center flex-wrap">
                  {educationObj.skills?.map((skill, index) => (
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
              </div> */}
            </div>
          </div>
          {educationError && (
            <p className="text-xs text-red-500">{educationError}</p>
          )}
          {errors.education && (
            <p className="text-xs text-red-500">{errors.education}</p>
          )}
        </div>
      </div>
      {values.education.length !== 0 && (
        <div className="p-2 border border-slate-300 rounded-lg w-full">
          <table className="table-auto text-left text-slate-500">
            <thead className="font-semibold">
              <tr>
                <td className="px-16 py-4">Education type</td>
                <td className="px-16 py-4">Name of institution</td>
                <td className="px-16 py-4">Field of study</td>
              </tr>
            </thead>
            <tbody>
              {values.education.map((education, index) => (
                <tr key={index}>
                  {isEdit && editIndex === index ? (
                    <>
                      <td className="px-12 py-1">
                        <input
                          onChange={handleEditChange}
                          type="text"
                          name="education_field"
                          className="input_field"
                          placeholder="Enter level"
                          value={editEducationObj.education_level}
                        />
                      </td>
                      <td className="px-12 py-1">
                        <input
                          onChange={handleEditChange}
                          type="text"
                          name="job_title"
                          className="input_field"
                          placeholder="Enter name"
                          value={editEducationObj.institution}
                        />
                      </td>
                      <td className="px-12 py-1">
                        <input
                          onChange={handleEditChange}
                          type="text"
                          name="skills"
                          className="input_field"
                          placeholder="Enter field"
                          value={editEducationObj.field}
                        />
                      </td>
                      <td className="px-16">
                        <div className="flex gap-2 items-center">
                          <button
                            className="button"
                            onClick={handleEditEducation}
                          >
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
                      <td className="px-16 py-1">
                        {education.education_level}
                      </td>
                      <td className="px-16 py-1">{education.institution}</td>
                      <td className="px-16 py-1 flex gap-2 flex-wrap">
                        {education.field}
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
                            onClick={() => removeEducation(education)}
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
    </div>
  );
};

export default Education;
