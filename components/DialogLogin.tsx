import React, { useState } from "react";
import { Button, Modal, Form } from "antd";
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
  const handleSwitchModal = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <>
      <Button onClick={showModal}>Sign In</Button>
      <Modal
        title={isLoginForm ? "Sign In" : "Sign Up"}
        open={visible}
        onOk={form.submit}
        onCancel={handleCancel}
        footer={null}
      >
        {isLoginForm ? <LoginPage /> : <RegisterPage />}
        <div className="flex items-center justify-between">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          <a
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            href="#"
            onClick={handleSwitchModal}
          >
            {isLoginForm ? " or sign up" : " or sign in"}
          </a>
          <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
        </div>
      </Modal>
    </>
  );
}
