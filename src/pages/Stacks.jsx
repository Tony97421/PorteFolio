import NavContact from "../components/NavContact";

const Stacks = () => {
  return (
    <>
    <div className="pageStack">
      <div className="containerCompetences">
        <h1>Mes Compétences :</h1>
      </div>
      <div className="containerImageCompetences">
        <img
          className="competences"
          src="/public/images/mysql.png"
          alt="Mysql"
        />
        <img
          className="react"
          src="/public/images/react.png"
          alt="react"
        />
        <img className="competences" src="/public/images/html.png" alt="html" />
        <img className="css" src="/public/images/css.png" alt="css" />
        <img
          className="git"
          src="/public/images/github.png"
          alt="github"
        />
        <img className="competences" src="/public/images/js.png" alt="JS" />
        <img className="competences" src="/public/images/node.png" alt="Node" />
        <img className="competences" src="/public/images/npm.png" alt="npm" />
        <img
          className="competences"
          src="/public/images/agile.png"
          alt="agile"
        />
      </div>
    </div>
    </>
  );
};


export default Stacks;
