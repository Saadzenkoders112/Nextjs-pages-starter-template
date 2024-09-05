// React Imports
import { FC, Fragment } from "react";

// React Query Imports
import { UserLoginMutationHook } from "@/services/react-query-client/auth/user-login";

// Custom Component Imports
import { Button } from "@/components/ui/button";
import { setCookieClientSideFn } from "@/utils/storage.util";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { loginSuccess } from "@/redux/slices/authentication.slice";
import { useAppDispatch } from "@/redux/store";
import { loginSchema } from "@/schema/login.schema";

interface ISignInViewProps {}

interface Response {
  email: string;
  firstname: string;
  gender: string;
  id: number;
  image: string;
  token: string; // Include token in the response type
}

interface FormData {
  username: string;
  password: string;
}

const SignInView: FC<ISignInViewProps> = () => {
  const { mutateAsync, isPending } = UserLoginMutationHook();

  const router = useRouter();
  const initialValues: FormData = {
    username: "",
    password: "",
  };

  const loginSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(loginSchema),
  });

  // FOR USER STORE
  const dispatch = useAppDispatch()

  /**
   * @description Handles the login process for the user
   *
   * @returns {void}
   */
  const onSubmit = async (data: FormData) => {
    console.log(data);
    const response = (await mutateAsync(data)) as Response;
    setCookieClientSideFn("projectToken", response.token);
    const {token, ...user} = response
    dispatch(loginSuccess({user: user, token: response.token}))
    reset();
    router.push("/");
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col gap-2 p-4 border border-slate-400 shadow-2xl w-2/5 h-3/5">
          <div className="text-2xl font-semibold  text-center">
            Login Details
          </div>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-500 " htmlFor="username">
                Enter username
              </label>
              <input
                className="border-b border-b-slate-400 focus:outline-none focus:border-b-blue-500 duration-200"
                type="text"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-500 text-xs">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-500 " htmlFor="username">
                Enter password
              </label>
              <input
                className="border-b border-b-slate-400 focus:outline-none focus:border-b-blue-500 duration-200"
                type="text"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              disabled={isPending}
              className={isPending ? "w-[200px] p-1 text-blue-500 hover:bg-slate-200 duration-200 cursor-pointer border border-slate-300 opacity-50":"w-[200px] p-1 text-blue-500 hover:bg-slate-200 duration-200 cursor-pointer border border-slate-300"}
            >
              {isPending ? (<p>Logging In...</p>):(<p>Login</p>)}
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SignInView;
