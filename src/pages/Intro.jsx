import ButtonSkipPagePrincipal from '../components/ButtonSkipPagePrincipal';
import { NavLink } from 'react-router-dom';

const Intro = () => {
    return (
        
        <div className="pageDaccueil">
        <div className="bienvenueSurMonPorteFolio">
          Bienvenue sur mon porteFolio
        </div>
        <NavLink to="/Principal">
        <ButtonSkipPagePrincipal />
        </NavLink>
      </div>
    );
};

export default Intro;