"use client";
// import { Card } from "antd";
// import React, { useEffect, useState } from "react";

// interface Course {
//   _id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   price: number;
// }

// const CardCourse: React.FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/course");
//         if (response.ok) {
//           const data = await response.json();

//           if (data && Array.isArray(data)) {
//             setCourses(data);
//           } else {
//             console.error("Dữ liệu không hợp lệ hoặc không tồn tại.");
//           }
//         } else {
//           throw new Error("Failed to fetch courses");
//         }
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const { Meta } = Card;

//   return (
//     <div className="flex container w-full mx-auto">
//       {courses.map((course, index) => (
//         <div className="m-3" key={course._id}>
//           <Card
//             key={course._id}
//             size="small"
//             style={{ width: 280, marginBottom: 20 }}
//             cover={<img alt="example" src={course.imageUrl} />}
//           >
//             <div className="flex text-xl font-extrabold justify-between items-center ">
//               <a>{course.title}</a>
//               <span>{course.price}</span>
//             </div>
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardCourse;
import { Card } from "antd";
import React, { useEffect, useState } from "react";

interface Course {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface Props {
  searchTerm: string;
}

const CardCourse: React.FC<Props> = ({ searchTerm }) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/course");
        if (response.ok) {
          const data = await response.json();

          if (data && Array.isArray(data)) {
            setCourses(data);
          } else {
            console.error("Dữ liệu không hợp lệ hoặc không tồn tại.");
          }
        } else {
          throw new Error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const { Meta } = Card;

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex container w-full mx-auto">
      {filteredCourses.map((course, index) => (
        <div className="m-3" key={course._id}>
          <Card
            key={course._id}
            size="small"
            style={{ width: 280, marginBottom: 20 }}
            cover={<img alt="example" src={course.imageUrl} />}
          >
            <div className="flex text-xl font-extrabold justify-between items-center ">
              <a>{course.title}</a>
              <span>{course.price}</span>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardCourse;
