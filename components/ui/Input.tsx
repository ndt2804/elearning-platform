"use client";
import React from "react";
import { Input, Space, Select } from "antd";
import type { SearchProps } from "antd/es/input/Search";

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const InputSearch = () => {
  return (
    <div className="flex justify-between gap-3">
      <Space wrap>
        <div className="relative">
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <div className="flex relative flex-shrink-0">
          <span>Filter</span>
          <Select
            defaultValue="Difficulty"
            style={{ width: 120 }}
            options={[
              { value: "Hard", label: "Hard" },
              { value: "Normal", label: "Normal" },
              { value: "Easy", label: "Easy" },
              { value: "Noob", label: "Noob" },
            ]}
          />
          <Select
            defaultValue="Languagues"
            style={{ width: 120 }}
            options={[
              { value: "Javascript", label: "Javascript" },
              { value: "Java", label: "Java" },
              { value: "VueJs", label: "VueJs" },
              { value: "ReactJs", label: "ReactJs" },
            ]}
          />
        </div>
      </Space>
    </div>
  );
};

export default InputSearch;
