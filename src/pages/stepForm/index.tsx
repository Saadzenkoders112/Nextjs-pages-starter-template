import React, { ReactNode } from "react";
import {
  Formik,
  Field,
  Form,
  FormikConfig,
  FormikValues,
  FormikProps,
} from "formik";

type ChildrenType =
  | ReactNode
  | ((props: FormikProps<FormikValues>) => ReactNode);

interface FormikStepperProps extends FormikConfig<FormikValues> {
  children: ChildrenType;
}

const StepperForm = () => {
  return (
    <div>
      <FormikStepper
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {
          alert("Hello");
        }}
      >
        {() => (
          <>
            <div className="flex flex-col gap-2">
              <Field
                className="border border-slate-300 rounded-lg p-2 text-sm"
                type="email"
                name="email"
              />
              <Field
                className="border border-slate-300 rounded-lg p-2 text-sm"
                type="password"
                name="password"
              />
              {/* <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-500" htmlFor="email">
                  Enter your email
                </label>
                <Field
                  className="border border-slate-300 rounded-lg p-2 text-sm"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-500" htmlFor="password">
                  Enter your password
                </label>
                <Field
                  className="border border-slate-300 rounded-lg p-2 text-sm"
                  type="password"
                  name="password"
                />
              </div> */}
            </div>
            <div>
              <button
                className="p-1 rounded-lg bg-black text-white font-semibold"
                type="submit"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </FormikStepper>
    </div>
  );
};

export function FormikStepper({ children, ...props }: FormikStepperProps) {
    console.log(React.Children)
//   const childrenArray = children?.map((child: any) => {
//     console.log(child)
//     return child
//   });
//   console.log(childrenArray)

  return (
    <Formik {...props}>
      {(formikProps: FormikProps<FormikValues>) => (
        <Form className="w-screen h-screen flex justify-center items-center">
          {/* {childrenArray} */}
        </Form>
      )}
    </Formik>
  );
}

export default StepperForm;
