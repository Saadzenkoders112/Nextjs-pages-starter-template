import PersonalDetails from "@/components/formComponents/personalDetails";
import WorkExprience from "@/components/formComponents/workExperience";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import Image from "next/image";
import { personalDetailsSchema } from "@/schema/formSchema/personalDetailsSchema";

interface FormValues {
  file: string;
  full_name: string;
  age: number;
  service: string;
  rank: string;
  language: string;
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
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  

  return (
    <div className="overflow-x-hidden p-8 ">
      {/* <div>
        <Image src="./assets/images/stepper-logo-form.svg" alt="Logo" height={100} width={100}/>
      </div> */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={personalDetailsSchema}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            {step == 0 ? <PersonalDetails /> : ""}
            {step == 1 ? <WorkExprience /> : ""}
            <div className='flex justify-between p-2'>
                <button className="button" onClick={() => setStep(step - 1)}>Previous</button>
              {step < 1  ? (
                <button className="button" onClick={() => setStep(step+1)}>Next</button>
              ) : (
                <button className="button" type="submit">Submit</button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepperForm;
