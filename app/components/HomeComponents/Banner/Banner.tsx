"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import { BannerCard } from "../BannerCard/BannerCard";
import { CustomButton } from "../../CustomButton/CustomButton";
export const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    className: "center",
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
  };
  return (
    <section
      className="container-fluid banner-bg"
      style={{ paddingTop: "90px" }}
    >
      <div className="row py-5">
        <div className="col-5">
          <div className="me-5 pe-5 banner-data">
            <h1 className="color-black font-bold">
              Learn and Grow <br /> Together with <br />{" "}
              <span className="pre-heading-color">Developer's Corner</span>
            </h1>
            <p className="color-black  mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              architecto impedit nisi explicabo, delectus provident,
              exercitationem nobis quia repudiandae vero beatae nihil temporibus
              ipsum. Repellat culpa dignissimos ad temporibus laboriosam?
            </p>
            <CustomButton
              title="Find Courses"
              transitionClass="fill-one"
              className={"mt-3"}
            />
          </div>
        </div>
        <div className="col-7">
          <div className="banner-cards px-5">
            <Slider {...settings}>
              <BannerCard />
              <BannerCard />
              <BannerCard />
              <BannerCard />
              <BannerCard />
              <BannerCard />
              <BannerCard />
              <BannerCard />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
