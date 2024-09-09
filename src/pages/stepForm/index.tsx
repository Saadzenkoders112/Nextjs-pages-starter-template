import PersonalDetails from "@/components/formComponents/personalDetails";
import WorkExprience from "@/components/formComponents/workExperience";
import { FormikProvider, Form, useFormik } from "formik";
import React, { useState } from "react";
import { personalDetailsSchema } from "@/schema/formSchema/personalDetailsSchema";
import { Persist } from 'formik-persist'
import { Career } from "@/types/Interfaces/form-interfaces/work-exprience.interface";
import { workExperienceSchema } from "@/schema/formSchema/workExperienceSchema";
import Education from "@/components/formComponents/education";
import { EducationInterface } from "@/types/Interfaces/form-interfaces/education.interface";
import { educationSchema } from "@/schema/formSchema/educationSchema";

interface FormValues {
  file: string;
  full_name: string;
  age: number;
  service: string;
  rank: string;
  language: string;
  career: Career[];
  industry: string,
  job_position: string,
  job_position_level: string,
  job_location: string,
  education: EducationInterface[]
  certificates: [string]
}

const StepperForm = () => {
  const [step, setStep] = useState<number>(0);

  const initialValues: FormValues = {
    file: "",
    full_name: "",
    age: 0,
    service: "",
    rank: "",
    language: "",
    career: [],
    industry: "",
    job_position: "",
    job_position_level: "",
    job_location: "",
    education: [],
    certificates: [""]
  };

  const handleSubmit = (values: FormValues, {resetForm}) => {
    console.log(values);
    resetForm()
  };

  const handleSchema = () => {
    if (step == 0) {
      return personalDetailsSchema
    } else if(step ==1 ){ 
      return workExperienceSchema
    } else {
      return educationSchema
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: handleSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="overflow-x-hidden p-12">
        {/* <div>
        <Image src="./assets/images/stepper-logo-form.svg" alt="Logo" height={100} width={100}/>
      </div> */}
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            {step == 0 ? <PersonalDetails errors={formik.errors} /> : ""}
            {step == 1 ? <WorkExprience errors={formik.errors} /> : ""}
            {step == 2 ? <Education errors={formik.errors} /> : ""}
            <div className="flex justify-between p-2">
              <button
                type="button"
                disabled={step == 0}
                className={step == 0 ? "button opacity-40" : "button"}
                onClick={() => setStep(step - 1)}
              >
                Previous
              </button>
              {step < 2 ? (
                <button
                  className="button"
                  type="button"
                  onClick={async () => {
                    const errors = await formik.validateForm();
                    console.log(errors)
                    if (Object.keys(errors).length === 0 && formik.dirty) {
                      setStep(step + 1);
                    }
                  }}
                >
                  Next
                </button>
              ) : (
                <button className="button" type="submit">
                  Submit
                </button>
              )}
            </div>
            <Persist name="formik" />
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default StepperForm;
