import { projects } from "../record";
import "./new2.css";

function Project() {
  return (
    <div>
        <div class="Project">
        <h1>Projects</h1>
        </div>
        {projects.map((record) => {
          return (
            <div class="card">
                <h1>{record.name}</h1>
            <p>{record.description}.</p>
            
           <p>{record.tags.map(
                (tag)=>{
                    return(
                        <li className={`color-${tag.color} list-inline-item`}>{tag.name}</li>
                    )

                }
            )}</p> 
            <a class="card-footer" href={record.source_code_link}>github</a>

          </div>
            
          );
        })}
      
    </div>
  );
}

export default Project;
