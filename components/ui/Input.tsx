"use client";
import React from "react";
import { Input, Space, Select } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const InputSearch = () => {
  return (
    <div className="flex justify-between gap-3">
      <Space wrap>
        <div className="relative">
          <Search
            prefix={<SearchOutlined />}
            enterButton="Search"
            placeholder="What are you looking for?
            "
            allowClear
            onSearch={onSearch}
            size="large"
          />
        </div>
        <div className="flex relative flex-shrink-0 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400  flex-wrap items-center text-base justify-center">
          <p className="text-xl text-gray-600 mx-4">
            <span className="relative  w-full ">Filter</span>
          </p>
          <div className="flex p-4 mr-4">
            <div className="mr-4">
              <Select
                size="large"
                defaultValue="Difficulty"
                style={{ width: 160 }}
                options={[
                  { value: "Hard", label: "Hard" },
                  { value: "Normal", label: "Normal" },
                  { value: "Easy", label: "Easy" },
                  { value: "Noob", label: "Noob" },
                ]}
              />
            </div>
            <div className="mr-4">
              <Select
                size="large"
                defaultValue="Languagues"
                style={{ width: 160 }}
                options={[
                  { value: "Javascript", label: "Javascript" },
                  { value: "Java", label: "Java" },
                  { value: "VueJs", label: "VueJs" },
                  { value: "ReactJs", label: "ReactJs" },
                ]}
              />
            </div>
          </div>
        </div>
      </Space>
    </div>
  );
};

export default InputSearch;
