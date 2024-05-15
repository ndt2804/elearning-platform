import React from "react";
import { Carousel } from "antd";

import carosel1 from "@/public/assets/carosel_1.png";
import carosel2 from "@/public/assets/carosel_2.png";
import carosel3 from "@/public/assets/carosel_3.png";
import carosel4 from "@/public/assets/carosel_4.png";

import Image from "next/image";

const contentStyle: React.CSSProperties = {
  height: "560px",
  width: "100%",
  lineHeight: "360px",
  textAlign: "center",
  background: "#364d79",
};

const App: React.FC = () => (
  <div className="block object-cover">
    <Carousel autoplay>
      <div>
        <Image
          src={carosel1}
          alt="Mô tả hình ảnh"
          priority={false}
          style={contentStyle}
        />
      </div>
      <div>
        <Image
          src={carosel2}
          alt="Mô tả hình ảnh"
          style={contentStyle}
          priority={false}
        />
      </div>
      <div>
        <Image
          src={carosel3}
          alt="Mô tả hình ảnh"
          priority={false}
          style={contentStyle}
        />
      </div>
      <div>
        <Image
          src={carosel4}
          alt="Mô tả hình ảnh"
          priority={false}
          style={contentStyle}
        />
      </div>
    </Carousel>
  </div>
);

export default App;
