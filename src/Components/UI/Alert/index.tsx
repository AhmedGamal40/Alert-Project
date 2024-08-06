import { X } from "lucide-react";
import "./index.scss";
import { IProps } from "../../../Interfaces";


const Alert = ({ type, icon, title, description }: IProps) => {
  return (
    <>
      <div className={type}>
        <div className="alert-header">
          <div className="title">
            <span>{icon}</span>
            <h4>{title} </h4>
          </div>
          <X className="close" />
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Alert;


