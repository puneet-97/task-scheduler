import classNames from "classnames";
import { IAppLoader } from "../interfaces/general";

const AppLoader = ({ variant = "info", size = "" }: IAppLoader) => {
  return (
    <div className="app-loader">
      <div
        className={classNames(
          "spinner-border",
          { [`spinner-border-${size}`]: size },
          { [`text-${variant}`]: true }
        )}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default AppLoader;
