"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import AvatarDropdown from "./ui/Avatar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function TheHeader() {
  const { data: session }: any = useSession();

  return (
    <div>
      <div className="container mx-auto scroll-smooth">
        <div className="flex justify-between px-6">
          <div className="flex items-center py-4">
            <a
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active"
            >
              <Image
                src={logo} // Đường dẫn đến hình ảnh
                width={100} // Chiều rộng (px)
                height={100} // Chiều cao (px)
                alt="Mô tả hình ảnh" // Văn bản thay thế cho hình ảnh
                priority={false}
              />
            </a>
          </div>

          <div className="py-6">
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
                  <AvatarDropdown />

                  {session.user?.email}
                  <li>
                    <button
                      onClick={() => {
                        signOut();
                      }}
                      className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
