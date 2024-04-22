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
                  <Link href="/">
                    <li>Login</li>
                    <AvatarDropdown />
                  </Link>
                  <Link href="/">
                    <li>Register</li>
                  </Link>
                </>
              ) : (
                <>
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
              <AvatarDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
