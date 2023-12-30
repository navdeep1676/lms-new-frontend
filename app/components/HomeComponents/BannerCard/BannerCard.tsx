import { FaClock } from "react-icons/fa";
import "./BannerCard.css";
import { CustomButton } from "../../CustomButton/CustomButton";
import StarRatingComponent from "react-star-rating-component";
export const BannerCard = () => {
  return (
    <div className="w-auto card bg-white mx-3">
      <div className="position-relative">
        <div className="duration-strip text-white yellow-color">
          <FaClock /> 20 Hours
        </div>
        <img
          src="https://coderstrustbd.com/wp-content/uploads/2021/08/react-js-banner.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-white p-0">
          <div className="level-strip">Beginner</div>
          <h5 className="card-title color-black mt-3">Card title</h5>
          <StarRatingComponent name="rate1" starCount={5} value={2} />
          <CustomButton
            title="Enroll Now"
            className="mt-1"
            transitionClass="fill-one"
          />
        </div>
      </div>
    </div>
  );
};
