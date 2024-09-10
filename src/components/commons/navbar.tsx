import { removeUser } from "@/redux/slices/authentication.slice";
import { useAppDispatch } from "@/redux/store";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const logout = () => {
    deleteCookie("projectToken")
    dispatch(removeUser())
    router.push('/login')
  }
  return (
    <div className="flex justify-between p-5 items-center bg-slate-800 text-white border-b border-b-slate-300 ">
      <div className="text-2xl font-semibold">Zenkoders Store</div>
      <div>
        <ul className="flex items-center gap-4">
          <Link href={'/'} className="cursor-pointer hover:bg-slate-700 rounded-lg duration-200 p-2">Home</Link>
          <Link href={'/products'} className="cursor-pointer hover:bg-slate-700 rounded-lg duration-200 p-2">Products</Link>
          <li onClick={logout} className="cursor-pointer hover:bg-slate-700 rounded-lg duration-200 p-2 flex gap-2 items-center text-red-500">
            <span>Logout</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
