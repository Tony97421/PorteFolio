import { NavLink } from "react-router-dom";

const ButtonSwitch = () => {
  return (
    
      <div className="containerButton">
        <NavLink to="/Stacks">
      <button type="button" className="buttonSwitch">
        Cliquez pour voir mes compétences
      </button>
      </NavLink>
      </div>
    
  );
};

export default ButtonSwitch;
