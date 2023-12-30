import React from "react";
import "./CourseCard.css";
import { CiUser } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { TbBooks } from "react-icons/tb";
import { IoStar } from "react-icons/io5";
const courses = [
  {
    weeks: 6,
    img: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif",
    level: "Intermediate",
    ratings: 4,
    title: "Web Development Bootcamp",
    price: 49.99,
    numberOfStudents: 1000,
    lessons: 30,
  },
  {
    weeks: 8,
    img: "https://d8zm9ei35njj5.cloudfront.net/uploads/2022/04/best-computer-courses.webp",
    level: "Advanced",
    ratings: 5,
    title: "React Masterclass",
    price: 69.99,
    numberOfStudents: 1500,
    lessons: 40,
  },
];
export const CourseCard = () => {
  return (
    <>
      <div className="bg-light py-5">
        <h3 className="font-weight-bold text-uppercase mb-4 text-center text-secondary">
          POPULAR COURSES
        </h3>
        <h1 className="display-4 text-center text-dark">
          Pick A Course To Get Started
        </h1>

        <div className="container-fluid pop-cont d-grid">
          {courses.map((data, index) => (
            <div className="main-card-pop" key={index}>
              <div className="inner-card-abs d-flex">
                <FiClock />
                {data.weeks} Weeks
              </div>
              <img src={data.img} alt="imageErr" className="w-100" />
              <div className="sub-inner-pop-div d-grid">
                <div className="custom-style">{data.level}</div>
                <h5 className="paragraph">
                  Starting SEO as your Home Based Business
                </h5>

                <div className="star-pop-main-div d-flex justify-content-between;">
                  <IoStar className="start-pop" />
                  <h6>
                    (<span>{data.ratings}.0</span>/ <span>5.0</span>Ratings)
                  </h6>
                </div>

                <h5 className="course-money">${data.price}</h5>
                <div className="course-last-div d-flex justify-content-between">
                  <p className="pop-last-para d-flex  justify-content-center">
                    <TbBooks className="lib-icon" />
                    {data.lessons} Lesson
                  </p>
                  <hr className="vertical-line" />
                  <p className="pop-last-para">
                    <CiUser className="lib-icon" />
                    {data.numberOfStudents} Students
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
