import { Field } from "formik";
import React from "react";

const WorkExprience = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-500" htmlFor="email">
          Enter your number
        </label>
        <Field
          className="border border-slate-300 rounded-lg p-2 text-sm"
          type="number"
          name="number"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-500" htmlFor="password">
          Enter your city
        </label>
        <Field
          className="border border-slate-300 rounded-lg p-2 text-sm"
          type="text"
          name="city"
        />
      </div>
    </div>
  );
};

export default WorkExprience;
