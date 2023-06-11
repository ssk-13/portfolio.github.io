import { technologies } from "../record";
import "./new.css";

function Tech() {
  return (
    <div className="containertech">
      <div className="row mx-4">
        <h1 className="text-left">TECHNOLOGIES</h1>
        {technologies.map((record) => {
          return (
            <div key={record} className="col-2 text-center mx-3">
              <img
                src={record.icon}
                alt={record.name}
                className="img-fluid logo my-4 "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tech;
