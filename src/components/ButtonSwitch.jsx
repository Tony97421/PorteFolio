import { NavLink } from "react-router-dom";

const ButtonSwitch = () => {
  return (
    <NavLink to="/Stacks">
      <button type="button" className="buttonSwitch">
        Cliquez pour voir mes compétences
      </button>
    </NavLink>
  );
};

export default ButtonSwitch;
