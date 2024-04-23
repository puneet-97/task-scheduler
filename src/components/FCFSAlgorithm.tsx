import { FaPlus } from "react-icons/fa6";
import { HiMiniCpuChip } from "react-icons/hi2";
import ProcessForm from "./ProcessForm";
import { useState } from "react";

const FCFSAlgorithm = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fcfs-algorithm h-100">
      <ProcessForm show={show} setShow={setShow} />
      <div className="row gx-0 h-100">
        <div className="col-md-6 p-3 d-flex flex-column align-items-center justify-content-center">
          <h2>First Come First Serve Scheduling</h2>
          <div className="display-5">
            <HiMiniCpuChip className="transition-slow" />
          </div>
        </div>
        <div className="col-md-6 p-3">
          <button
            className="btn btn-dark float-end"
            onClick={() => setShow(true)}
          >
            <FaPlus />
            Add
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FCFSAlgorithm;
