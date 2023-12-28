const NavContact = () => {
  return (
    <div className="containerContact">
      <a
        href="https://github.com/Tony97421"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="gitcat" src="/images/gitcat.png" />
      </a>
      <a
        href="https://www.linkedin.com/in/tony-techer-b7289a263/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="linkedin" src="/images/linkedin.png" />
      </a>
      <a href="mailto:techer307@gmail.com">
      <img className="envoyer" src="/images/envoyer.png" />
      </a>
      <a className="cv" href="/CV/CV de Tony.pdf">cv</a>
    </div>
  );
};

export default NavContact;
