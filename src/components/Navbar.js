import { navLinks } from "../record";
import "./new.css";
function Navbar() {
  return (
    
    <div class="navvv">
      
      <nav class="navbar " >
  <form class="container-fluid justify-content-end pe-4 ">
   
    {navLinks.map((record) => {
  return (
    <button class="btn btn-outline-light btn-lg  rounded-pill m-4" type="button">{record.title}</button>
  );
})}

    
  </form>
</nav>
    </div>
  );
}

export default Navbar
;
