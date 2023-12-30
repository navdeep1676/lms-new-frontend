import { FaCode, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import "./CategoryWrapper.css";
import { GiCheckMark } from "react-icons/gi";

export const CategoriesWrapper = () => {
  const data = [
    {
      id: 1,
      title: "Web Development",
      color: "#0f34a2",
      icon: <FaCode color="#0f34a2" size={"30"} />,
    },
    {
      id: 2,
      title: "Web Development",
      color: "#432124",
      icon: <FaReact color="#432124" size={"30"} />,
    },
    {
      id: 3,
      title: "Web Development",
      color: "#EE4A62",
      icon: <FaNodeJs color="#EE4A62" size={"30"} />,
    },
    {
      id: 1,
      title: "Web Development",
      color: "#0f34a2",
      icon: <FaCode color="#0f34a2" size={"30"} />,
    },
    {
      id: 2,
      title: "Web Development",
      color: "#432124",
      icon: <FaReact color="#432124" size={"30"} />,
    },
    {
      id: 3,
      title: "Web Development",
      color: "#EE4A62",
      icon: <FaNodeJs color="#EE4A62" size={"30"} />,
    },
  ];
  return (
    <section className="bg-white py-5 category-wrapper container-fluid">
      <h1 className="text-center fw-bolder">Top Categories</h1>
      <p className="text-center text-color">
        Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
        et dolore
      </p>

      <div className="categories_list">
        <div className="row">
          {data?.map((item: any) => {
            return (
              <div className="col-4">
                <div
                  style={{ background: item?.color + "30" }}
                  className="p-3 d-flex gap-3 align-items-center mb-3"
                >
                  <div>{item?.icon}</div>
                  <p className="color-black mb-0 fw-bold">{item?.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row d-flex align-items-center about mt-5">
        <div className="col-6">
          <div className="img-card d-flex align-items-center justify-content-center position-relative">
            <img src="./about.webp" className="img-fluid" alt="" />
            <div className="wonder-courses  p-3  d-flex align-items-center gap-3">
              <div className="circle">
                <SiCoursera style={{ color: "#1AB69D" }} />
              </div>
              <div className="d-flex  flex-column">
                <span className="count">29 +</span>
                <span className="text-color fs-15"> Wonderful Courses</span>
              </div>
            </div>
            <div className="video-card">
              <video src="https://www.youtube.com/embed/m2m5Xx5T4No?si=JFo06crGta0_Hm9D"></video>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="about-card">
            <h4 className="text-color">ABOUT US</h4>
            <h5 className="fs-28">
              Learn & Grow Your Skills From{" "}
              <span className="pre-heading-color text-capitalize fs-26 fw-bolder">
                Anywhere
              </span>
            </h5>
            <p className="text-color">
              Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
              ex tempor incididunt labore dolore magna aliquaenim minim veniam
              quis nostrud exercitation ullamco laboris.
            </p>
            <ul className="ps-0" style={{ listStyle: "none" }}>
              <li className="color-black d-flex align-items-center fw-bold gap-3">
                <GiCheckMark
                  size={22}
                  className="fw-bold"
                  style={{ color: "#f8b81f" }}
                />
                Expert Trainers
              </li>
              <li className="color-black d-flex align-items-center fw-bold gap-3">
                <GiCheckMark
                  size={22}
                  className="fw-bold"
                  style={{ color: "#f8b81f" }}
                />
                Online Remote Learning
              </li>
              <li className="color-black d-flex align-items-center fw-bold gap-3">
                <GiCheckMark
                  size={22}
                  className="fw-bold"
                  style={{ color: "#f8b81f" }}
                />
                Lifetime Access
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
