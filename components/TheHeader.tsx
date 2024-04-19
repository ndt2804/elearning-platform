"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import ModalWithFormExample from "./DialogLogin";

export default function TheHeader() {
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
              />
            </a>
          </div>

          <div className="py-6">
            <div className="flex">
              <ModalWithFormExample />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
