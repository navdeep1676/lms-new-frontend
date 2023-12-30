import { FaLongArrowAltRight } from "react-icons/fa";
import "./CustomButton.css";
export const CustomButton = (props: any) => {
  const { title, transitionClass, className } = props;
  return (
    <div className="btn-container">
      <button className={className}>
        {title}
        <FaLongArrowAltRight className="ms-3" size={22} />
        <div className={transitionClass}></div>
      </button>
    </div>
  );
};
