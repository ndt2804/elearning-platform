"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.png";
import AvatarDropdown from "./ui/Avatar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function TheHeader() {
  const { data: session }: any = useSession();
  console.log(session);
  return (
    <header className="text-gray-600 body-font bg-gray-200 ">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <a
          aria-current="page"
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 router-link-active router-link-exact-active"
        >
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Logo"
            priority={false}
          />
          <span className="ml-3  text-2xl font-semibold">Owlearning</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Homepage </a>
          <a className="mr-5 hover:text-gray-900">Courses</a>
          <a className="mr-5 hover:text-gray-900">Mentor</a>
          <a className="mr-5 hover:text-gray-900">Blog</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex">
          {!session ? (
            <>
              <Link href="/login">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg">
                  <span className="relative px-10 py-2.5 bg-white rounded-md ">
                    Login
                  </span>
                </button>
              </Link>
              <Link href="/register">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-slate-900 rounded-lg bg-amber-300">
                  <span className="relative px-8 py-2.5 rounded-md bg-amber-300">
                    Sign Up
                  </span>
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="hover:bg-cyan-700 rounded-full">
                <AvatarDropdown />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
