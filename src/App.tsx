import classNames from "classnames";
import { ALGORITHMS } from "./constants/cAlgorithms";
import { IAlgorithm } from "./interfaces/general";
import { useState } from "react";
import AppLoader from "./components/AppLoader";

const App = () => {
  const [progress, setProgress] = useState<boolean>(false);
  const [selectedAlgorithm, setSelectAlgorithm] = useState<string>("");
  const chooseAlgorithm = (algorithmName: string) => {
    if (progress) return;
    setProgress(true);
    setSelectAlgorithm(algorithmName);
    setTimeout(() => {
      setProgress(false);
    }, 800);
  };
  return (
    <div className="h-100">
      <ul className="list-group list-group-horizontal rounded-0">
        {ALGORITHMS.map((algorithm: IAlgorithm, index: number) => (
          <li
            key={index}
            title={algorithm.name}
            className={classNames(
              "list-group-item list-group-item-action list-group-item-info hand text-center rounded-0",
              { active: algorithm.name === selectedAlgorithm }
            )}
            onClick={() => chooseAlgorithm(algorithm.name)}
          >
            <span className="txt-lg">{algorithm.name}</span>
            <span className="txt-sm">{algorithm.shortName}</span>
          </li>
        ))}
      </ul>
      <div className="d-flex align-items-center justify-content-center mt-5">
        {progress && <AppLoader size="sm" />}
        <span className="ms-2">
          {progress ? "Loading Content..." : "Content"}
        </span>
      </div>
    </div>
  );
};

export default App;
