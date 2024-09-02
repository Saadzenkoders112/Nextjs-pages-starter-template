// React Imports
import { FC, Fragment } from "react";

// React Query Imports
import { UserLoginMutationHook } from "@/services/react-query-client/auth/user-login";

// Custom Component Imports
import { Button } from "@/components/ui/button";
import { setCookieClientSideFn } from "@/utils/storage.util";

interface ISignInViewProps {}

type Response = {
  email: string;
  firstname: string;
  gender: string;
  id: number;
  image: string;
  token: string; // Include token in the response type
};

const SignInView: FC<ISignInViewProps> = () => {
  const { mutateAsync } = UserLoginMutationHook();

  /**
   * @description Handles the login process for the user
   *
   * @returns {void}
   */
  const handleLogin = async (): Promise<void> => {
    const response = (await mutateAsync({
      username: "emilys",
      password: "emilyspass",
    })) as Response;
    setCookieClientSideFn("projectToken", response.token);
  };
  return (
    <Fragment>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col gap-2 p-4 border border-slate-400 shadow-2xl w-2/5 h-3/5">
          <div className="text-2xl font-semibold  text-center">
            Login Details
          </div>
          <form>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-500 " htmlFor="username">
                Enter username
              </label>
              <input
                className="border-b border-b-slate-400 focus:outline-none focus:border-b-blue-500 duration-200"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-500 " htmlFor="username">
                Enter password
              </label>
              <input
                className="border-b border-b-slate-400 focus:outline-none focus:border-b-blue-500 duration-200"
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SignInView;
