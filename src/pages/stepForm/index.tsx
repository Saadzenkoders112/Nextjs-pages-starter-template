import PersonalDetails from "@/components/formComponents/personalDetails";
import WorkExprience from "@/components/formComponents/workExperience";
import { FormikProvider, Form, useFormik } from "formik";
import React, { useState } from "react";
import { personalDetailsSchema } from "@/schema/formSchema/personalDetailsSchema";
import { Persist } from 'formik-persist'
import { Career } from "@/types/Interfaces/form-interfaces/work-exprience.interface";

interface FormValues {
  file: string;
  full_name: string;
  age: number;
  service: string;
  rank: string;
  language: string;
  career: Career[];
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
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: personalDetailsSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="overflow-x-hidden p-12 w-4/5">
        {/* <div>
        <Image src="./assets/images/stepper-logo-form.svg" alt="Logo" height={100} width={100}/>
      </div> */}
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            {step == 0 ? <PersonalDetails errors={formik.errors} /> : ""}
            {step == 1 ? <WorkExprience errors={formik.errors} /> : ""}
            <div className="flex justify-between p-2">
              <button
                type="button"
                disabled={step == 0}
                className={step == 0 ? "button opacity-40" : "button"}
                onClick={() => setStep(step - 1)}
              >
                Previous
              </button>
              {step < 1 ? (
                <button
                  className="button"
                  type="button"
                  onClick={async () => {
                    const errors = await formik.validateForm();
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
