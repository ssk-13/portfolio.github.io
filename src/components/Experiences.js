import "./new1.css";
import "./new.js";
import { experiences } from "../record";

function Experiences() {
  return (
    <div class="container">
        <div class="experiences">
      <h1>Experiences</h1>
      </div>
      <div class="container">
        {experiences.map((record) => {
          return (
            <div class="card">
              <div class="box">
                <div class="content">
                  <h2>{record.id}</h2>
                  <h1>{record.title}</h1>
                  <br></br>
                  <h3>{record.company_name}</h3>
                  <br></br>
                  <p>{record.date}</p>
                  <p></p>
                  <a href="none">view</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experiences;
