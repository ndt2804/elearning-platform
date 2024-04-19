import React, { useState } from "react";
import { Button, Modal, Form } from "antd";
import Image from "next/image";
import logo from "@/assets/logo.png";
import LoginPage from "./ModalLogin";
import RegisterPage from "./ModalRegister";
export default function ModalWithFormExample() {
  const [visible, setVisible] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };
  const handleSignUpClick = () => {
    setIsLoginForm(false); // Chuyển sang form đăng ký
  };

  return (
    <>
      <Button onClick={showModal}>Sign In</Button>
      <Modal
        title={isLoginForm ? "Đăng nhập" : "Đăng ký"}
        open={visible}
        onOk={form.submit}
        onCancel={handleCancel}
        footer={null}
      >
        {isLoginForm ? (
          // Form đăng nhập
          <LoginPage />
        ) : (
          // Form đăng ký
          <RegisterPage />
        )}
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          <a
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            href="register"
          >
            or sign up
          </a>
          <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
        </div>
      </Modal>
    </>
  );
}
