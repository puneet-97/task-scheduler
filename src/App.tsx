import React, { useState } from "react";
import classNames from "classnames";
import { ALGORITHMS } from "./constants/cAlgorithms";
import { IAlgorithm } from "./interfaces/general";
import AppLoader from "./components/AppLoader";
import FCFSAlgorithm from "./components/FCFSAlgorithm";

const App: React.FC = () => {
  const [isProgressing, setIsProgressing] = useState<boolean>(false);
  const [hasData, setHasData] = useState<boolean>(true);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>(
    "First Come First Serve"
  );

  const selectAlgorithm = (algorithmName: string) => {
    if (isProgressing) return;

    setIsProgressing(true);
    setSelectedAlgorithm(algorithmName);

    setTimeout(() => {
      setIsProgressing(false);
      setHasData(true);
    }, 200);
  };

  return (
    <div className="app h-100">
      <ul className="algorithm-list list-group list-group-horizontal rounded-0">
        {ALGORITHMS.map((algorithm: IAlgorithm, index: number) => (
          <li
            key={index}
            title={algorithm.name}
            className={classNames(
              "list-group-item list-group-item-action list-group-item-info hand text-center rounded-0",
              { active: algorithm.name === selectedAlgorithm }
            )}
            onClick={() => selectAlgorithm(algorithm.name)}
          >
            <span className="txt-lg h-100">{algorithm.name}</span>
            <span className="txt-sm h-100">{algorithm.shortName}</span>
          </li>
        ))}
      </ul>

      <div className="run-space d-flex align-items-center justify-content-center">
        {isProgressing && <AppLoader size="sm" />}

        <div className={classNames("w-100 h-100", { "d-none": !hasData })}>
          <FCFSAlgorithm />
        </div>

        {!selectedAlgorithm && "Choose an algorithm to Start"}
      </div>
    </div>
  );
};

export default App;
